// In-memory user database (for demonstration purposes)
const usersDatabase = [];

// Utility function to create a simple hash (simulated by reversing the string)
// Note: This is just for demonstration and should not be used in production.
function simpleHash(password) {
  return password.split("").reverse().join(""); // Reverses the password string
}

// Authentication Service
class AuthenticationService {
  // User Registration
  static register(username, password) {
    // Check if user already exists
    const existingUser = usersDatabase.find(
      (user) => user.username === username
    );
    if (existingUser) {
      console.log("User already exists.");
      return false;
    }

    // Simulate password hashing
    const passwordHash = simpleHash(password);

    // Store the new user in the database
    const newUser = { username, passwordHash };
    usersDatabase.push(newUser);
    console.log("User registered successfully.");
    return true;
  }

  // User Login
  static login(username, password) {
    // Retrieve the user from the database
    const user = usersDatabase.find((user) => user.username === username);
    if (!user) {
      console.log("User not found.");
      return null;
    }

    // Verify the password by comparing the hash
    const isPasswordValid = simpleHash(password) === user.passwordHash;
    if (!isPasswordValid) {
      console.log("Invalid password.");
      return null;
    }

    // Generate a simple token (just an example, not secure)
    const token = `${username}:${Date.now()}`;
    console.log("Login successful. Token generated:", token);
    return token;
  }

  // Token Validation (very basic for demonstration)
  static validateToken(token) {
    try {
      const decoded = token.split(":");
      const username = decoded[0];
      const user = usersDatabase.find((user) => user.username === username);
      if (user) {
        console.log("Token is valid for user:", username);
        return { username };
      }
    } catch (err) {
      console.log("Invalid token.");
      return null;
    }
  }
}

// Access Control (Example of protected resource)
function accessProtectedResource(token) {
  const userData = AuthenticationService.validateToken(token);
  if (userData) {
    console.log("Access granted to protected resource.");
  } else {
    console.log("Access denied. Invalid token.");
  }
}

// Example usage:

// Register a new user
AuthenticationService.register("john_doe", "password123");

// Attempt to login with the correct credentials
const token = AuthenticationService.login("john_doe", "password123");

// Attempt to access a protected resource using the token
if (token) {
  accessProtectedResource(token);
}

// Attempt to access a protected resource with an invalid token
accessProtectedResource("invalid_token");
