class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // Subscribe to an event
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  // Unsubscribe from an event
  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return;

    this.subscribers[event] = this.subscribers[event].filter(
      (cb) => cb !== callback
    );
  }

  // Publish an event
  publish(event, data) {
    if (!this.subscribers[event]) return;

    this.subscribers[event].forEach((callback) => callback(data));
  }
}

// Usage example:

// Create a PubSub instance
const pubSub = new PubSub();

// Subscriber 1
function subscriber1(data) {
  console.log("Subscriber 1 received:", data);
}

// Subscriber 2
function subscriber2(data) {
  console.log("Subscriber 2 received:", data);
}

// Subscribe to the 'message' event
pubSub.subscribe("message", subscriber1);
pubSub.subscribe("message", subscriber2);

// Publish an event
pubSub.publish("message", { text: "Hello, subscribers!" });

// Unsubscribe subscriber1 and publish again
pubSub.unsubscribe("message", subscriber1);
pubSub.publish("message", { text: "Hello, remaining subscribers!" });
