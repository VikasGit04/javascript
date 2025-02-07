const arr1 = [1,2,5,[6,[7,6,8, [1,5]]]];
let flattedArr = [];
function flatArray(arr, depth) {
    for(let i=0; i< arr.length; i++) {
        if(Array.isArray(arr[i])){
            flatArray(arr[i], depth++);
        } else {
            flattedArr.push(arr[i]);
        }
    }
}

flatArray(arr1, 0);

console.log(flattedArr);

function distinctArr(arr) {
    let distinctArr = [];
    let dummyMap = {};
    for(let i=0; i< arr.length; i++) {
        if(!dummyMap[arr[i]]){
            dummyMap[arr[i]] = 1;
            distinctArr.push(arr[i]);
        }
    }
    return distinctArr;
}

console.log(distinctArr(flattedArr));