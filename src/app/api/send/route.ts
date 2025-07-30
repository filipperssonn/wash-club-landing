import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Skapa en ny Resend-instans
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validera input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alla fält måste fyllas i' },
        { status: 400 }
      );
    }

    // Skicka email med verifierad domän
    const data = await resend.emails.send({
      from: 'Wash Club Kontaktformulär <kontakt@washclub.se>',
      to: ['info@washclub.se'],
      reply_to: email,
      subject: `${subject}`,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Från:</strong> ${name} (${email})</p>
        <p><strong>Ämne:</strong> ${subject}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Email sent:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Ett fel uppstod när meddelandet skulle skickas' },
      { status: 500 }
    );
  }
}