// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Dog class extends Animal
class Dog extends Animal {
  // Method for dog-specific behavior
  bark() {
    console.log("woof");
  }
}

// Cat class extends Animal
class Cat extends Animal {
  // Method for cat-specific behavior
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
