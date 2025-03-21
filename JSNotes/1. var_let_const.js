// Var Let and Const

// 1. var
// Scope: Function-scoped. A variable declared with var is accessible within the function it is declared, 
// or globally if declared outside any function.
// Hoisting: Variables declared with var are hoisted to the top of their scope and initialized as undefined.
// Re-declaration: Can be re-declared in the same scope without an error.
// Example:

function exampleVar() {
    console.log(a); // Output: undefined (hoisted but not initialized)
    var a = 10;
    console.log(a); // Output: 10
}
exampleVar();

// Global scope
var b = 5;
var b = 10; // Re-declaration allowed
console.log(b); // Output: 10


// 2. let
// Scope: Block-scoped. A variable declared with let is accessible only within the block {} where it is defined.
// Hoisting: Variables declared with let are hoisted but not initialized, so accessing them before declaration 
// results in a ReferenceError (this period is called the Temporal Dead Zone (TDZ)).
// Re-declaration: Cannot be re-declared in the same scope.
// Example:

function exampleLet() {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 20;
    console.log(x); // Output: 20

    if (true) {
        let y = 30;
        console.log(y); // Output: 30 (block-scoped)
    }
    // console.log(y); // ReferenceError: y is not defined
}
exampleLet();

// Re-declaration
let z = 15;
// let z = 25; // SyntaxError: Identifier 'z' has already been declared


// 3. const
// Scope: Block-scoped, like let.
// Hoisting: Similar to let, variables declared with const are hoisted but not initialized (also affected by the TDZ).
// Re-declaration: Cannot be re-declared in the same scope.
// Immutability: A const variable must be initialized at the time of declaration, and its reference cannot be changed. However, objects or arrays declared with const can have their properties or elements modified.
// Example:

function exampleConst() {
    const pi = 3.14;
    console.log(pi); // Output: 3.14
    // pi = 3.14159; // TypeError: Assignment to constant variable

    if (true) {
        const greeting = "Hello";
        console.log(greeting); // Output: Hello
    }
    // console.log(greeting); // ReferenceError: greeting is not defined
}

// Object or array with const
const person = { name: "John", age: 30 };
person.age = 31; // Allowed: Modifying properties of the object
console.log(person); // Output: { name: "John", age: 31 }
// person = { name: "Jane" }; // TypeError: Assignment to constant variable


// Key Differences:
// Feature         |   var                     |   let                     |   const       
// Scope           |   Function-scoped         |   Block-scoped            |   Block-scoped
// Re-declaration  |   Allowed                 |   Not allowed             |   Not allowed
// Hoisting        |   Hoisted with undefined  | Hoisted but uninitialized |   Hoisted but uninitialized (TDZ)
// Initialization  |   Optional                |   Optional                |   Mandatory at declaration
// Immutability    |   No                      |   No                      |   Yes (for primitive values)


