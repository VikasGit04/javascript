function moveZeroes(arr){
    const check = 0;
    let index=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== check) {
            arr[index]=arr[i];
            if(i!== index) arr[i] = 0;
            index++;
        }
    }

    return arr;
}

const arr1 = [0,1,0,3,12];
// const arr1 = [0,0,1];
const result = moveZeroes(arr1);
console.log(result);