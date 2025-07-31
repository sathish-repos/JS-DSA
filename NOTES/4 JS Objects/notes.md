# JavaScript Objects, Methods, and Prototypes

## JavaScript Objects

Objects are collections of key-value pairs. Keys are strings (or Symbols), and values can be any type. Objects are used to represent real-world entities.

**Example:**

```js
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
person.greet(); // Output: Hello, my name is Alice
```

---

## JavaScript Methods and this Keyword

A method is a function property of an object. The `this` keyword refers to the object the method is called on.

**Example:**

```js
const car = {
  brand: "Toyota",
  start: function () {
    console.log(this.brand + " car started.");
  },
};
car.start(); // Output: Toyota car started.
```

---

## JavaScript Constructor Function

Constructor functions are used to create multiple similar objects. Use the `function` keyword and capitalize the name. Use the `new` keyword to create instances.

**Example:**

```js
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
  this.speak = function () {
    console.log(this.type + " says " + this.sound);
  };
}
const dog = new Animal("Dog", "Woof");
dog.speak(); // Output: Dog says Woof
```

---

## JavaScript Getter and Setter

Getters and setters allow controlled access to object properties. Use `get` and `set` keywords inside object literals or classes.

**Example:**

```js
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
```

---

## JavaScript Prototype

Every function has a `prototype` property. Objects created from constructors inherit from the constructor's prototype.

**Example:**

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.name);
};
const p1 = new Person("Sam");
p1.sayHello(); // Output: Hello, I'm Sam
```
