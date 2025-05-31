// Animal class
class Animal {
  constructor(species) {
    this._species = species; // Store species in a private variable
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log a sound message
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Dog class extends Animal
class Dog extends Animal {
  // Method specific to dogs
  bark() {
    console.log("woof");
  }
}

// Cat class extends Animal
class Cat extends Animal {
  // Method specific to cats
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
