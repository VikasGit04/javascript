// Spread Operator

// The spread operator in JavaScript is represented by three consecutive dots (...). 
// It is primarily used to expand elements of an iterable (like an array or object) into individual elements or 
// properties. It can be used in various scenarios, such as with arrays, objects, and function arguments.
// 1. Spread in Arrays:
// It allows you to copy elements from one array into another or combine arrays.
// Example:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// In this example, the spread operator expands the elements of arr1 and arr2 into a new array combined.
// 2. Spread in Objects:
// You can copy or merge objects with the spread operator, which is especially useful when you want to create a 
// shallow copy of an object or merge multiple objects.
// Example:
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { city: 'New York' };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: 'Alice', age: 25, city: 'New York' }

// Here, the spread operator copies the properties of obj1 and obj2 into a new object mergedObj.
// 3. Spread in Function Arguments:
// It allows you to pass an array or iterable as individual arguments to a function.
// Example:
const nums = [1, 2, 3];
const sum = (a, b, c) => a + b + c;

console.log(sum(...nums)); // Output: 6

// In this case, the spread operator spreads the elements of the nums array as separate arguments to the sum function.
// Key Points:
// Shallow Copy: The spread operator performs a shallow copy of an array or object, meaning it copies the 
// references of nested objects/arrays but not the actual content. For deep copying, a different approach 
// (like JSON.parse(JSON.stringify())) is needed.
// Merge and Combine: It’s commonly used to merge arrays or objects.
// Function Arguments: It can be used to pass an array as individual arguments in function calls.
// The spread operator is a concise and powerful feature in JavaScript for handling arrays, objects, and 
// function arguments.

