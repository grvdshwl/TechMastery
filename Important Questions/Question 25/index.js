// 1. Overview: Encryption vs Hashing

// Encryption:
// - Process of converting data into a scrambled format (ciphertext) using an algorithm and a key.
// - The encrypted data can later be decrypted back to its original form using the appropriate decryption key.
// - Ensures data confidentiality: Only authorized users can read the data.
// - Example Algorithms: AES, RSA, 3DES.
// - Reversible with the correct decryption key.
// - Use Case: Securing communication, file encryption, or protecting passwords in transit.

// Hashing:
// - Process that takes an input (or "message") and returns a fixed-length string (hash value).
// - Hashing is one-way and irreversible, meaning you can't retrieve the original input from the hash.
// - Used to verify the integrity of data or to securely store passwords.
// - Example Algorithms: SHA-256, MD5, bcrypt.
// - Irreversible.
// - Use Case: Password storage, data integrity checks, file integrity verification.

// 2. Encryption in JavaScript (AES Example)

const CryptoJS = require("crypto-js");

// Encryption settings
const secretKey = "mySecretKey12345"; // The key used for encryption and decryption

// Encrypt the data
const encrypted = CryptoJS.AES.encrypt("Hello, World!", secretKey).toString();

// Decrypt the data
const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
const decrypted = bytes.toString(CryptoJS.enc.Utf8);

console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);

// 3. Hashing in JavaScript (bcrypt Example)

// Hashing with bcrypt example
const bcrypt = require("bcrypt");

// Hashing with bcrypt
const password = "supersecretpassword"; // User's password
const saltRounds = 10; // Number of rounds for salt generation

// Hash the password
bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
  // Compare the entered password with the hashed password (simulating login)
  bcrypt.compare(password, hashedPassword, function (err, isMatch) {
    // Expected: true if passwords match
  });
});

// 4. Comparison of Encryption vs Hashing

// Comparison between Encryption and Hashing:

// Feature: Purpose
// Encryption Purpose: Encrypt data for confidentiality and can be decrypted back.
// Hashing Purpose: Store data in a fixed-length irreversible form, e.g., passwords.

// Feature: Reversibility
// Encryption Reversibility: Reversible with the correct decryption key.
// Hashing Reversibility: Irreversible, cannot retrieve the original data.

// Feature: Use Case
// Encryption Use Case: Securing sensitive data (e.g., credit card numbers, messages).
// Hashing Use Case: Storing passwords securely, checking data integrity (e.g., checksum).

// Feature: Example Algorithms
// Encryption Algorithms: AES, RSA, 3DES.
// Hashing Algorithms: SHA-256, MD5, bcrypt.

// Feature: Output Size
// Encryption Output Size: Varies based on input and algorithm.
// Hashing Output Size: Fixed-size output (e.g., SHA-256 always produces a 256-bit hash).

// Feature: Speed
// Encryption Speed: Generally slower due to encryption/decryption steps.
// Hashing Speed: Faster as it is a one-way transformation.

// Feature: Use of Key
// Encryption Use of Key: Requires a key for both encryption and decryption.
// Hashing Use of Key: No key required (although salts may be used for added security in bcrypt).

// Feature: Security Goal
// Encryption Security Goal: Confidentiality (make data unreadable to unauthorized users).
// Hashing Security Goal: Integrity (ensure data is not altered).

// Feature: Data Integrity
// Encryption Data Integrity: Doesn’t ensure data integrity, only confidentiality.
// Hashing Data Integrity: Ensures data integrity, allows verification without exposing original data.

// Feature: Typical Application
// Encryption Typical Applications: SSL/TLS encryption, file encryption, secure communication.
// Hashing Typical Applications: Password hashing, file integrity checks, digital signatures.

// 5. Conclusion

// Summary of Differences:
// Encryption: Used to protect sensitive data and reversible with the correct key.
// Hashing: Used for verifying data integrity and storing data in irreversible format (e.g., password).
