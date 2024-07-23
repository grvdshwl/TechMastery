//* Implement a class that can subscribe to and emit events that
//*  trigger attached callback functions.
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    const onceWrapper = (...args) => {
      fn(...args);
      this.off(eventName, onceWrapper);
    };
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    const listeners = this.listeners[eventName];
    if (!listeners) return this;
    const index = listeners.indexOf(fn);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    return this;
  }

  emit(eventName, ...args) {
    const listeners = this.listeners[eventName];
    if (!listeners) return false;
    listeners.forEach((fn) => {
      fn(...args);
    });
    return true;
  }

  listenerCount(eventName) {
    const listeners = this.listeners[eventName] || [];
    return listeners.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

// Example of usage
const emitter = new EventEmitter();

// Registering a listener
emitter.on("event", (arg1, arg2) => {
  console.log("Listener 1:", arg1, arg2);
});

// Registering another listener
const listener2 = (arg1, arg2) => {
  console.log("Listener 2:", arg1, arg2);
};
emitter.addListener("event", listener2);

// Emitting the event
emitter.emit("event", "Hello", "World");

// Test case for number of listeners
console.log('Number of listeners for "event":', emitter.listenerCount("event")); // Should print 2

// Removing a listener
emitter.off("event", listener2);

// Emitting the event again
emitter.emit("event", "Goodbye", "World");

// Test case for number of listeners after removing one
console.log(
  'Number of listeners for "event" after removing one:',
  emitter.listenerCount("event")
); // Should print 1
