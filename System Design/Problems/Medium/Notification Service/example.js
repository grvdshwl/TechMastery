class NotificationService {
  constructor() {
    this.channels = {};
    this.rateLimits = {
      promotional: 100, // Example limit: 100 messages per hour
      transactional: Infinity, // No limit
    };
    this.messageCounts = {
      promotional: 0,
      transactional: 0,
    };
    this.resetRateLimits();
  }

  // Register a new notification channel
  registerChannel(type, channel) {
    if (!this.channels[type]) {
      this.channels[type] = [];
    }
    this.channels[type].push(channel);
  }

  // Reset rate limits periodically (e.g., every hour)
  resetRateLimits() {
    setInterval(() => {
      this.messageCounts.promotional = 0;
      this.messageCounts.transactional = 0;
    }, 3600000); // 1 hour
  }

  // Send notification
  sendNotification(type, message) {
    if (this.canSendNotification(type)) {
      if (this.channels[type]) {
        this.channels[type].forEach((channel) => channel.send(message));
        this.messageCounts[type]++;
      } else {
        console.error(`No registered channels for type: ${type}`);
      }
    } else {
      console.warn(`Rate limit exceeded for ${type} notifications.`);
    }
  }

  // Check if a notification can be sent based on rate limits
  canSendNotification(type) {
    return this.messageCounts[type] < this.rateLimits[type];
  }
}

// Example channel classes
class EmailChannel {
  send(message) {
    console.log(`Sending email: ${message}`);
    // Implementation to send email
  }
}

class MobileChannel {
  send(message) {
    console.log(`Sending mobile notification: ${message}`);
    // Implementation to send mobile notification
  }
}

class PushChannel {
  send(message) {
    console.log(`Sending push notification: ${message}`);
    // Implementation to send push notification
  }
}

// Usage example
const notificationService = new NotificationService();

// Register channels
notificationService.registerChannel("transactional", new EmailChannel());
notificationService.registerChannel("transactional", new MobileChannel());
notificationService.registerChannel("promotional", new PushChannel());

// Send notifications
notificationService.sendNotification("transactional", "Your OTP is 123456");
notificationService.sendNotification(
  "promotional",
  "Check out our new products!"
);
