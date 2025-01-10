// Array.reduce((accumulator, currentValue, index, array) => {}, initialValue);

let num = [1,2,3,4,5];
let total = num.reduce((acc,crr)=> {
    return acc+crr;
}, 0);

console.log('Reduce inbuilt:',total);

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;

    for( let i=0;i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}

let sum = num.myReduce((acc,crr)=> {
    return acc+crr;
}, 0);
console.log('Reduce polyfill:',sum);