
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "delivered@resend.dev",
      subject: "Запись на консультацию",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return Response.json({ success: false, error });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return Response.json({ success: false, error: String(err) });
  }
}




