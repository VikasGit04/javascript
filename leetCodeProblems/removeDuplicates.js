function distinct2(nums){
    // let i=0, j=1, k=1, count=1, temp=[nums[0]], value=nums[0];
    // while(j<nums.length) {
    //     if(value !== nums[j]){
    //         count=1;
    //         value=nums[j];
    //     } else {
    //         count++;
    //     }

    //     if(count<3) {
    //         // nums[k] = value;
    //         temp[k] = value;
    //         k++;
    //     }
        
    //     j++;
    // }
    // console.log(temp);
    // return k;

    let i=0, j=1, k=0, count=1,temp=[nums[0]], value;
    while(j < nums.length) {
        value=nums[j];
        if(nums[i] !== nums[j]){
            count=1;
            i=j;
        } else {
            count++;
        }

        if(count<3) {
            // nums[k] = nums[i];
            // temp[k] = nums[i];
            nums[k] = value;
            temp[k] = value;
            k++;
        }
        
        j++;
    }
    // console.log(nums.splice(0,k));

    console.log(temp);
    return k;
}

console.log(distinct2([0,0,1,1,1,2,2,3,3,4]));
console.log(distinct2([1,1,1,2,2,3]));
console.log(distinct2([0,0,1,1,1,1,2,3,3]));

// [1,2,2,3,4]
