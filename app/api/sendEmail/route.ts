import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "delivered@resend.dev",
      subject: "Новое сообщение с сайта",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return Response.json({ success: false, error });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: String(err) });
  }
}