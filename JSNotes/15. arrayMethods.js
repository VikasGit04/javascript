// Map, Filter, Reduce and Sort
// 1. Map:
// The map() method creates a new array populated with the results of calling a provided function on every element in the 
// calling array.
// Syntax:
// javascript

// let newArray = arr.map(callback(currentValue, index, array));

// callback: A function to execute on each element in the array.
// currentValue: The current element being processed.
// index: The index of the current element.
// array: The array map() was called on.
// Example:
// javascript

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(num => num * num);
// console.log(squares); // Output: [1, 4, 9, 16, 25]

// 2. Filter:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax:
// javascript

// let newArray = arr.filter(callback(currentValue, index, array));

// callback: A function that tests each element.
// currentValue: The current element being processed.
// index: The index of the current element.
// array: The array filter() was called on.

// Example:
// javascript
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// 3. Reduce:
// The reduce() method executes a reducer function on each element of the array (from left to right) and returns a single 
// value (like a sum or concatenation).

// Syntax:
// javascript
// let result = arr.reduce(callback(accumulator, currentValue, index, array), initialValue);

// callback: A function that takes the accumulator and the current value.
// accumulator: Accumulates the callback’s result.
// currentValue: The current element being processed.
// index: The index of the current element.
// initialValue: The initial value to start the accumulator with.

// Example:
// javascript
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

// 4. Sort:
// The sort() method sorts the elements of an array in place and returns the sorted array.

// Syntax:
// javascript
// arr.sort(compareFunction);

// compareFunction: (Optional) A function used to determine the order of the elements.

// Example:
// javascript
// let numbers = [5, 3, 8, 1, 2];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 2, 3, 5, 8]

// let words = ['banana', 'apple', 'cherry'];
// words.sort();
// console.log(words); // Output: ['apple', 'banana', 'cherry']


// How sort function works internally?
// The sort() function in JavaScript compares elements using an optional comparison function. If no comparison function
//  is provided, it converts the elements to strings and sorts them lexicographically (based on Unicode code points). 
// If a comparison function is provided, it uses that to determine the order.
// 1. Without a Comparison Function:
// When no comparison function is provided, sort() converts the array elements to strings (if they are not strings) 
// and sorts them based on the lexicographic order of those string representations.

// Example:
// javascript
// let numbers = [5, 1, 10, 3];
// numbers.sort();
// console.log(numbers); // Output: [1, 10, 3, 5]

// In this case, the numbers are converted to strings and sorted as strings: '1', '10', '3', and '5'. 
// The lexicographic order is: '1', '10', '3', '5'.
// 2. With a Comparison Function:
// A comparison function takes two arguments (say a and b) and returns:
// A negative value if a should come before b.
// A positive value if a should come after b.
// Zero if a and b are considered equal in the sorting order.

// Syntax of comparison function:
// javascript
// arr.sort((a, b) => {
//     return a - b;  // For ascending order (numerically)
//     return b - a;  // For descending order (numerically)
// });

// Example: Sorting Numbers in Ascending Order
// javascript
// let numbers = [5, 1, 10, 3];
// numbers.sort((a, b) => a - b); // Ascending order
// console.log(numbers); // Output: [1, 3, 5, 10]

// Here, the comparison function a - b ensures that the elements are sorted numerically in ascending order. For example:
// When a = 5 and b = 1, the result of a - b is 4, which is positive, so 5 is placed after 1.

// Example: Sorting Numbers in Descending Order
// javascript
// let numbers = [5, 1, 10, 3];
// numbers.sort((a, b) => b - a); // Descending order
// console.log(numbers); // Output: [10, 5, 3, 1]

// Here, the comparison function b - a ensures that the elements are sorted in descending order.
// How Comparison Works Internally:
// The sort() method compares elements pair by pair:
// For each pair of elements a and b, it calls the comparison function.
// The comparison function returns a value:
// If the value is negative, a comes before b.
// If the value is positive, b comes before a.
// If it's zero, the order of a and b remains unchanged.
// This process continues until the entire array is sorted.

// Example: Sorting Strings:
// javascript
// let words = ['banana', 'apple', 'cherry'];
// words.sort(); // Default lexicographic sorting
// console.log(words); // Output: ['apple', 'banana', 'cherry']

// Conclusion:
// Without a comparison function, sort() uses lexicographic order based on string conversion.
// With a comparison function, sort() compares elements as defined by the function to determine their order.

