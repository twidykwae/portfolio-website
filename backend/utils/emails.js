import nodemailer from "nodemailer";

export const sendMeEmail = async ({ Name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${Name ||  ""}" <${email}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: "New Contact Form Message",
    text: `You received a new message from ${Name || ""} (${email}):\n\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};
