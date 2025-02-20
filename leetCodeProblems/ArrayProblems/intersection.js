function intersection(arr1,arr2){
    
    const result=[];
    const distinctArr = [...new Set(arr1)];
    for(let i=0; i<distinctArr.length; i++){
        if(arr2.includes(distinctArr[i])){
            result.push(distinctArr[i]);
        }
    }
    return result;
}
const nums1=[1,2,2,1], nums2=[2,2];
const result = intersection(nums1,nums2);
console.log(result);