// Objects
// An object is an unordered collection of key-value pairs. Each key is a string (or Symbol) and is associated with a value, which can be any type of data (string, number, array, function, etc.).
// Declaration: You create objects using curly braces {}.
// Accessing values: You access values using either dot notation or bracket notation.
// Methods: Objects can also have methods (functions as properties).
// Example:
let person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};

// // Accessing properties
console.log(person.name);  // 'John'
console.log(person['age']);  // 30

// // Calling a method
person.greet();  // 'Hello!'

// Key Differences Between Arrays and Objects
// Arrays are best for ordered collections, where you access elements by index.
// Objects are better suited for unordered collections where you need to associate keys (properties) with values.
// When to Use Arrays vs. Objects
// Arrays: When you need to store a list of items and access them by index.
// Objects: When you need to store data in the form of key-value pairs.
// Creating Object Methods
// Object methods can be defined in several ways:
// 1. Traditional Method Syntax
// You can define a method inside an object using a function expression.

const person1 = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person1.greet();  // Output: Hello, John

// 2. Shorthand Method Syntax
// In modern JavaScript (ES6 and later), you can use shorthand syntax to define methods inside an object.
const person2 = {
  name: 'John',
  greet() {
    console.log('Hello, ' + this.name);
  }
};

person.greet();  // Output: Hello, John

// Common Object Methods
// JavaScript provides several built-in methods for working with objects:
// 1. Object.keys()
// Returns an array of a given object's own enumerable property names (keys).
const person3 = {
  name: 'John',
  age: 30
};

console.log(Object.keys(person3));  // ['name', 'age']

// 2. Object.values()
// Returns an array of a given object's own enumerable property values.
const person4 = {
  name: 'John',
  age: 30
};

console.log(Object.values(person4));  // ['John', 30]

// 3. Object.entries()
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const person5 = {
  name: 'John',
  age: 30
};

console.log(Object.entries(person5));  // [['name', 'John'], ['age', 30]]

// 4. Object.assign()
// Copies all enumerable properties from one or more source objects to a target object. It returns the target object.
const person6 = { name: 'John' };
const job = { position: 'Developer' };

const merged = Object.assign(person6, job);
console.log(merged);  // { name: 'John', position: 'Developer' }

// 5. Object.freeze()
// Freezes an object, preventing new properties from being added and existing properties from being modified or deleted.
const person7 = {
  name: 'John'
};

Object.freeze(person7);
person7.name = 'Doe';  // This will not work
console.log(person7.name);  // 'John'

// 6. Object.seal()
// Seals an object, preventing new properties from being added, but allows existing properties to be modified.
const person8 = {
  name: 'John'
};

Object.seal(person8);
person8.age = 30;  // This will not work, as you can't add new properties
person8.name = 'Doe';  // This works
console.log(person8);  // { name: 'Doe' }

// 7. hasOwnProperty()
// Checks if the object has a specific property as its own (not inherited).
const person9 = {
  name: 'John',
  age: 30
};

console.log(person9.hasOwnProperty('name'));  // true
console.log(person9.hasOwnProperty('gender'));  // false

// 8. this Keyword in Methods
// The this keyword inside an object method refers to the object itself. 
// This allows methods to access or manipulate the object’s properties.
const person10 = {
  name: 'John',
  age: 30,
  greet() {
    console.log('Hello, ' + this.name);
  }
};

person10.greet();  // Output: Hello, John

// Binding this in Object Methods
// In JavaScript, the value of this inside a method can sometimes be tricky, especially if the method is passed as a
// callback function or used in an asynchronous context.
// You can explicitly set the value of this using methods like .bind(), .call(), or .apply().
// Example: Using .bind()
const person11 = {
  name: 'John',
  greet() {
    console.log('Hello, ' + this.name);
  }
};

const greetFn = person11.greet;
greetFn();  // 'this' is undefined or refers to the global object

// // Correcting 'this' using bind()
const boundGreet = person.greet.bind(person);
boundGreet();  // Output: Hello, John

