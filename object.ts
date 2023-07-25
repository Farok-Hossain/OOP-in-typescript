class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`); // "German Shephard says Ghew Ghew"
  }
}

const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal(
  "Pika",
  "cat",
  "meaw meaw and told me, give me some foods"
);
dog.makeSound();
cat.makeSound();

// Another way
// class Animal {
//   public name: string;
//   public species: string;
//   public sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`The ${this.name} says ${this.sound}`); // "German Shephard says Ghew Ghew"
//   }
// }

// const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
// const cat = new Animal(
//   "Pika",
//   "cat",
//   "meaw meaw and told me, give me some foods"
// );
// dog.makeSound();
// cat.makeSound();

// ---------//
// Parameter properties...way
class Animal2 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  public makeSound2() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog2 = new Animal2("German Shepard", "dog", "Ghew Ghew");
const cat2 = new Animal2(
  "Pika",
  "cat",
  "meaw meaw and told me, give me some food"
);

dog2.makeSound2();
cat2.makeSound2();
