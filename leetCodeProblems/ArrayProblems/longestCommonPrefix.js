function longestCommonPrefix(arr){
    const compareWith = arr[0];
    let result = '';

    for(let i=0; i< compareWith.length; i++) {
        if(arr.every((word)=> word[i] === compareWith[i])){
            result += compareWith[i];
        } else {
            return result;
        }
    }

    return result;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));