// Simple In-Memory Leaderboard using a Sorted Set

class Leaderboard {
  constructor() {
    this.scores = new Map(); // User ID to Score mapping
  }

  // Add or update a user's score
  addScore(userId, score) {
    if (this.scores.has(userId)) {
      this.scores.set(userId, this.scores.get(userId) + score);
    } else {
      this.scores.set(userId, score);
    }
    console.log(`User ${userId} score updated to ${this.scores.get(userId)}`);
  }

  // Get the rank of a specific user
  getRank(userId) {
    if (!this.scores.has(userId)) {
      console.log(`User ${userId} not found`);
      return null;
    }
    // Sort the scores and find the rank of the user
    const sortedScores = [...this.scores.entries()].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < sortedScores.length; i++) {
      if (sortedScores[i][0] === userId) {
        console.log(`User ${userId} is ranked #${i + 1}`);
        return i + 1;
      }
    }
  }

  // Get the top N users
  getTopUsers(n) {
    const sortedScores = [...this.scores.entries()].sort((a, b) => b[1] - a[1]);
    console.log(`Top ${n} users:`, sortedScores.slice(0, n));
    return sortedScores.slice(0, n);
  }
}

// Example usage:

const leaderboard = new Leaderboard();

// Add/update user scores
leaderboard.addScore("user1", 150);
leaderboard.addScore("user2", 200);
leaderboard.addScore("user3", 100);

// Get rank of a specific user
leaderboard.getRank("user1");

// Get the top 2 users
leaderboard.getTopUsers(2);
