import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RE_SEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <andy@contact.synapselabs.org>',
            to: ['andyradulescu@synapselabs.org'],
            subject: `New message from ${name}`,
            replyTo: email,
            html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><br/><strong>Message:</strong><br/>${message}`,
        });

        if (error) {
            console.log(error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
