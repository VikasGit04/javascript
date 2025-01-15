function recursiveFibonacci(num) {
    if ( num < 2) {
        return num;
    }
    
    return recursiveFibonacci(num-1) + recursiveFibonacci(num -2);    
}

// f(n) = f(n-1) + f(n-2);

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));