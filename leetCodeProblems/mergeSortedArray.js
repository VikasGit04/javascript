function mergeSort1(nums1, m, nums2, n) {
    if (n===0) {
        return nums1;
    }

    let temp = nums1.slice(), i=0,j=0,k=0, smallest;
    while(j<m && k<n) {
        let smallest = temp[j] < nums2[k] ? temp[j++] : nums2[k++];
        nums1[i] = smallest;
        i++;
    }

    while(j==m && k<n) {
        nums1[i] = nums2[k];
        i++; k++;
    }

    while(k==n && j<m) {
        nums1[i] = temp[j];
        i++; j++;
    } 

    return nums1;
};

function mergeSort(nums1, m, nums2, n) {
    for(let i=m, j=0; i< m+n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a,b)=> a-b);
    return nums1;
}

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
const result1 = mergeSort([1,2,3,0,0,0], 3, [2,5,6], 3 );
// nums1 = [1], m = 1, nums2 = [], n = 0
const result2 = mergeSort([1], 1, [], 0 );
// nums1 = [0], m = 0, nums2 = [1], n = 1
const result3 = mergeSort([0], 0, [1], 1 );

console.log(result1);
console.log(result2);
console.log(result3);