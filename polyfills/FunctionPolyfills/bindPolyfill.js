let car = {
    color: 'Black',
    brand: 'Mercedes'
}

function purchaseCar(price) {
    console.log(`I have purchased ${this.color} color car from ${this.brand} at ${price}.`);
}

let newFun = purchaseCar.bind(car, 100000);
newFun();

Function.prototype.myBind = function (context, ...args) {
    context.myFn = this;
    
    return function(...newArgs) {
        return context.myFn(...args, ...newArgs);
    }
}

let myBindFun = purchaseCar.myBind(car);
myBindFun(200000);
