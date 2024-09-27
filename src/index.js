const express = require('express');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(helmet()); // Security headers
app.use(xss()); // Prevent XSS attacks
app.use(cors()); // Enable CORS

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests, please try again later.',
});

// Nodemailer configuration (use your email service)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any SMTP service like Gmail, Outlook, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route
app.post(
  '/api/contact',
  contactLimiter, // Apply rate limiting
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Send the email
    try {
      await transporter.sendMail({
        from: email,
        to: process.env.RECIPIENT_EMAIL, // The email where you'd like to receive messages
        subject: `New Contact Form Submission from ${name}`,
        text: `Message: ${message}\n\nFrom: ${name} <${email}>`,
      });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  }
);

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
