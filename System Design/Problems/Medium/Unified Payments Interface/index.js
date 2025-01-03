// Unified Payment Interface (UPI) System Design

//* https://www.youtube.com/watch?v=QpLy0_c_RXk
// UPI Functional and Non-Functional Requirements

// Functional Requirements
// 1. Users should be able to link multiple bank accounts.
// 2. Users should be able to send and receive money instantly.
// 3. Users should be able to check account balances.
// 4. Users should be able to view transaction history.
// 5. Users should be able to set and use UPI PIN for transactions.
// 6. Users should be able to pay merchants using QR codes.

// Out of Scope
// 1. Detailed financial planning tools.
// 2. In-depth analytics on spending habits.

// Non-Functional Requirements
// 1. Performance (fast transaction processing).
// 2. Scalability (handling millions of transactions simultaneously).
// 3. Security (two-factor authentication, encryption).
// 4. High Availability (99.99% uptime).
// 5. Low Latency (transactions should be completed in a few seconds).

// Core Entities
// 1. User
// 2. Bank Account
// 3. Transaction
// 4. Merchant

// Example API Endpoint: Send Money
// POST /api/v1/transactions/send
let sendMoneyData = {
  userId: "123456789",
  receiverId: "987654321",
  amount: 500, // in INR
  upiPin: "1234",
  timestamp: "2024-08-31T12:34:56Z",
};

// User Data Schema
let userData = {
  userId: "string",
  username: "string",
  email: "string",
  phoneNumber: "string",
  bankAccounts: ["array of bankAccountIds"],
  createdAt: "date string",
  updatedAt: "date string",
};

// Bank Account Data Schema
let bankAccountData = {
  bankAccountId: "string",
  userId: "string",
  bankName: "string",
  accountNumber: "string",
  ifscCode: "string",
  balance: "number",
  createdAt: "date string",
  updatedAt: "date string",
};

// Transaction Data Schema
let transactionData = {
  transactionId: "string",
  senderId: "string",
  receiverId: "string",
  amount: "number",
  timestamp: "date string",
  status: "string", // e.g., pending, completed, failed
  createdAt: "date string",
  updatedAt: "date string",
};

// Capacity Estimation for 1 Million Active Users

// 1. Number of Users Performing Transactions
// Total active users per day: 1,000,000
// Percentage of users performing transactions: 60%
// Users performing transactions: 1,000,000 * 0.60 = 600,000 users

// 2. Total Transactions per Day
// Average number of transactions per user per day: 5 transactions
// Total number of transactions per day: 600,000 users * 5 transactions = 3,000,000 transactions

// 3. Data Generated per Transaction
// Data per transaction: 1 KB (assuming transaction details)

// 4. Total Data Generated per Day
// Total data per day: 3,000,000 transactions * 1 KB = 3,000,000 KB
// Convert to GB: 3,000,000 KB / 1,024 / 1,024 ≈ 2.86 GB

// 5. Monthly Data Usage
// Total data generated per month: 2.86 GB/day * 30 days ≈ 85.8 GB

// 6. Storage Considerations
// Raw storage requirement per month: 85.8 GB
// Redundancy (e.g., RAID, backups): Double the storage for redundancy and backups
// Total storage required per month: 85.8 GB * 2 ≈ 171.6 GB
