import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // await transporter.sendMail({
    //   from: `"Site Form" <${process.env.EMAIL_USER}>`,
    //   to: process.env.EMAIL_USER,
    //   subject: "New message from site(test mode)",
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Message: ${message}
    //   `,
    // });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "TEST",
        text: "Hello",
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
  console.error("MAIL ERROR:", error);
  return new Response(JSON.stringify({ success: false, error: String(error) }));
}
}