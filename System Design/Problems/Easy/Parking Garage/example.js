// Simple Parking Garage System

class ParkingGarage {
  constructor(totalSpots) {
    this.totalSpots = totalSpots;
    this.availableSpots = totalSpots;
    this.occupiedSpots = new Map(); // Map to store vehicle details (vehicleId -> spotNumber)
  }

  // Enter the garage and allocate a spot
  enterGarage(vehicleId) {
    if (this.availableSpots > 0) {
      const spotNumber = this.totalSpots - this.availableSpots + 1;
      this.occupiedSpots.set(vehicleId, spotNumber);
      this.availableSpots--;
      console.log(`Vehicle ${vehicleId} parked at spot ${spotNumber}`);
      return spotNumber;
    } else {
      console.log("Garage is full");
      return null;
    }
  }

  // Exit the garage and release the spot
  exitGarage(vehicleId) {
    if (this.occupiedSpots.has(vehicleId)) {
      const spotNumber = this.occupiedSpots.get(vehicleId);
      this.occupiedSpots.delete(vehicleId);
      this.availableSpots++;
      console.log(`Vehicle ${vehicleId} left spot ${spotNumber}`);
      return spotNumber;
    } else {
      console.log(`Vehicle ${vehicleId} not found`);
      return null;
    }
  }

  // Check availability of spots
  checkAvailability() {
    console.log(`Available spots: ${this.availableSpots}`);
    return this.availableSpots;
  }

  // Get the spot number for a parked vehicle
  getVehicleSpot(vehicleId) {
    if (this.occupiedSpots.has(vehicleId)) {
      console.log(
        `Vehicle ${vehicleId} is parked at spot ${this.occupiedSpots.get(
          vehicleId
        )}`
      );
      return this.occupiedSpots.get(vehicleId);
    } else {
      console.log(`Vehicle ${vehicleId} not found`);
      return null;
    }
  }
}

// Example usage:

const garage = new ParkingGarage(5);

// Vehicles entering the garage
garage.enterGarage("vehicle1");
garage.enterGarage("vehicle2");

// Check available spots
garage.checkAvailability();

// Get the spot number for a specific vehicle
garage.getVehicleSpot("vehicle1");

// Vehicles exiting the garage
garage.exitGarage("vehicle1");

// Check available spots after exit
garage.checkAvailability();
