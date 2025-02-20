function distinctCharSet(str){
    let distinctMap = {}, length = str.length, distinctChar = 0;
    for(let i=0; i<length; i++){
        if(!distinctMap[str[i]]){
            distinctMap[str[i]] = 1;
            distinctChar++;
        }
    }

    let checkCharMap ={}, distinctWord = '';
    for(let i=0; i<length; i++){
        if(!checkCharMap[str[i]]){
            checkCharMap[str[i]] = 1;
            distinctWord+=str[i];
        } else {
            
            const foundIndex = distinctWord.split('').findIndex((letter)=> letter == str[i]);
            if(foundIndex > -1 ) {
                distinctWord = distinctWord.split('').slice(foundIndex+1).join('');
            }
            distinctWord+=str[i];
        }
        console.log(distinctWord);
    }

    return distinctWord;
}

console.log('Result:',distinctCharSet('aabcbcdbca'))