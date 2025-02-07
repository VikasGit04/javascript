function cartesianProduct(arr1, arr2) {
    let result = [];
    arr1.forEach((item1) => {
        arr2.forEach((item2)=> {
            result.push([item1, item2]);
        });
    });
    return result;
}

console.log(cartesianProduct([1,3], [2,4]));