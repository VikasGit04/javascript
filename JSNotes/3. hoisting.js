// Hoisting
// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their 
// containing scope during the compilation phase, even before the code is executed. 
// However, only the declarations are hoisted, not the initializations or assignments.
// Key Points:
// Function Declarations: Entire function declarations (not just the name) are hoisted. This allows you to call a function before it is defined in the code.

greet(); // Output: Hello!
function greet() {
    console.log("Hello!");
}
// Variables with var: Variable declarations using var are hoisted to the top of their scope but are initialized to undefined until the code is executed. This can cause unexpected behavior.

console.log(a); // Output: undefined
var a = 10; // Declaration is hoisted, but assignment happens here.
console.log(a); // Output: 10

// Variables with let and const: Variables declared using let and const are also hoisted, but they remain in the Temporal Dead Zone (TDZ) from the start of their scope until their declaration is encountered. Accessing them before declaration results in a ReferenceError.

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
const c = 30;
console.log(c); // Works fine: Output: 30
// Function Expressions: Functions assigned to variables (function expressions) are treated like variable declarations. Only the variable is hoisted, not the function definition.

console.log(add); // Output: undefined
var add = function (x, y) {
    return x + y;
};
console.log(add(2, 3)); // Output: 5

// Simplified Explanation:
// Declarations are moved to the top of the scope.
// For var, the value is undefined until assigned.
// For let and const, accessing before declaration throws a ReferenceError due to the TDZ.
// Functions can be called before their declaration because their whole definition is hoisted.


