class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Bike {
  drive() {
    console.log("Riding a bike");
  }
}

class VehicleFactory {
  static createVehicle(type) {
    if (type === "car") {
      return new Car();
    } else if (type === "bike") {
      return new Bike();
    }
    throw new Error("Vehicle type not recognized");
  }
}

const car = VehicleFactory.createVehicle("car");
car.drive(); // Driving a car

const bike = VehicleFactory.createVehicle("bike");
bike.drive(); // Riding a bike
