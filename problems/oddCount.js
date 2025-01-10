// input : [1,3,5]
// possible set: factorial(arr.length) i.e 3! = 6 =[1],[3],[5],[1,3],[1,5],[3,5],[1,3,5]
// Odd sum: [1,3,5,4,6,8,9]
// odd count: (1,3,5,9) = 4
// odd sum => (1 odd + n number of even), (3 odd), (3 odd + n number of even)

function oddCount(arr){
    // let count =0, odd = [], even = [];
    let count=0, sum=0, oddCount=0, evenCount=0;
    arr.forEach(num => {
        sum += num;
        if (sum%2) {
            oddCount++;
            count += evenCount + 1;
        } else {
            evenCount++;
            count += oddCount;
        }
        // if(num%2 !== 0) {
        //     count++;
        //     odd.push(num)
        // } else {
        //     even.push(num);
        // }
    });
    console.log(count);
    return count % (10 ** 9+7);
}

console.log(oddCount([1,3,5,6]));

// 4C1 + 4C2 + 4C3 + 4C4 = 4+6+4+1 = 15 
// [1],[3],[5],[6],[1,3],[1,5],[1,6],[3,5],[3,6],[5,6],[1,3,5],[1,3,6],[3,5,6],[1,5,6],[1,3,5,6];
// odd sum = [1,3,5,7,9,11,9]

