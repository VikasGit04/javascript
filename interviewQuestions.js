// // guess the output
// var variable = "Global Level Variable";

// let myObject = { 
//  variable: "Object Level Variable", 
// func:function() { 
//  console.log(this.variable); 
//  },
//  arrowFun: () => {
//     console.log(this.variable); 
//  },
//  arrowFun1: () => {
//     console.log(variable); 
//  }
// };
// // console.log()

// myObject.func();        // Object Level Variable
// myObject.arrowFun();    // undefined
// myObject.arrowFun1();    // GLobal Level Variable

// // guess the output
// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

// // Output: [1,7,3,5,2,6,4]

// //Write a program
// let str='attiopaaantkka';
// //output='aiopta'

// let result='', temp;
// for(let i=0; i< str.length; i++){
//     if(str[i] !== str[i+1] && temp !== str[i]) {
//         result += str[i];
//     } else {
//         temp = str[i];
//     }
// }

// console.log('Removed concurrent duplications:', result);


// // Write a logic to get employee name who has Node.js skill, try with reduce.
// const employees = [
//     {
//       "id": 1,
//       "name": "Alice",
//       "skills": ["JavaScript", "React", "Node.js"]
//     },
//     {
//       "id": 2,
//       "name": "Bob",
//       "skills": ["Python", "Django", "SQL"]
//     },
//     {
//       "id": 3,
//       "name": "Charlie",
//       "skills": ["Java", "Spring", "SQL","Node.js"]
//     }
//   ]

//   const names = employees.reduce((names, employee)=> {
//         if(employee.skills.includes('Node.js')){
//             names.push(employee.name);
//         }
//         return names;
//   }, []);

//   const names2 = employees.filter((employee)=> employee.skills.includes('Node.js')).map((employee)=> employee.name);

//   console.log('Reduce method:', names);
//   console.log('Filter and map method:', names2);

  // Write a program to sort a alphabets without using in-built method
  let alphaArr = ['z', 'k', 'a', 'e'];
  let temp1;
  for(let i=0; i<alphaArr.length-1; i++){
    for(let j=i+1;j<alphaArr.length; j++) {
        if(alphaArr[i].charCodeAt(0) > alphaArr[j].charCodeAt(0)){
            temp1 = alphaArr[i];
            alphaArr[i] = alphaArr[j];
            alphaArr[j] = temp1;
        }
    }
  }  
 console.log(alphaArr);
// console.log(alphaArr.sort());
