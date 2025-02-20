function palindrome(s){
    let arr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(arr);
    // if(arr && arr.length){
    //     let startIndex = 0, lastIndex = arr.length - 1;
    //     while(startIndex < lastIndex){
    //         if (arr[startIndex] !== arr[lastIndex]){
    //             return 'Not a palindrome';
    //         }
    //         ++startIndex;
    //         --lastIndex;
    //     }
    // }
    
    return 'Palindrome';
}

const result = palindrome("Damosel, a poem? A carol? Or a cameo pale? (So mad!)");
console.log(result);