// What is a Closure in JavaScript?
// A closure is a feature in JavaScript where a function retains access to its outer (enclosing) function's scope, 
// even after the outer function has executed.
// In simpler terms:
// A closure allows a function to "remember" the variables from its surrounding scope, even when the function is executed
// outside that scope.

// Key Concepts of Closures
// Nested Function: Closures are created when a function is defined inside another function.
// Scope Retention: The inner function retains access to the variables declared in the outer function, even after the 
// outer function has finished executing.
// Private Data: Closures are often used to create private variables that can't be directly accessed from outside.

// Example 1: Basic Closure

function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable); // Inner function can access outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction executes
myClosure(); // Logs: "I am from outer function"

// Explanation:
// innerFunction is returned from outerFunction.
// Even though outerFunction has finished executing, innerFunction retains access to outerVariable.

// Example 2: Closure with State

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter(); // Closure is created
increment(); // Logs: 1
increment(); // Logs: 2
increment(); // Logs: 3

// Explanation:
// counter returns an inner function that increments and logs count.
// The count variable is private to the returned function due to closure.

// Practical Uses of Closures
// Data Privacy: Protect variables from being accessed or modified directly.

function secureBankAccount() {
    let balance = 1000; // Private variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log(`Withdrew: ${amount}, Remaining Balance: ${balance}`);
            }
        }
    };
}

const account = secureBankAccount();
account.deposit(500); // Deposited: 500, New Balance: 1500
account.withdraw(300); // Withdrew: 300, Remaining Balance: 1200
console.log(account.balance); // Undefined (balance is private)

// Data Privacy: Protect variables from being accessed or modified directly.
// Event Handlers: Closures allow preserving variables in event callbacks.
// Partial Application or Currying: Pre-setting arguments in functions.

