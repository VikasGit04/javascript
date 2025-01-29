Function.prototype.myBind = function(context, ...args) {
    context.myFunction = this;

        return function(...newArgs) {
                return context.myFunction(...args, ...newArgs);
        }
    // context.myFunction(...args);
}

function sayName(age, role) {
    console.log(`My name is ${this.name} and age is ${age} working as ${role}`);
}

let obj = {
    name : 'Test'
}

// sayName.myCall(obj, 'Vikas');
const myBindFn = sayName.myBind(obj,18);
myBindFn('SE');