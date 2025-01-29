// Call, Apply and Bind

// The call, apply, and bind methods in JavaScript let you control the value of this when calling a function. They are especially helpful for reusing methods from one object with another or when you need to explicitly define what this refers to inside a function.
// 1. call()
// The call() method invokes a function immediately with a specified this value and arguments passed one by one.
// Syntax
// javascript
// Copy code
// functionName.call(thisArg, arg1, arg2, ...);

// thisArg: The value of this inside the function.
// arg1, arg2, ...: Arguments passed to the function.
// Example
// javascript
// Copy code
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };

// const anotherPerson = { firstName: 'Jane', lastName: 'Smith' };

// // Borrowing fullName method using call
// console.log(person.fullName.call(anotherPerson)); // Jane Smith


// 2. apply()
// The apply() method is similar to call(), but it takes arguments as an array or array-like object.
// Syntax
// javascript
// Copy code
// functionName.apply(thisArg, [arg1, arg2, ...]);

// thisArg: The value of this inside the function.
// [arg1, arg2, ...]: An array of arguments passed to the function.
// Example
// javascript
// Copy code
// const numbers = [5, 10, 15, 20];

// function getMax() {
//   return Math.max.apply(null, numbers);
// }

// console.log(getMax()); // 20


// 3. bind()
// The bind() method creates a new function with a specific this value and optional initial arguments. Unlike call and apply, it doesn’t invoke the function immediately; instead, it returns a new function.
// Syntax
// javascript
// Copy code
// const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);

// thisArg: The value of this inside the new function.
// arg1, arg2, ...: Optional arguments partially applied to the function.
// Example
// javascript
// Copy code
// const person = {
//   firstName: 'Alice',
//   lastName: 'Brown'
// };

// function greet(greeting, punctuation) {
//   return `${greeting}, ${this.firstName} ${this.lastName}${punctuation}`;
// }

// const boundGreet = greet.bind(person, 'Hello');
// console.log(boundGreet('!')); // Hello, Alice Brown!


// Key Differences
// Method
// Invocation Timing
// Arguments Format
// Returns
// call
// Immediately invoked
// Passed individually
// Result of the function
// apply
// Immediately invoked
// Passed as an array
// Result of the function
// bind
// Not immediately invoked
// Passed individually (optional)
// New function


// Why Are These Methods Useful?
// Controlling this:
// In JavaScript, the value of this depends on how a function is invoked. For example:
// When called as a method, this refers to the object the method is called on.
// In a regular function call, this is undefined in strict mode or the global object in non-strict mode.
// In arrow functions, this is lexically inherited from the surrounding scope.
// These methods allow you to override this default behavior and explicitly set this to a specific value.
// Method Borrowing:
// Objects may have similar data or functionality, and you might want to reuse a method from one object for another object. Instead of duplicating code, you can "borrow" the method using call, apply, or bind.
// Customizing Function Behavior:
// These methods allow passing custom arguments or creating pre-configured functions tailored to specific use cases.

// Detailed Scenarios
// Borrowing Methods from Other Objects
// Consider two objects that have similar properties but different methods. Instead of writing redundant methods, you can reuse one object's method for another.
// javascript
// Copy code
// const person1 = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// const person2 = { name: 'Bob' };

// // Borrowing the greet method from person1
// person1.greet.call(person2); // Hello, my name is Bob
// Here, call sets the value of this in greet to person2.
// Using Functions with Different Contexts
// Functions like Math.max or Math.min are not methods of arrays, but they can work with arrays when you set this to null and use apply.
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];

// // Using apply to find the maximum value in the array
// const max = Math.max.apply(null, numbers); // 5
// console.log(max);
// Partial Application and Function Binding
// With bind, you can create a new function with a fixed this value and optional pre-applied arguments, which is useful for event handlers or callbacks.
// javascript
// Copy code
// const user = { name: 'Charlie' };

// function showDetails(greeting) {
//   console.log(`${greeting}, ${this.name}`);
// }

// const boundShowDetails = showDetails.bind(user, 'Hi');
// boundShowDetails(); // Hi, Charlie

