// JavaScript Classes Example
// Classes are syntactic sugar over JavaScript's prototype-based inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
