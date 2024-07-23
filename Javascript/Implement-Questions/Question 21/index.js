// Create a custome cookie

class CookieStorage {
  constructor() {
    this.cookies = {};
  }

  setCookie(name, value, daysToExpire) {
    this.cookies[name] = { value, daysToExpire };
  }

  getCookie(name) {
    const cookie = this.cookies[name];
    return cookie ? cookie.value : null;
  }

  isCookieExpired(name) {
    const cookie = this.cookies[name];
    if (cookie && cookie.daysToExpire) {
      const expirationDate = new Date(cookie.daysToExpire);
      const currentDate = new Date();
      return currentDate.getTime() > expirationDate.getTime();
    }
    return false;
  }
}

// Define the CookieManager class which utilizes the CookieStorage
class CookieManager {
  constructor() {
    this.cookieStorage = new CookieStorage();
  }

  setCookie(name, value, daysToExpire) {
    this.cookieStorage.setCookie(name, value, daysToExpire);
  }

  getCookie(name) {
    return this.cookieStorage.getCookie(name);
  }

  isCookieExpired(name) {
    return this.cookieStorage.isCookieExpired(name);
  }
}

// Example usage:
const cookieManager = new CookieManager();
cookieManager.setCookie("username", "john_doe", 30);
const username = cookieManager.getCookie("username");
console.log(username); // Outputs: "john_doe"
const isExpired = cookieManager.isCookieExpired("username");
console.log("Is 'username' cookie expired?", isExpired); // Outputs: false
