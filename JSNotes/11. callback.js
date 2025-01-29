// Callback
// A callback is a function that is passed into another function as an argument to be executed later. This allows you to defer execution of a certain piece of code until a particular task is completed, like handling an asynchronous operation (e.g., a network request, file read operation).
// Key Points about Callbacks:
// Asynchronous Behavior: Callbacks are often used in asynchronous code to ensure that certain tasks are executed only after other tasks are completed.
// Higher-order Functions: Callbacks are a form of higher-order function, as they are functions passed as arguments to other functions.
// Flexibility: Callbacks allow for more flexible code by enabling actions to be defined outside the function they are passed to.(You can decide what to do after a task without changing the main function.)
// Example of a Callback:
// javascript
// Copy code
// function greetUser(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback(); // Execute the callback function passed to it
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greetUser("Alice", sayGoodbye); 
// // Output:
// // Hello, Alice!
// // Goodbye!

// In this example:
// greetUser accepts a name and a callback function.
// After greeting the user, it calls the sayGoodbye function, which is the callback.
// Callback with Asynchronous Code:
// Callbacks are especially useful in asynchronous operations. Here's an example using setTimeout, which is an asynchronous function:
// javascript
// Copy code
// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched!");
//     callback(); // Once the data is fetched, the callback is invoked
//   }, 2000);
// }

// function displayData() {
//   console.log("Displaying data...");
// }

// fetchData(displayData);
// // Output after 2 seconds:
// // Data fetched!
// // Displaying data...

// Here, fetchData simulates fetching data asynchronously. Once the data is "fetched" (after 2 seconds), it calls the displayData function.

