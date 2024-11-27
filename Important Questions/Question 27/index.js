// Import necessary modules
const express = require("express"); // Framework for building web servers
const multer = require("multer"); // Middleware for handling file uploads
const nodemailer = require("nodemailer"); // For sending emails
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing
const bodyParser = require("body-parser"); // Parses incoming request bodies
const path = require("path"); // For working with file paths

// Initialize Express
const app = express();

// Middleware: Enable CORS
// Theory: CORS (Cross-Origin Resource Sharing) is essential when frontend and backend are on different domains.
app.use(cors());

// Middleware: Parse JSON request bodies
// Theory: Body-parser helps parse incoming JSON data in POST requests.
app.use(bodyParser.json());

// ============================ MULTER ==================================
// Theory: Multer is a middleware for handling multipart/form-data (used for file uploads).
// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use unique file names
  },
});
const upload = multer({ storage });

// Route: Upload a single file
app.post("/upload", upload.single("file"), (req, res) => {
  // File upload logic
  // Multer attaches the file object to `req.file`
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.status(200).send(`File uploaded successfully: ${req.file.filename}`);
});

// ========================== NODEMAILER ================================
// Theory: Nodemailer is a module for sending emails from your Node.js applications.
// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Email service provider (e.g., Gmail, Outlook)
  auth: {
    user: "your_email@gmail.com", // Your email
    pass: "your_email_password", // Your email password or app password
  },
});

// Route: Send an email
app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  // Send an email
  transporter.sendMail(
    {
      from: "your_email@gmail.com",
      to,
      subject,
      text,
    },
    (error, info) => {
      if (error) {
        return res.status(500).send(`Error sending email: ${error.message}`);
      }
      res.status(200).send(`Email sent successfully: ${info.response}`);
    }
  );
});

// ============================= THEORY =================================
// Other Useful Node.js Dependencies:
// 1. **Axios**: A promise-based HTTP client for making API requests.
// Install: npm install axios
// Example: Fetching data from an API
// const axios = require('axios');
// axios.get('https://api.example.com/data').then(response => console.log(response.data));

// 2. **dotenv**: Loads environment variables from a `.env` file into `process.env`.
// Install: npm install dotenv
// Example: Configure environment variables
// require('dotenv').config();
// console.log(process.env.YOUR_ENV_VARIABLE);

// 3. **jsonwebtoken (JWT)**: For securely handling user authentication via tokens.
// Install: npm install jsonwebtoken
// Example: Signing a token
// const jwt = require('jsonwebtoken');
// const token = jwt.sign({ userId: 123 }, 'secret_key', { expiresIn: '1h' });
// console.log(token);

// =========================== START SERVER =============================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
