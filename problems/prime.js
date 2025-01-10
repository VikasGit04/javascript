function checkPrime(num) {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    } else if (num == 2) {
        isPrime = true;
    } else {
        for(let i=2; i<= Math.sqrt(num); i++) {
            if( num % i == 0) {
                isPrime = false;
                return isPrime;
            }
        }
    }

    return isPrime;
}

console.log(checkPrime(4));