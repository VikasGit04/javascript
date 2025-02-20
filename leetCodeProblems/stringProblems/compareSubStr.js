function check(str) {
    for(let i=0; i< str.length; i++) {
        const lindex = str.lastIndexOf(str[i]);
        const sindex = str.indexOf(str[i]);
        // console.log(lindex, ' ', sindex);
        if( lindex === sindex ){
            return i;
            
        }
    }
    return -1;
}

console.log(check('leetcode'));