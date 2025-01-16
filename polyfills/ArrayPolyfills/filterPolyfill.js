Array.prototype.myFilter = function (cb) {
    let myFilterArray = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i],i,this)) myFilterArray.push(this[i]);
    }

    return myFilterArray;
}

let num = [1,2,3,4,5];

let evenNum = num.filter(function (value,index,num){ 
    return value%2 == 0
});
console.log('Filter inbuilt:', evenNum);

let myEvenNum = num.myFilter(function (value,index,num){ 
    return value%2 == 0
});
console.log('Filter Polyfill:', myEvenNum);
