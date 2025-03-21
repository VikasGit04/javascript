// Arrow Function
// An arrow function in JavaScript is a more concise syntax for writing functions. 
// It is introduced in ECMAScript 6 (ES6) and has the following key features:
// 1. Syntax:
// An arrow function is written as follows:

const functionName1 = (parameters) => {
  // function body
};

// For a function with a single parameter, parentheses can be omitted:

const functionName2 = param => {
  // function body
};

// For a function with no parameters, use empty parentheses:
const functionName3 = () => {
  // function body
};

// 2. No this binding:
// Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding 
// (enclosing) lexical context. This is useful in scenarios where you want to maintain the value of this in a callback function.
// Example:
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;  // 'this' refers to the enclosing Counter function
    console.log(this.count);
  }, 1000);
}

const counter = new Counter();
// Here, this.count++ refers to the count property of the Counter object because the arrow function inherits this 
// from the Counter function.

// 3. Implicit Return:
// If the body of the arrow function has a single expression, it implicitly returns the value of that expression 
// without needing a return statement.
// Example:

const add = (a, b) => a + b;  // Implicit return
console.log(add(2, 3));  // Output: 5

// 4. Cannot be used as a constructor:
// Arrow functions do not have a [[Construct]] method, meaning you cannot use them with new to create objects.
// Example:

const Person = (name) => {
  this.name = name;  // Arrow functions cannot be used as constructors
};
const p = new Person('John');  // TypeError: Person is not a constructor

// 5. No arguments object:
// Arrow functions do not have their own arguments object, which is typically available in regular functions. 
// You can still access arguments in regular functions but not in arrow functions.
// Example:

function regularFunction() {
  console.log(arguments);
}
regularFunction(1, 2, 3);  // [1, 2, 3]

const arrowFunction = () => {
  console.log(arguments);  // ReferenceError: arguments is not defined
};
arrowFunction(1, 2, 3);

// Summary of Key Differences from Regular Functions:
// Shorter syntax.
// No this binding (inherits from the enclosing scope).
// Implicit return for single-expression bodies.
// Cannot be used as a constructor or with the new keyword.
// Do not have their own arguments object.

