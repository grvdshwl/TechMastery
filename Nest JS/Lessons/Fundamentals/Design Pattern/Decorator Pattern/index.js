class Car {
  drive() {
    console.log("Driving a car");
  }
}

class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    this.car.drive();
    console.log("With additional features");
  }
}

const basicCar = new Car();
const decoratedCar = new CarDecorator(basicCar);

basicCar.drive(); // Driving a car
decoratedCar.drive(); // Driving a car With additional features
