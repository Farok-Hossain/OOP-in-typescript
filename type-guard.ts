// keyof guard

type AlphaNeumeric = string | number;
// keyof guard
function add(param1: AlphaNeumeric, param2: AlphaNeumeric): AlphaNeumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

const result = add("1", "3");
const result2 = add(1, 3);
const result3 = add("farok", 26);
// console.log(result);
// console.log(result2);
// console.log(result3);

// in guard
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am a normal user`;
  }
}

const normalUser1: NormalUserType = { name: "Mr. X" };
const adminUser1: AdminUserType = { name: "Mr. Y", role: "admin" };

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// instanceof guard ...ata class and object k guard kore

class Animal3 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal3 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am barking");
  }
}

class Cat extends Animal3 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am meawing");
  }
}

function getAnimal(animal: Animal3) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Shepard", "dog"); // instance -> Dog
const animal2 = new Cat("Pika", "cat"); // instance -> Cat

// console.log(animal1);
getAnimal(animal1);
getAnimal(animal2);
console.log(animal2.species, animal2.name);
