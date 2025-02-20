function romanToInt(s){
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];

        if (currentValue > prevValue) {
            total += currentValue - 2 * prevValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    return total;
}

// const roman = 'XII';    // 3
// const roman = 'LVIII';  // 58
const roman = 'MCMXCIV';    // 1994
const result = romanToInt(roman);
console.log(result);


// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I(1) can be placed before V (5) and X (10) to make 4 and 9. 
// X(10) can be placed before L (50) and C (100) to make 40 and 90. 
// C(100) can be placed before D (500) and M (1000) to make 400 and 900.