function ransomNote(ransomNote, magazine){
    const magazineMap = {};
    let j=0, count=0;
    for(let i=0; i<magazine.length; i++){
        if(!magazineMap[magazine[i]]) {
            magazineMap[magazine[i]] = 1;
        } else {
            magazineMap[magazine[i]]++;
        }

        if(magazineMap[ransomNote[j]]){
            count++;
            magazineMap[ransomNote[i]]--;
            j++;
        }
        
    }

    return count == ransomNote.length
}

const result = ransomNote("aab", "baa");
console