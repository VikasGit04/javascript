// Q1
// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log("Promise1 started");
//   setTimeout(() => {
//     resolve("Promise1 resolved");
//   }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   console.log("Promise2 started");
//   setTimeout(() => {
//     resolve("Promise2 resolved");
//   }, 500);
// });

// Promise.all([promise1, promise2]).then((results) => {
//   console.log(results);
// });

// console.log("End");

 // Q2
// Explanation: Promise is a microtask and Timeout tasks are macro-tasks, so microtasks are executed before macro-tasks
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

// console.log("End");

// Q3

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
//   }
  
//   async function async2() {
//     console.log('async2');
//   }
  
//   console.log('script start');
  
//   setTimeout(function() {
//     console.log('setTimeout');
//   }, 0);
  
//   async1();
  
//   new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
//   }).then(function() {
//     console.log('promise2');
//   });
  
//   console.log('script end');

  // Q4
// function Foo() {
//     this.value = 42;
//     this.getValue = function() {
//       return this.value;
//     };
// }
  
//   const obj = new Foo();
//   const getValue = obj.getValue;
  
//   console.log(obj.getValue()); // 1.
//   console.log(getValue()); // 2.

// main();

var main = () => {
    console.log('main');
}

main();
  
  
