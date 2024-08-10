// Simple URL Shortener

class URLShortener {
  constructor() {
    this.urlMap = new Map(); // Map to store the shortened URL and original URL (shortCode -> originalURL)
    this.counter = 0; // Simple counter for generating unique IDs
    this.baseURL = "http://short.ly/"; // Base URL for shortened links
  }

  // Generate a short code for a given URL
  generateShortCode(originalURL) {
    // Increment the counter to get a unique ID
    const id = this.counter++;
    // Convert the ID to a Base62 string (letters + digits)
    const shortCode = this.encodeBase62(id);
    // Store the mapping from short code to original URL
    this.urlMap.set(shortCode, originalURL);
    // Return the full shortened URL
    return `${this.baseURL}${shortCode}`;
  }

  // Encode a number as a Base62 string
  encodeBase62(num) {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encoded = "";
    while (num > 0) {
      encoded = chars[num % 62] + encoded;
      num = Math.floor(num / 62);
    }
    return encoded || "0";
  }

  // Retrieve the original URL for a given short code
  getOriginalURL(shortCode) {
    if (!this.urlMap.has(shortCode)) {
      console.log(`Short code ${shortCode} not found`);
      return null;
    }
    const originalURL = this.urlMap.get(shortCode);
    console.log(`Original URL for ${shortCode}: ${originalURL}`);
    return originalURL;
  }
}

// Example usage:

const urlShortener = new URLShortener();

// Shorten a URL
const shortURL = urlShortener.generateShortCode(
  "https://www.example.com/very/long/url"
);
console.log(`Shortened URL: ${shortURL}`);

// Retrieve the original URL
const originalURL = urlShortener.getOriginalURL(shortURL.split("/").pop());
console.log(`Original URL: ${originalURL}`);
