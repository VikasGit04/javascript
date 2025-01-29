// It is a divide and conquer approach.
// It takes one element as pivot and moves it to the correct position, 
// i.e all the left elements should be smaller than pivot and all the greater elements should be greater then pivot.
// Repeat the same steps for the sub-arrays

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [], right = [];

    for( const el of arr.slice(0, arr.length -1)) {
       if(el < pivot) {
            left.push(el);
       } else {
        right.push(el);
       } 
    };

    return [...quickSort(left), pivot, ...quickSort(right)];

}

console.log(quickSort(['z', 'k', 'a', 'e']));