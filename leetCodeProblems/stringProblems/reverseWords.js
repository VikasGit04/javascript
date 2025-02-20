function reverseWords(str){
    const withoutSpaceStr = str.replace(/\s+/g, ' ').trim();
    const result = withoutSpaceStr.split(' ').reverse().join(' ');
    return result;
}

console.log(reverseWords(' the   sky is blue '));
