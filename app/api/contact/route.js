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

    // Серверна валідація — перевіряємо обов'язкові поля
    // (клієнтська валідація через react-hook-form — це додатковий захист)
    if (!firstName || !lastName || !email || !message || !privacy) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    // Відправка листа через Resend (https://resend.com)
    // API ключ зберігається у змінній середовища RESEND_API_KEY на Vercel.
    // Якщо ключа немає (локальна розробка) — просто логуємо в консоль.
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: 'DCMontage Kontaktformular <noreply@dcmontage.de>', // відправник (домен верифікований у Resend)
        to: ['info@dcmontage.de'],                                // отримувач — пошта компанії
        replyTo: email,                                           // відповідь піде напряму клієнту
        subject: `Neue Anfrage von ${firstName} ${lastName}${service ? ` – ${service}` : ''}`,
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
            <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
            <tr><td><strong>E-Mail</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td><strong>Telefon</strong></td><td>${phone}</td></tr>` : ''}
            ${service ? `<tr><td><strong>Leistung</strong></td><td>${service}</td></tr>` : ''}
            <tr><td><strong>Nachricht</strong></td><td style="white-space:pre-wrap">${message}</td></tr>
          </table>
          <p style="color:#888;font-size:12px;margin-top:24px">
            Eingegangen über das Kontaktformular auf dcmontage.de
          </p>
        `,
      });
    } else {
      // Локальна розробка без API ключа — виводимо дані в термінал
      console.log('[Contact Form]', { firstName, lastName, email, service, message });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[Contact API]', err);
    return NextResponse.json({ error: 'Server-Fehler' }, { status: 500 });
  }
}
