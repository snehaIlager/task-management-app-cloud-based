const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent to:", to);
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

module.exports = sendEmail;
