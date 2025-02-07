function maxSumSubArray(arr){
    let curSum = arr[0], maxSum=arr[0];
    for(let i=1; i< arr.length; i++) {
        console.log('Comparing:', curSum+arr[i], ', ',arr[i]);
        curSum = Math.max(curSum + arr[i], arr[i]);
        console.log(curSum);
        maxSum = Math.max(maxSum, curSum);
    }
    
    return maxSum;

}

console.log(maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4]));   // 6 [4,-1,2,1]
// console.log(maxSumSubArray([5,4,-1,7,8]));   // 23 [5,4,-1,7,8]
// console.log(maxSumSubArray([-2,-3,-1]));   // -1 [-1]
// console.log(maxSumSubArray([8,-19,5,-4,20]));  // 21
// console.log(maxSumSubArray([1,2,-1]));   // 3 [1,2]
// console.log(maxSumSubArray([1]));   // 1 [1]
