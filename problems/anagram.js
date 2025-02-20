function checkAnagram(str1, str2){

    if(str1.length !== str2.length){
        return false;
    }

    let strMap = {};
    for(let char of str1) {
        if(!strMap[char]) {
            strMap[char] = 1;
        } else {
            strMap[char] += 1;
        }
    }
 
    for(let char of str2) {
        if(!strMap[char]) {
           return false
        } 

        strMap[char]--;
    }

    return true;
}

console.log(checkAnagram('anagram', 'nagaram'));

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
