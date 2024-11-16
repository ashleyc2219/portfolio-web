import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const msg = {
      to: "hello@justinosagie.com", // Your email
      from: "noreply@justinosagie.com", // Verified sender
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
