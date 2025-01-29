Function.prototype.myCall = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + ' is not callable.');
    }

    context.myFunction = this;
    context.myFunction(...args);
}

function purchaseCar(price, methodName) {
    console.log(`${methodName}: I have purchased ${this.color} color car of ${this.company} at ${price}`);
}

let car1 = {
    color: 'Red',
    company: 'Ferrari'
}

purchaseCar.call(car1, 500000, 'Inbuilt');
purchaseCar.myCall(car1, 500000, 'Polyfill');