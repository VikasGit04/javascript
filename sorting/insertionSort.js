function insertionSort(arr) {
    let nte;
    for(let i=1; i< arr.length; i++) {
        nte = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > nte) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = nte;

    console.log(arr);
    }
    return arr;
}

console.log(insertionSort([-2,5,2,9,-6]));