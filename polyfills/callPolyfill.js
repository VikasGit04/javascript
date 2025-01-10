let car1 = {
    color: 'Red',
    company: 'Ferrari'
}

function purchaseCar(price, methodName) {
    console.log(`${methodName}: I have purchased ${this.color} color car of ${this.company} at ${price}`);
}

purchaseCar.call(car1, 500000, 'Inbuilt');

Function.prototype.myCall = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + ' is not callable.');
    }

    context.myFn = this;
    context.myFn(...args);
}

purchaseCar.myCall(car1, 500000, 'Polyfill');