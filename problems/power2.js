function powerOfTwo(num) {
    if ( num % 2 != 0 || num < 1) {
        return false;
    } else {
        // for(let i=0; Math.pow(2,i)<= num; i++) {
        //     if( Math.pow(2,i)== num) 
        //         return true;
        // }
        // return false;
        while( num > 1) {
            if ( num % 2 != 0) {
                return false;
            }
            num /= 2;
        }
        return true;
    }
    
}

console.log(powerOfTwo(10));