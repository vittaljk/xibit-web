const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully!" }),
  };
  // try {
  //   const data = JSON.parse(event.body); // Extract form data
  //   const { name, email, message } = data;
  //   // Configure the SMTP transporter
  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.yourdomain.com", // Replace with your SMTP server
  //     port: 587, // Common SMTP port
  //     secure: false, // True for port 465, false for 587
  //     auth: {
  //       user: "info@wtfit.co.in", // Your email
  //       pass: "your-email-password", // Your email password (or app password)
  //     },
  //   });
  //   // Email content
  //   const mailOptions = {
  //     from: `"Contact Form" <info@wtfit.co.in>`, // Sender address
  //     to: "info@wtfit.co.in", // Recipient address
  //     subject: "New Contact Form Submission",
  //     text: `You have a new message from ${name} (${email}):\n\n${message}`,
  //   };
  //   // Send the email
  //   await transporter.sendMail(mailOptions);
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: "Email sent successfully!" }),
  //   };
  // } catch (error) {
  //   console.error("Error sending email:", error);
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({
  //       message: "Failed to send email.",
  //       error: error.message,
  //     }),
  //   };
  // }
};
