//Q1
/*
for(var i=0; i<10; i++) {
    setTimeout(()=> console.log(i));
}
*/

// Q2
/*
for(let i=0; i<10; i++) {
    setTimeout(()=> console.log(i));
}
*/

//Q3
/*
var fullName = 'var name';

var obj = {
    fullName: 'Obj name',
    
    prop: {
        fullName: 'Obj prop name',
        getFullName: function() {
            return this.fullName;
        }    
    },

    getFullName: function() {
        return this.fullName;
    },

    getFullNameV2: () => fullName,

    getFullNameV3: (function () {
        return this.fullName;
    })(),
};

console.log(obj.prop.getFullName());    // Obj prop name
console.log(obj.getFullName());         // Obj name
console.log(obj.getFullNameV2());       // var name
console.log(obj.getFullNameV3);       // Obj name
*/

//Q4
/*
const coder = {
    name: "Coder name",
    sayName: function() {
        console.log(this.name);
    },
};

const john = {
    name: "John",
    sayName: function() {
        console.log(this.name);
    },
};
john.sayName();
john.sayName.call(coder);
*/

// Q5
/*
const coder = {
    name: "Coder name",
    sayName: function() {
        console.log(this.name);
    },
};

setTimeout(coder.sayName, 10);
setTimeout(coder.sayName.bind(coder), 10);
setTimeout(()=> {coder.sayName()}, 10);
*/

//Q6
/*
// const obj = {
//     height: 40,
// };
const obj = Object.create({
    height: 40,
});

console.log(obj.height);

delete obj.height;
console.log(obj.height);
*/

//Q7
// function a() {
//     console.log('A');
// }

// async function e() {
//     return 'E';
// }

// setTimeout(()=> console.log('B'), 0)

// a();

// console.log('C');
// e().then((data)=> console.log(data));
// Promise.resolve().then(()=> console.log('D'));

// A
// C
// D
// B

//Q8
// function sum() {
//     let a = 8;
//     const b = 2;
//     var c = a+b;

// }
// // console.log(c)
// sum()
// console.log(c);

//Q9

// arr = [1,2,3,4,5];
// console.log(arr[2], arr.length);        //3 5
// arr.length = 0;
// console.log(arr[2], arr.length);    


// (function fnA(a){
//     return (function fnB(a) {
//         console.log(a);
//     })(1)
// })(0);

// let x=1;
// const y=2;
// var z=3;
// i=4;
// console.log('hi');

// function test() {
//     console.log(x,y,z,i);
// }
// test();

// arr = [ 1, 2, 3, [4,5], [[6,[7]]]];
// console.log(arr.flat(Infinity));

// obj = {
//     city : 'Delhi',
//     street: 'ABC'
// }

// obj.pincode = 400;

// console.log(obj.pincode);
// // delete obj.pincode;
// obj.pincode = undefined;
// console.log(obj);


function sum() {
    // let args = arguments;
    // console.log(args);

}
console.log(sum(1,2,3));