// Arrays

// An array is an ordered collection of values, and each value is indexed by a number (starting from 0). 
// Arrays can store any type of data, such as strings, numbers, or even other arrays or objects.
// Declaration: You can create arrays using square brackets [].
// Accessing elements: Use the index of the element you want to access.
// Methods: JavaScript arrays come with built-in methods like 
// .push(), .pop(), .shift(), .unshift(), .map(), .filter(), and .reduce().

// Example:
let fruits = ['Apple', 'Banana', 'Orange'];

// Accessing elements
console.log(fruits[0]);  // 'Apple'

// Adding an element
fruits.push('Mango');
console.log(fruits);  // ['Apple', 'Banana', 'Orange', 'Mango']

// Removing an element
fruits.pop();
console.log(fruits);  // ['Apple', 'Banana', 'Orange']

// 1. Array Methods
// JavaScript arrays come with many built-in methods to manipulate and process data. Some of the most commonly used methods include:

// a) Array.push()
// Adds one or more elements to the end of an array and returns the new length of the array.
let arr1 = [1, 2];
arr1.push(3);
console.log(arr1);  // [1, 2, 3]

// b) Array.pop()
// Removes the last element from an array and returns that element.
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2);  // [1, 2]

// c) Array.shift()
// Removes the first element from an array and returns that element.
let arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3);  // [2, 3]

// d) Array.unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
let arr4 = [1, 2];
arr4.unshift(0);
console.log(arr4);  // [0, 1, 2]

// e) Array.concat()
// Combines two or more arrays and returns a new array.
let arr_1 = [1, 2];
let arr_2 = [3, 4];
let arr_3 = arr_1.concat(arr_2);
console.log(arr_3);  // [1, 2, 3, 4]

// f) Array.slice()
// Returns a shallow copy of a portion of an array into a new array object.
let arr5 = [1, 2, 3, 4, 5];
let newArr1 = arr5.slice(1, 4);
console.log(newArr1);  // [2, 3, 4]

// g) Array.splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new ones.
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 2, 6, 7);
console.log(arr6);  // [1, 2, 6, 7, 5]

// 2. Iterating Over Arrays
// You can loop through arrays using different methods.

// a) forEach()
// Executes a provided function once for each array element.
let arr7 = [1, 2, 3];
arr7.forEach(element => {
  console.log(element);
});
// Output: 1, 2, 3

// b) map()
// Creates a new array populated with the results of calling a provided function on every element in the array.
let arr8 = [1, 2, 3];
let newArr = arr8.map(x => x * 2);
console.log(newArr);  // [2, 4, 6]

// c) filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let arr9 = [1, 2, 3, 4, 5];
let evenNumbers = arr9.filter(x => x % 2 === 0);
console.log(evenNumbers);  // [2, 4]

// d) reduce()
// Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let arr10 = [1, 2, 3, 4];
let sum = arr10.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 10

// e) some()
// Tests whether at least one element in the array passes the test implemented by the provided function.
let arr11 = [1, 2, 3, 4];
let hasEven = arr11.some(x => x % 2 === 0);
console.log(hasEven);  // true

// f) every()
// Tests whether all elements in the array pass the test implemented by the provided function.
let arr12 = [2, 4, 6];
let allEven = arr12.every(x => x % 2 === 0);
console.log(allEven);  // true

// 3. Array Destructuring
// Array destructuring allows you to unpack values from arrays into distinct variables.
let arr13 = [1, 2, 3];
let [a1, b1, c1] = arr13;
console.log(a1, b1, c1);  // 1 2 3

// You can also use rest syntax to collect the remaining elements into an array.

let arr14 = [1, 2, 3, 4];
let [a2, ...rest] = arr14;
console.log(a2);    // 1
console.log(rest); // [2, 3, 4]

// 4. Array Sorting and Reversing
// sort(): Sorts the elements of an array in place (can sort numbers or strings).

let arr15 = [4, 2, 5, 1, 3];
arr15.sort((a, b) => a - b);
console.log(arr15);  // [1, 2, 3, 4, 5]

// reverse(): Reverses the order of elements in an array.
let arr16 = [1, 2, 3];
arr16.reverse();
console.log(arr16);  // [3, 2, 1]

// 5. Array Finding and Indexing
// find(): Returns the first element in the array that satisfies the provided testing function.
let arr17 = [1, 2, 3, 4];
let result = arr17.find(x => x > 2);
console.log(result);  // 3

// indexOf(): Returns the first index of a given element in the array (returns -1 if not found).
let arr18 = [1, 2, 3, 4];
let index = arr18.indexOf(3);
console.log(index);  // 2

// 6. Array Searching and Sorting with Functions
// sort() with custom comparison: You can sort arrays of objects by specific properties using a custom comparison function.
let arr19 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
arr19.sort((a, b) => a.age - b.age);
console.log(arr19);
// Output: [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]

// 7. Array Flattening
// Flattening refers to converting a nested array into a single array. This can be done using Array.prototype.flat().
let arr20 = [1, [2, 3], [4, [5, 6]]];
let flattened = arr20.flat(2);  // Flattens up to 2 levels
console.log(flattened);  // [1, 2, 3, 4, 5, 6]

// 8. Array Copying
// slice(): Can be used to create a shallow copy of an array.
let arr21 = [1, 2, 3];
let copy1 = arr21.slice();
console.log(copy1);  // [1, 2, 3]

// spread syntax (...): Used to create a shallow copy of an array.
let arr22 = [1, 2, 3];
let copy = [...arr22];
console.log(copy);  // [1, 2, 3]

// 9. Multi-Dimensional Arrays
// JavaScript arrays can have arrays as elements, making them multi-dimensional arrays.
Example:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]);  // 6

// 10. Array Buffer and Typed Arrays
// ArrayBuffer and Typed Arrays like Int32Array or Float64Array are used when you need to handle binary data.
let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]);  // 42

