function intersectionMultipleArr(arrs){
    const result = [], length = arrs.length;
    const arrMap = {};
    arrs.forEach(arr=> {
        const distinctArr = [...new Set(arr)];
        for(let i=0; i< distinctArr.length; i++){
            let el = distinctArr[i];
            if(!arrMap[el]){
                arrMap[el] = 1;
            } else {
                arrMap[el]++;
            }

            if(arrMap[el] == length  ){
                result.push(el)
            }
        }
    });
    
    return result;
}

const nums=[[3,1,2,4,5],[1,2,3,4],[3,4,5,6]];
const result = intersectionMultipleArr(nums);
console.log(result);