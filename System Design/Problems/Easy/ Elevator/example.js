class Elevator {
  constructor(bottomFloor, topFloor) {
    this.currentFloor = 1;
    this.direction = "up"; // Can be 'up' or 'down'
    this.stopRequests = new Set();
    this.topFloor = topFloor;
    this.bottomFloor = bottomFloor;
  }

  addStopRequests(floorRequests) {
    floorRequests.forEach((floor) => this.stopRequests.add(floor));
  }

  run() {
    while (this.stopRequests.size > 0) {
      if (this.direction === "up") {
        this.moveUp();
        if (this.stopRequests.has(this.currentFloor)) {
          this.stopRequests.delete(this.currentFloor);
          this.openDoors();
          this.closeDoors();
        }
        if (this.currentFloor === this.topFloor) {
          this.direction = "down";
        }
      } else {
        this.moveDown();
        if (this.stopRequests.has(this.currentFloor)) {
          this.stopRequests.delete(this.currentFloor);
          this.openDoors();
          this.closeDoors();
        }
        if (this.currentFloor === this.bottomFloor) {
          this.direction = "up";
        }
      }
    }
  }

  moveUp() {
    this.currentFloor += 1;
  }

  moveDown() {
    this.currentFloor -= 1;
  }

  openDoors() {
    console.log("Doors opening at floor", this.currentFloor);
  }

  closeDoors() {
    console.log("Doors closing at floor", this.currentFloor);
  }
}

// Usage Example
const elevator = new Elevator(1, 10); // Assume a building with floors 1 through 10
elevator.addStopRequests([3, 5, 7, 2]); // Add stop requests
elevator.run(); // Start the elevator operation
elevator.addStopRequests([4, 8, 9]);
elevator.run(); // Start the elevator operation
