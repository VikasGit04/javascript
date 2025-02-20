function plusOne(digits){
    let l= digits.length;
    for(let i=l-1; i>=0;i--){
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    digits = [1, ...digits];
    
    return digits;
}

console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));
console.log(plusOne([4,9,9]));
console.log(plusOne([4,9]));