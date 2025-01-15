Array.prototype.myFlat = function(depth) {
    let flattenedArray = [];

    function flatten(arr, currentDepth) {
        for(let i=0; i< arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                flatten(arr[i], currentDepth + 1);
            } else {
                flattenedArray.push(arr[i]);
            }
        }
    }
    flatten(this,0);

    return flattenedArray;
}

let nestedArray = [ [1, 2, 3], [4, 5, [6, 7, [8, 9, [10]]]], [7, 8, 9],];
  
console.log(nestedArray.myFlat(Infinity)); 
console.log(nestedArray.flat(Infinity));