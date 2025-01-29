function bubbleSort(arr) {
    let temp, isSwapped = false;
    do {
        isSwapped = false;
        for(let i=0; i< arr.length-1; i++) {
            if(arr[i]> arr[i+1]){
                temp=arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                isSwapped = true;
            }
        }

    } while (isSwapped)
    return arr;
}

console.log(bubbleSort([-2,5,2,9,-6]));
