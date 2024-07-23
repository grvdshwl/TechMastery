//* Implement browser history (Medium).
// History class to manage browser history
class BrowserHistory {
  constructor() {
    this.historyStack = []; // Stack to store history states
    this.currentIndex = -1; // Index of the current state in the history stack
  }

  // Method to navigate to a new URL
  navigate(url) {
    // Add the new state to the history stack
    this.historyStack.push(url);
    this.currentIndex = this.historyStack.length - 1;

    // Log the current URL
    console.log("Current URL:", this.getCurrentUrl());
  }

  // Method to get the current URL
  getCurrentUrl() {
    if (
      this.currentIndex >= 0 &&
      this.currentIndex < this.historyStack.length
    ) {
      return this.historyStack[this.currentIndex];
    }
    return null;
  }

  // Method to navigate back to the previous state
  goBack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log("Navigating back to:", this.getCurrentUrl());
    }
  }

  // Method to navigate forward to the next state
  goForward() {
    if (this.currentIndex < this.historyStack.length - 1) {
      this.currentIndex++;
      console.log("Navigating forward to:", this.getCurrentUrl());
    }
  }
}

// Create an instance of BrowserHistory
const browserHistory = new BrowserHistory();

// Example usage:
browserHistory.navigate("/page1"); // Navigate to /page1
browserHistory.navigate("/page2"); // Navigate to /page2
browserHistory.goBack(); // Go back to /page1
browserHistory.goForward(); // Go forward to /page2
