import nodemailer from "nodemailer";

export const sendMeEmail = async ({ firstName, lastName, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName || ""}" <${email}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: "New Contact Form Message",
    text: `You received a new message from ${firstName} ${lastName || ""} (${email}):\n\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};
