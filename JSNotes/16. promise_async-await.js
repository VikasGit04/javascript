// Promises and Async Await

// Promises in JavaScript
// A Promise in JavaScript represents a value that may be available now, or in the future, or never. 
// It's essentially a placeholder for a value that will be resolved or rejected after an asynchronous operation 
// completes. The Promise object provides a way to handle asynchronous operations in a more manageable and 
// readable way compared to traditional callbacks.

// The Lifecycle of a Promise
// A promise has three states:
// Pending: The promise is in the process of being executed and hasn't been completed yet. 
// This is the default state when the promise is created.
// Resolved (Fulfilled): The promise has been successfully completed, and a result is available. 
// The operation succeeded.
// Rejected: The promise has failed, and an error or reason for failure is available.

// Syntax of a Promise
// A promise is created using the new Promise() constructor, which takes an executor function that receives
// two parameters: resolve and reject.
let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true;

  if (success) {
    resolve("Success!"); // The promise is resolved successfully
  } else {
    reject("Error!"); // The promise is rejected
  }
});

// Here, resolve is called when the asynchronous operation succeeds, and reject is called when the operation fails.
// Consuming Promises
// Promises provide methods to handle their outcomes:
// .then(): Executes when the promise is resolved (fulfilled).
// .catch(): Executes when the promise is rejected (error).
// .finally(): Executes when the promise is either resolved or rejected, regardless of the outcome.
// Example of Using .then() and .catch()
let myPromise2 = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise2
  .then((message) => {
    console.log(message); // Output: Operation was successful!
  })
  .catch((error) => {
    console.log(error); // If promise is rejected, this will be executed
  });

// Promise Variations and Patterns
// There are several ways to work with promises beyond basic usage. Here are the most commonly used variations:
// 1. Chaining Promises
// Promises are chainable. You can call .then() multiple times to handle a series of asynchronous tasks in sequence.
let myPromise3 = new Promise((resolve, reject) => {
  resolve("Step 1 completed");
});

myPromise3
  .then((message) => {
    console.log(message); // Step 1 completed
    return "Step 2 completed"; // Returns a new promise or value
  })
  .then((message) => {
    console.log(message); // Step 2 completed
  })
  .catch((error) => {
    console.log(error); // In case of any rejection
  });
// In this example, each .then() returns a new promise, which ensures the sequence continues.

// 2. Promise.all()
// Promise.all() is used when you want to wait for multiple promises to resolve before proceeding. 
// It returns a promise that resolves when all input promises have resolved or rejects as soon as one of the promises 
// rejects.
let promise11 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
let promise22 = new Promise((resolve) => setTimeout(resolve, 2000, "Second"));
let promise33 = new Promise((resolve) => setTimeout(resolve, 3000, "Third"));

Promise.all([promise11, promise22, promise33])
  .then((values) => {
    console.log(values); // ["First", "Second", "Third"] when all promises are resolved
  })
  .catch((error) => {
    console.log(error); // If any promise is rejected
  });
// Promise.all() waits for all promises to resolve and returns an array of results in the same order.
// If one promise rejects, Promise.all() immediately rejects with that error.

// 3. Promise.race()
// Promise.race() returns a promise that resolves or rejects as soon as the first of the input promises resolves 
// or rejects. 
// It is useful when you want to know which promise settles first.
let promiseA = new Promise((resolve) => setTimeout(resolve, 500, "First"));
let promiseB = new Promise((resolve) => setTimeout(resolve, 1000, "Second"));

Promise.race([promiseA, promiseB])
  .then((value) => {
    console.log(value); // "First" (because it resolves first)
  })
  .catch((error) => {
    console.log(error);
  });
// Promise.race() returns the result of the first settled promise (either resolved or rejected).

// 4. Promise.allSettled()
// Promise.allSettled() waits for all promises to settle (either resolved or rejected) and returns an array of objects, 
// each representing the outcome of each promise.
let promiseC = new Promise((resolve) => setTimeout(resolve, 500, "First"));
let promiseD = new Promise((resolve, reject) => setTimeout(reject, 1000, "Second"));

Promise.allSettled([promiseC, promiseD])
  .then((results) => {
    console.log(results);
    // [
    //   { status: "fulfilled", value: "First" },
    //   { status: "rejected", reason: "Second" }
    // ]
  });
// Promise.allSettled() returns an array where each promise has a status (either "fulfilled" or "rejected") and 
// the value or reason.

// 5. Promise.any()
// Promise.any() returns a promise that resolves as soon as one of the input promises resolves. 
// If all promises are rejected, it rejects with an AggregateError.
let promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Error"));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Success"));

Promise.any([promise1, promise2])
  .then((value) => {
    console.log(value); // "Success"
  })
  .catch((error) => {
    console.log(error); // If all promises are rejected
  });
// Promise.any() returns the result of the first resolved promise, or an AggregateError if all promises are rejected.

// Error Handling in Promises
// Promises are often paired with .catch() to handle errors. Any error thrown in the executor function 
// (inside the promise) or in any of the .then() blocks will be caught by .catch().
let myPromise4 = new Promise((resolve, reject) => {
  throw new Error("Something went wrong!");
});

myPromise4
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message); // "Something went wrong!"
  });

// Key Takeaways
// Promises allow us to handle asynchronous operations in a more manageable way compared to callbacks.
// Promises have three states: pending, resolved (fulfilled), and rejected.
// You can handle promises using methods like .then(), .catch(), and .finally().
// Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any() provide various ways to work with multiple 
// promises concurrently.
// Error handling in promises is done using .catch().
// Promises make asynchronous code more readable, avoid callback hell, and improve error handling.

// Async/Await in JavaScript
// async and await are syntactic sugar for working with Promises, making asynchronous code look more like synchronous 
// code, improving readability.
// async: This keyword is used to define a function that will always return a promise. If the function doesn't return 
// a promise, JavaScript will wrap its return value in a promise.
// await: This keyword can only be used inside an async function. It makes JavaScript wait for the promise to resolve 
// and then proceed with the result.

// Example of Async/Await

// // Function that returns a promise
function myAsyncFunction() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("Async operation completed!");
      } else {
        reject("Error in async operation!");
      }
    }, 2000);
  });
}

// // Using async/await
async function main() {
  try {
    let result = await myAsyncFunction();
    console.log(result); // "Async operation completed!" after 2 seconds
  } catch (error) {
    console.log(error); // Error handling
  }
}

main();

// await myAsyncFunction() pauses the execution until the promise resolves or rejects.
// try/catch is used to handle any errors in an async function.


// Differences Between Promises and Async/Await
// Syntax:
    // Promises use .then() and .catch().
    // Async/await uses async functions and await for handling results directly.
// Readability:
    // Async/await makes the code easier to read and write, as it avoids nested .then() calls and callbacks.
// Error handling:
    // Promises use .catch() for errors.
    // Async/await uses try/catch blocks for error handling, which is more natural and similar to synchronous code.
// Key Takeaways:
    // Promises are used for handling asynchronous operations.
    // Async/Await provides a simpler and more readable way to handle asynchronous code, making it almost look synchronous.


