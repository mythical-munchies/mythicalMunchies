const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  // Extract data from the request body
  const { name, email, message } = req.body;

  // Example nodemailer usage to send email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for email address
      pass: process.env.EMAIL_PASS, // Use environment variable for email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "mythicalmunchiesfun@gmail.com",
    subject: "New message from your website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
