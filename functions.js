// // The following variables are defined in the global scope
// var num1 = 20;
// var num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   var num1 = 2;
//   var num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"
// console.log('num1:', num1,'\nnum2:', num2);


// var x=5;

// // var fun = () => {
// //   console.log(x);
// //   var x = 10;
// // }
// var fun = function() {
//    console.log(x);
//   var x = 10;
// }

// fun();

//Closure
var e =5;
function sum(a){
  return function (b){
    return function (c) {
      return function (d){
        return a+b+c+d+e;
      }
    }
  }
}

// console.log(sum(1)(2)(3)(4));

//Question
// let count=0;
// (function printCount() {
//   if(count === 0) {
//     let count =1;   // shadowing
//     console.log(count);
//   }
//   console.log(count);
// })()

// let addSix = createBase(6);
// console.log(addSix(10)); // 16
// console.log(addSix(20)); //26

// function createBase(base) {
//   return function (num) {
//     return base + num;
//   }
// }

function find(index) {
  let a = [];
  for(let i=0; i< 100000; i++) {
    a[i] = i*i;
  }

  return function (index) {
    console.log(a[index]);  
  }
  
}

let closureFind = find();
console.time("651");
closureFind(651);
console.timeEnd("651");

console.time("1212");
closureFind(1212);
console.timeEnd("1212");