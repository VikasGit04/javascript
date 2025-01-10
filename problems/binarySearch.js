function binarySearch(arr, num) {
    let length = arr.length, index, startIndex = 0, endIndex = arr.length -1;
    if ( length == 0) {
        return -1;
    }
    
    while(startIndex > -1 && endIndex > startIndex) {
        index = Math.floor((startIndex + endIndex)/2);
        if(arr[index]== num) {
            return index;
        } else if (arr[index] > num) {
            endIndex = index -1;
        } else {
            startIndex = index + 1;
        }
    }
    return -1;
    
}

console.log(binarySearch([-5,2,4,6,10], 10));
console.log(binarySearch([-5,2,4,6,10], 6));
console.log(binarySearch([-5,2,4,6,10], 20));