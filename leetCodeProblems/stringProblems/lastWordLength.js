function lastWordLength(str) {
    // const splitWords = str.split(' ');
   
    let splitWords = [], word= '';
    for(let i=0; i < str.length; i++){
        if(str[i] !== ' '){
            word += str[i];
        } else {
            splitWords.push(word);
            word = '';
        }

        if (i === str.length -1) {
            splitWords.push(word);
        } 
    }

    const words = splitWords.filter((word)=> word.length !== 0);
    const lastWord = words.splice(-1)[0];

    return lastWord.length;

}

console.log(lastWordLength(' my name is Sharukh'));