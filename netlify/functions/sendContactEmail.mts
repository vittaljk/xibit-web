const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const {
      firstName,
      lastName,
      handPhone,
      companyName,
      designation,
      email,
      message,
    } = data;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "reachus@xibit.homes",
        pass: process.env.ZOHO_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <reachus@xibit.homes>`,
      to: "reachus@xibit.homes",
      subject: "New Contact Form Submission",
      text:
        `You have received a new message from the contact form:\n\n` +
        `First Name: ${firstName}\n` +
        `Last Name: ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone Number: ${handPhone}\n` +
        `Company Name: ${companyName}\n` +
        `Designation: ${designation}\n\n` +
        `Message:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send email.",
        error: error.message,
      }),
    };
  }
};
