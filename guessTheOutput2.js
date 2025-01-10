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
function a() {
    console.log('A');
}

async function e() {
    return 'E';
}

setTimeout(()=> console.log('B'), 0)

a();

console.log('C');
e().then((data)=> console.log(data));
Promise.resolve().then(()=> console.log('D'));

// A
// C
// D
// B