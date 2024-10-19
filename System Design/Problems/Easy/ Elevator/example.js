const directions = {
  UP: "UP",
  DOWN: "DOWN",
};

class Elevator {
  constructor(bottomFloor = 0, topFloor = 10) {
    this.stopRequests = new Set(); // renamed for clarity
    this.bottomFloor = bottomFloor;
    this.topFloor = topFloor;
    this.direction = directions.UP;
    this.currentFloor = bottomFloor;
  }

  openDoor() {
    this.logAction("opened");
  }

  closeDoor() {
    this.logAction("closed");
  }

  logAction(action) {
    console.log(`---------------------`);
    console.log(`Door ${action} for floor ${this.currentFloor}.`);
    console.log(`---------------------`);
  }

  addStop(floor) {
    if (floor >= this.bottomFloor && floor <= this.topFloor) {
      this.stopRequests.add(floor);
    } else {
      console.warn(`Invalid stop: Floor ${floor} is out of range.`);
    }
  }

  move() {
    this.direction === directions.UP ? this.moveUp() : this.moveDown();
  }

  moveUp() {
    if (this.currentFloor < this.topFloor) {
      this.currentFloor++;
    }
  }

  moveDown() {
    if (this.currentFloor > this.bottomFloor) {
      this.currentFloor--;
    }
  }

  shouldChangeDirection() {
    if (this.currentFloor === this.topFloor) {
      this.direction = directions.DOWN;
    } else if (this.currentFloor === this.bottomFloor) {
      this.direction = directions.UP;
    }
  }

  processFloor() {
    if (this.stopRequests.has(this.currentFloor)) {
      this.openDoor();
      this.closeDoor();
      this.stopRequests.delete(this.currentFloor);
    }
  }

  runElevator() {
    while (this.stopRequests.size > 0) {
      this.move();
      this.processFloor();
      this.shouldChangeDirection();
    }
  }
}

// Example usage
const elevator = new Elevator(0, 10);

[
  elevator.addStop(4),
  elevator.addStop(8),
  elevator.addStop(2),
  elevator.addStop(10),
  elevator.addStop(3),
];

elevator.runElevator();
