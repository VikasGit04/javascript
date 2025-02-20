function intersection2(arr1,arr2){
    
    const result = nums1.filter((el)=> {
        const index = nums2.indexOf(el);
        if (index>-1){
            nums2.splice(index,1);
            return true;
        }
    });
    return result;
}
const nums1=[1,2,2,1], nums2=[2,2];
const result = intersection2(nums1,nums2);
console.log(result);