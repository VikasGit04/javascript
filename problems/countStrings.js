let str = "aabbcccddddacccb";
//output : a2b2c3d4a1c3b1
let output = '';
let char = '', count = 1;

for(let i=0; i< str.length; i++){
    if(char !== str[i]) {
        if(char!= '') {
            output += count;
        }
        char=str[i];
        count = 1;
        output+= str[i];
        
    } else {
        count++;
    }
}

output += count;

console.log(output);