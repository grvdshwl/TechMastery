// Simple UPI Payment System

class UPIPaymentSystem {
  constructor() {
    this.users = new Map(); // Map to store user details (upiId -> { bankAccount, upiPin, balance })
    this.transactions = []; // Array to store transaction logs
  }

  // Register a new user
  registerUser(upiId, bankAccount, upiPin, initialBalance = 0) {
    if (this.users.has(upiId)) {
      console.log(`UPI ID ${upiId} already exists`);
      return null;
    }
    this.users.set(upiId, { bankAccount, upiPin, balance: initialBalance });
    console.log(`User registered with UPI ID ${upiId}`);
    return upiId;
  }

  // Initiate a payment
  initiatePayment(payerUpiId, recipientUpiId, amount, payerUpiPin) {
    if (!this.users.has(payerUpiId)) {
      console.log(`Payer UPI ID ${payerUpiId} not found`);
      return null;
    }
    if (!this.users.has(recipientUpiId)) {
      console.log(`Recipient UPI ID ${recipientUpiId} not found`);
      return null;
    }

    const payer = this.users.get(payerUpiId);
    const recipient = this.users.get(recipientUpiId);

    // Validate UPI PIN
    if (payer.upiPin !== payerUpiPin) {
      console.log(`Invalid UPI PIN for UPI ID ${payerUpiId}`);
      return null;
    }

    // Check if the payer has sufficient balance
    if (payer.balance < amount) {
      console.log(`Insufficient balance for UPI ID ${payerUpiId}`);
      return null;
    }

    // Process the payment
    payer.balance -= amount;
    recipient.balance += amount;

    // Log the transaction
    const transaction = {
      payerUpiId,
      recipientUpiId,
      amount,
      timestamp: Date.now(),
    };
    this.transactions.push(transaction);

    console.log(
      `Payment of ${amount} processed from ${payerUpiId} to ${recipientUpiId}`
    );
    return transaction;
  }

  // Check balance for a user
  checkBalance(upiId) {
    if (!this.users.has(upiId)) {
      console.log(`UPI ID ${upiId} not found`);
      return null;
    }
    const balance = this.users.get(upiId).balance;
    console.log(`Balance for UPI ID ${upiId}: ${balance}`);
    return balance;
  }

  // Get transaction history for a user
  getTransactionHistory(upiId) {
    const userTransactions = this.transactions.filter(
      (tx) => tx.payerUpiId === upiId || tx.recipientUpiId === upiId
    );
    console.log(`Transaction history for UPI ID ${upiId}:`, userTransactions);
    return userTransactions;
  }
}

// Example usage:

const upiSystem = new UPIPaymentSystem();

// Register users
upiSystem.registerUser("user1@bank", "Account1", "1234", 1000);
upiSystem.registerUser("user2@bank", "Account2", "5678", 500);

// Check balances
upiSystem.checkBalance("user1@bank");
upiSystem.checkBalance("user2@bank");

// Initiate a payment
upiSystem.initiatePayment("user1@bank", "user2@bank", 200, "1234");

// Check balances after payment
upiSystem.checkBalance("user1@bank");
upiSystem.checkBalance("user2@bank");

// Get transaction history
upiSystem.getTransactionHistory("user1@bank");
upiSystem.getTransactionHistory("user2@bank");
