function recursiveBinarySearch(arr,num) {
    return search(arr,num,0,arr.length-1);
}

function search(arr,num, startIndex, endIndex) {
    if ( endIndex < startIndex) {
        return -1;
    }
    
    let middleIndex = Math.floor((startIndex+endIndex)/2);
    if(arr[middleIndex] == num) {
        return middleIndex;
    } else if (arr[middleIndex] > num) {
        return search(arr,num, startIndex, middleIndex -1);
    } else {
        return search(arr,num, middleIndex +1, endIndex);
    }
}

console.log(recursiveBinarySearch([-4,2,3,6,10], 6));
