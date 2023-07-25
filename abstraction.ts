// interface
// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "Car",
//   model: "1500",
// };

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(public name: string, public band: string, public model: number) {}
  startEngine(): void {
    console.log("I am starting engine");
  }
  stopEngine(): void {
    console.log("i am stopping engine");
  }
  move(): void {
    console.log("i am moving engine");
  }
  test() {
    console.log("I am for testing purpose");
  }
}

const vehicle1 = new Vehicle("Car", "Audi", 2022);

// abstract class
abstract class Vehicle2 {
  constructor(public name: string, public band: string, public model: number) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("i am moving engine");
  }
  test() {
    console.log("I am for testing purpose");
  }
}

class Car extends Vehicle2 {
  startEngine(): void {
    console.log("I am starting engine");
  }
  stopEngine(): void {
    console.log("I am stopping engine");
  }
}
