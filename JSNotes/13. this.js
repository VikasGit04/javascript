// This Keyword

// The this keyword in JavaScript refers to the context in which a function is executed. Its value is determined by how the function is called, not where it is defined. It can behave differently depending on the following scenarios:

// 1. Global Context (Outside a Function)
// In the browser:
console.log(this); // Window object

// In strict mode ("use strict";):
"use strict";
console.log(this); // undefined


// 2. Inside a Regular Function
// The value of this depends on how the function is invoked:

function showThis() {
  console.log(this);
}
showThis(); // In non-strict mode: Window, In strict mode: undefined

// When a function is called as a method of an object:

const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // Alice (this refers to obj)


// 3. Arrow Functions
// Arrow functions do not have their own this. Instead, they inherit this from their surrounding lexical scope:

const obj1 = {
  name: "Bob",
  greet: () => {
    console.log(this.name);
  }
};
obj1.greet(); // undefined (this refers to the outer scope, typically global or undefined in strict mode)

// Arrow functions are ideal when you want to ensure this is inherited, such as in callbacks.

// 4. Constructor Functions
// When using new, this refers to the newly created object:

function Person(name) {
  this.name = name;
}
const person1 = new Person("Charlie");
console.log(person1.name); // Charlie


// 5. Classes
// In classes, this refers to the instance of the class:
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise


// 6. Explicit Binding
// The this keyword can be explicitly set using call, apply, or bind:
function showName() {
  console.log(this.name);
}
const user = { name: "Daisy" };

showName.call(user); // Daisy
showName.apply(user); // Daisy

const boundFunction = showName.bind(user);
boundFunction(); // Daisy


// Common Pitfalls
// Losing Context:
// Assigning a method to a variable loses the object context:
const obj2 = {
  name: "Eve",
  greet() {
    console.log(this.name);
  }
};
const greet = obj2.greet;
greet(); // undefined (in strict mode) or Window (non-strict mode)

// Using Arrow Functions as Methods:
// Avoid using arrow functions as methods when this is needed to refer to the object:
const obj3 = {
  name: "Fiona",
  greet: () => {
    console.log(this.name);
  }
};
obj3.greet(); // undefined

