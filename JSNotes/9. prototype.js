
// ProtoType

// A prototype is an object from which other objects inherit properties and methods. 
// It allows objects to share methods and properties, reducing memory usage by avoiding the duplication of the 
// same data.

// Here’s how prototypes work in JavaScript:
// 1.Prototype Chain: Every JavaScript object has a hidden internal property called [[Prototype]] 
// (commonly accessed using __proto__), which points to the prototype of the object. 
// When you try to access a property or method of an object, JavaScript first looks at the object itself. 
// If the property isn’t found, JavaScript looks at the object's prototype, and so on, following the prototype chain 
// until it reaches null.

// 2.Constructor Functions: If you create an object using a constructor function, that object’s prototype will be 
// the prototype property of the constructor function. For example:

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log('Hello, ' + this.name);
};

const person1 = new Person('Alice');
person1.sayHello(); // Output: "Hello, Alice"'
// In this example, person1 inherits the sayHello method from the Person.prototype.

// 3. Accessing Prototypes: You can access the prototype of any object using Object.getPrototypeOf(obj):
const proto = Object.getPrototypeOf(person1);
console.log(proto); // Output: { sayHello: [Function] }

// 4.Prototype Inheritance: Prototypes are crucial for inheritance. When you create a new object, it can inherit methods and properties from the prototype of its constructor function, enabling shared behavior between instances.
// 5.Modifying the Prototype: You can dynamically add methods or properties to an object's prototype. This means that all objects created from that constructor will inherit the new methods or properties.
Person.prototype.sayGoodbye = function() {
  console.log('Goodbye, ' + this.name);
};

person1.sayGoodbye(); // Output: "Goodbye, Alice"

// 6.Prototype and Inheritance Example: Prototypes enable inheritance between objects. Here's how an object can inherit from another:
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound');
};

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal

Dog.prototype.bark = function() {
  console.log(this.name + ' barks');
};

const dog1 = new Dog('Rex');
dog1.speak(); // Output: "Rex makes a sound"
dog1.bark(); // Output: "Rex barks"

// Key Points:
// Every object in JavaScript has a prototype.
// Objects inherit properties and methods from their prototype.
// The prototype chain allows inheritance.
// You can modify the prototype to add shared behavior.

