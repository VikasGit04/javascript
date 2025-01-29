// Lexical Scope 
// Definition: Lexical scope means that the scope of a variable is determined by where it is declared in the code (its position in the source code), not where it is used.
// A function can access variables from its own scope and from outer (parent) scopes, but not from inner (child) scopes.
// Key Points:
// Inner functions can access variables from outer functions.
// Outer functions cannot access variables from inner functions.
// Lexical scoping is based on where the function is declared in the code.
// Example 1: Basic Example

function outer() {
  const outerVar = 'I am outer';
  
  function inner() {
    console.log(outerVar); // Can access outerVar
  }
  
  inner();
}

outer(); // Output: I am outer

// inner() can access outerVar because outerVar is in the outer scope.
// Example 2: Nested Functions

function outer() {
  const a = 'Outer';
  
  function middle() {
    const b = 'Middle';
    
    function inner() {
      const c = 'Inner';
      console.log(a); // Outer
      console.log(b); // Middle
      console.log(c); // Inner
    }
    
    inner();
  }
  
  middle();
}

outer();

// inner() can access a, b, and c because of the lexical scope (the structure of the code).
// Example 3: Closures and Lexical Scope

function outer() {
  const outerVar = 'I am outer';
  
  return function inner() {
    console.log(outerVar); // Can still access outerVar even after outer() finishes
  };
}

const closure = outer();
closure(); // Output: I am outer

// inner() retains access to outerVar even after outer() finishes execution. This is called a closure.
// Summary:
// Lexical scope is based on the physical structure of the code (where the function is written).
// Inner functions can access outer variables, but outer functions cannot access inner variables.
// Closures allow inner functions to retain access to outer scope variables.

