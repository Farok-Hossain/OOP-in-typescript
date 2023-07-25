class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours} hours`;
  }
}

// class Student {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours}`;
//   }
// }

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("Mr. X", 15, "California");
// student1.

// class Teacher {
//   name: string;
//   age: number;
//   address: string;
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.designation = designation;
//   }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours} hours`;
//   }
//   takeClass(numberOfClass: number): string {
//     return `This ${this.name} will take ${numberOfClass} class`;
//   }
// }

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numberOfClass: number): string {
    return `This ${this.name} will take ${numberOfClass} class`;
  }
}

const teacher1 = new Teacher("Mr. M", 30, "New York", "Professor");
//   teacher1.
console.log(teacher1.address, teacher1.age);
