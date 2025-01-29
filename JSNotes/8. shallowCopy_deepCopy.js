// Shallow Copy vs Deep Copy
// 1. Shallow Copy
// A shallow copy creates a new object or array, but it only copies the properties or elements at the top level. If the object or array contains nested objects or arrays, the reference to those nested structures is copied, not the actual data.
// In other words, changes to nested objects or arrays in the copy will affect the original, because both the original and the copy refer to the same nested structures.
// Shallow Copy Example (Object)
const original = {
  name: 'John',
  address: { city: 'New York', zip: '10001' }
};

const shallowCopy = { ...original };

// // Modify the nested object (address) in the shallow copy
shallowCopy.address.city = 'Los Angeles';

console.log(original.address.city);  // 'Los Angeles' (shallow copy modifies original)
console.log(shallowCopy.address.city);  // 'Los Angeles'

// Shallow Copy Example (Array)
const originalArray = [1, 2, [3, 4]];

const shallowCopyArray = [...originalArray];

// Modify the nested array in the shallow copy
shallowCopyArray[2][0] = 99;

console.log(originalArray[2][0]);  // 99 (shallow copy modifies original)
console.log(shallowCopyArray[2][0]);  // 99

// Shallow Copy Methods
// Object spread ({...object})
// Array spread ([...])
// Object.assign() (for objects)

const original1 = { name: 'Alice' };
const shallowCopy = Object.assign({}, original1);

const originalArray1 = [1, 2, 3];
const shallowCopyArray = [...originalArray1];


// 2. Deep Copy
// A deep copy creates a new object or array along with new copies of all objects or arrays nested within it. 
// This means that the copied object and the original are completely independent, and modifying the nested structures 
// in the copy will not affect the original.

// Deep Copy Example (Object)
const original2 = {
  name: 'John',
  address: { city: 'New York', zip: '10001' }
};

// // Using JSON methods for a deep copy
const deepCopy = JSON.parse(JSON.stringify(original2));

// // Modify the nested object in the deep copy
deepCopy.address.city = 'Los Angeles';

console.log(original2.address.city);  // 'New York' (original is unchanged)
console.log(deepCopy.address.city);  // 'Los Angeles'

// Deep Copy Example (Array)
const originalArray2 = [1, 2, [3, 4]];

// // Using JSON methods for a deep copy
const deepCopyArray = JSON.parse(JSON.stringify(originalArray2));

// // Modify the nested array in the deep copy
deepCopyArray[2][0] = 99;

console.log(originalArray[2][0]);  // 3 (original is unchanged)
console.log(deepCopyArray[2][0]);  // 99

// Deep Copy Methods
// JSON methods (JSON.parse(JSON.stringify(object))): This is the most common method for deep copying simple objects and arrays, but it has limitations (such as not copying functions, undefined, or non-JSON-safe properties).
// Manual recursion: You can write a recursive function to handle deep copying, ensuring nested structures are copied completely.
// Third-party libraries like Lodash (_.cloneDeep()) provide more reliable deep copy solutions.

// Key Differences Between Shallow and Deep Copy
// Feature                 |       Shallow Copy                    |   Deep Copy
// Copies nested data?     |   No, only copies references          | Yes, copies all nested objects/arrays,
//                         |   to nested objects/arrays.           |   creating new instances.
// Effect of modification  | Modifying nested structures in the    | Modifying nested structures in the copy 
// on nested data?         |copy will affect the original.         |   will not affect the original.
// Performance             |   Generally faster since it doesn't   | Slower, especially for deeply nested objects
//                         | copy deeply nested structures.        |    or large arrays.
// Methods                 |Object.assign(), spread operator (...) |   JSON.parse(JSON.stringify()), manual recursion, libraries like Lodash

// When to Use Shallow Copy vs. Deep Copy
// Shallow Copy: Use when you don't need to copy nested objects or arrays. It's faster and sufficient for cases where you only care about the top-level structure.
// Deep Copy: Use when you need a full copy of an object or array, including all nested structures. This is necessary when you want to ensure that changes to the copy won't affect the original.

