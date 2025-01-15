// map
// Array.map((value,index,arr) => {});
let array = [1,2,3,4,5];
let doubleArray = array.map(function (num, index, array) {
    return num*2;
});
console.log('map inbuilt:',doubleArray);

Array.prototype.myMap = function (cb) {
    let mapArray = [];
    for(let i=0; i< this.length; i++) {
        mapArray.push(cb(this[i], i, this));
    }
    return mapArray;
}

let myDoubleArray = array.myMap(function (num, index, array) {
    return num*2;
});
console.log('map polyfill:',myDoubleArray);

