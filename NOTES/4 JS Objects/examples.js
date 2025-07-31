// JavaScript Objects, Methods, and Prototypes Examples

// 1. JavaScript Object
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
person.greet(); // Output: Hello, my name is Alice

// 2. JavaScript Methods and this Keyword
const car = {
  brand: "Toyota",
  start: function () {
    console.log(this.brand + " car started.");
  },
};
car.start(); // Output: Toyota car started.

// 3. JavaScript Constructor Function
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
  this.speak = function () {
    console.log(this.type + " says " + this.sound);
  };
}
const dog = new Animal("Dog", "Woof");
dog.speak(); // Output: Dog says Woof

// 4. JavaScript Getter and Setter
const user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};
console.log(user.fullName); // Output: John Doe
user.fullName = "Jane Smith";
console.log(user.firstName); // Output: Jane

// 5. JavaScript Prototype
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.name);
};
const p1 = new Person("Sam");
p1.sayHello(); // Output: Hello, I'm Sam
