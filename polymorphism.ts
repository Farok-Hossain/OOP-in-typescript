class Person4 {
  takeNap(): void {
    console.log(`I am sleeping 8 hours per day`);
  }
}

class Student2 extends Person4 {
  takeNap(): void {
    console.log(`I am sleeping 10 hours per day`);
  }
}

class Developer extends Person4 {
  takeNap(): void {
    console.log(`I am sleeping 6 hours per day`);
  }
}

function getNap(param: Person4) {
  param.takeNap();
}

const person1 = new Person4();
const person2 = new Student2();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

//ex--2
class Shape {
  getArea(): number {
    return 0;
  }
}

// area -> pi * r*r
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 15));
