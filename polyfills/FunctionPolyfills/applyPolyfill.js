let car = {
    color: 'white',
    brand: 'BMW'
}

function purchaseCar(price) {
    console.log(`I have purchased ${this.color} color ${this.brand} at ${price}.`)
}

purchaseCar.apply(car,[50000]);

Function.prototype.myApply = function(context, args=[]) {
    if (!Array.isArray(args)) {
        throw new Error('Not an array');
    }
    context.fn = this;
    context.fn(...args);
}

purchaseCar.myApply(car,[50000,2]);
