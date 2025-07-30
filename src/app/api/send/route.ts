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
      from: 'Wash Club Webbformulär <no-reply@washclub.se>',
      to: ['info@washclub.se'],
      replyTo: email,
      subject: `Nytt meddelande från ${name} via webbformulär: ${subject}`,
      html: `
        <h2>Nytt meddelande via webbformuläret</h2>
        <p><strong>Avsändare:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Ämne:</strong> ${subject}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 0.9em;">Detta meddelande skickades via kontaktformuläret på washclub.se. Du kan svara direkt på detta mail för att kontakta avsändaren.</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    // Logga felet i produktionsmiljön utan att exponera detaljer till klienten
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error sending email:', error);
    }
    
    return NextResponse.json(
      { error: 'Ett fel uppstod när meddelandet skulle skickas' },
      { status: 500 }
    );
  }
}