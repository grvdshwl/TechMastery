const crypto = require("crypto");

class URLShortener {
  constructor(baseURL = "http://short.ly/") {
    this.urlMap = new Map(); // Stores the mapping between shortCode and originalURL
    this.baseURL = baseURL; // Base URL for shortened links
  }

  // Shorten a given URL
  shortenURL(originalURL) {
    const shortCode = this.createShortCode(originalURL);

    // Store the mapping if it doesn't exist
    if (!this.urlMap.has(shortCode)) {
      this.urlMap.set(shortCode, originalURL);
    }

    return this.formatShortURL(shortCode);
  }

  // Generate a short code for a given URL
  createShortCode(url) {
    const hash = this.hashURL(url);
    return hash.slice(0, 8); // Use the first 8 characters of the hash as the short code
  }

  // Create a hash for the URL using SHA-256
  hashURL(url) {
    return crypto.createHash("sha256").update(url).digest("hex");
  }

  // Format the short URL with the base URL
  formatShortURL(shortCode) {
    return `${this.baseURL}${shortCode}`;
  }

  // Retrieve the original URL for a given short code
  getOriginalURL(shortURL) {
    const shortCode = this.extractShortCode(shortURL);

    if (!this.urlMap.has(shortCode)) {
      console.log(`Short code ${shortCode} not found`);
      return null;
    }

    return this.urlMap.get(shortCode);
  }

  // Extract the short code from the short URL
  extractShortCode(shortURL) {
    return shortURL.replace(this.baseURL, "");
  }
}

// Example usage:

const urlShortener = new URLShortener();

// Shorten a URL
const shortURL = urlShortener.shortenURL(
  "https://www.example.com/very/long/url"
);
console.log(`Shortened URL: ${shortURL}`);

// Retrieve the original URL
const originalURL = urlShortener.getOriginalURL(shortURL);
console.log(`Original URL: ${originalURL}`);
