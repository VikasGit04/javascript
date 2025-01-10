function climbingStaircase(n){
    // Recursive way
    // if (n==1 ) {
    //     return n;
    // } else if( n== 2) {
    //     return n;
    // }
    // else {
    //     return climbingStaircase(n-1) + climbingStaircase(n-2);
    // }
    const noOfWays = [1, 2];
    for ( let i = 2; i<= n; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }
    return noOfWays[n-1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
