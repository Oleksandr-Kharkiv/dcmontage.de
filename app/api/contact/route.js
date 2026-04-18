// API-маршрут для обробки контактної форми.
// Виконується на сервері (не в браузері) — тому тут безпечно використовувати API ключі.
// URL: POST /api/contact
// force-dynamic — запускається на кожен запит, не кешується.

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Зчитуємо JSON з тіла запиту (дані з контактної форми)
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message, privacy } = body;

    console.log('[Contact API] Отримано запит від:', email);

    // Серверна валідація — перевіряємо обов'язкові поля
    if (!firstName || !lastName || !email || !message || !privacy) {
      console.warn('[Contact API] Валідація не пройшла — відсутні обов\'язкові поля');
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn('[Contact API] Невалідний email:', email);
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    // Перевіряємо наявність API ключа
    const apiKey = process.env.RESEND_API_KEY;
    console.log('[Contact API] RESEND_API_KEY присутній:', !!apiKey);

    if (!apiKey) {
      // Локальна розробка без API ключа — виводимо дані в термінал
      console.log('[Contact API] Режим розробки — лист не відправляється:', { firstName, lastName, email, service, message });
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    console.log('[Contact API] Відправляємо лист на office@solaringenieur.com...');

    const result = await resend.emails.send({
      from: 'DCMontage Kontaktformular <noreply@dcmontage.de>', // відправник (домен верифікований у Resend)
      to: ['office@solaringenieur.com'],
      replyTo: email,
      subject: `Neue Anfrage von ${firstName} ${lastName}${service ? ` – ${service}` : ''}`,
      html: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Header -->
        <tr><td style="background:#0d1117;border-radius:12px 12px 0 0;padding:20px 32px;">
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-right:10px;">
                      <div style="width:32px;height:32px;background:#f4a000;border-radius:8px;text-align:center;line-height:32px;font-size:16px;">▲</div>
                    </td>
                    <td>
                      <span style="color:#fff;font-size:17px;font-weight:500;"><strong style="font-weight:800;color:#f4a000;">DC</strong>Montage</span>
                    </td>
                  </tr>
                </table>
              </td>
              <td align="right">
                <span style="font-size:12px;color:rgba(255,255,255,.4);">Neue Kontaktanfrage</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#fff;padding:32px;border-left:1px solid #e4e4e7;border-right:1px solid #e4e4e7;">

          <!-- Rows -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f4f4f5;width:110px;vertical-align:top;">
                <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#a1a1aa;">Name</span>
              </td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                <span style="font-size:15px;color:#18181b;font-weight:500;">${firstName} ${lastName}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#a1a1aa;">E-Mail</span>
              </td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                <a href="mailto:${email}" style="font-size:15px;color:#f4a000;text-decoration:none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#a1a1aa;">Telefon</span>
              </td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                <span style="font-size:15px;color:#18181b;">${phone}</span>
              </td>
            </tr>` : ''}
            ${service ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#a1a1aa;">Leistung</span>
              </td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f4f4f5;vertical-align:top;">
                <span style="display:inline-block;background:#fff7e6;color:#b45309;font-size:13px;font-weight:600;padding:3px 10px;border-radius:20px;">${service}</span>
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding:10px 0;vertical-align:top;">
                <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#a1a1aa;">Nachricht</span>
              </td>
              <td style="padding:10px 0 10px 16px;vertical-align:top;">
                <p style="margin:0;font-size:15px;color:#18181b;line-height:1.65;white-space:pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>

          <!-- Reply CTA -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
            <tr><td>
              <a href="mailto:${email}" style="display:inline-block;background:#f4a000;color:#fff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">
                Antworten →
              </a>
            </td></tr>
          </table>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#fafafa;border:1px solid #e4e4e7;border-top:none;border-radius:0 0 12px 12px;padding:16px 32px;">
          <p style="margin:0;font-size:12px;color:#a1a1aa;">
            Eingegangen über das Kontaktformular auf <a href="https://dcmontage.de" style="color:#a1a1aa;">dcmontage.de</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    // Resend повертає { data, error } — перевіряємо обидва поля
    if (result.error) {
      console.error('[Contact API] Resend повернув помилку:', result.error);
      return NextResponse.json({ error: 'Server-Fehler' }, { status: 500 });
    }

    console.log('[Contact API] Лист успішно відправлено. ID:', result.data?.id);
    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (err) {
    console.error('[Contact API] Виняток:', err);
    return NextResponse.json({ error: 'Server-Fehler' }, { status: 500 });
  }
}
