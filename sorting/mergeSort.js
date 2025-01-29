function mergeSort(arr){
    if(arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length /2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let result = [];
    let lIndex = 0, rIndex = 0;

    while(lIndex < leftArr.length && rIndex < rightArr.length) {
        if(leftArr[lIndex] < rightArr[rIndex]) {
            result.push(leftArr[lIndex]);
            lIndex++;
        } else {
            result.push(rightArr[rIndex]);
            rIndex++;
        }
    }

    return result.concat(leftArr.slice(lIndex)).concat(rightArr.slice(rIndex));
}

console.log(mergeSort([4,2,1,7,6]));