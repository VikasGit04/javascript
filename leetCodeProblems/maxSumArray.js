function maxSum(arr, n, k) {
   let max=0, sum=0,subArr = arr;
   for(let i=0; i<k; i++){
    sum += arr[i];
    max = sum;
   }

   for(let i=k; i<n; i++){
    sum += arr[i] - arr[i-k];
    if(sum > max) {
        max = sum;
        subArr = arr.slice(i,k); 
    } 
   }
   console.log(subArr);

   return max;
}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
console.log(maxSum(arr, n, k));