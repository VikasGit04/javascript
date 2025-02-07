function majority(nums){
    let obj = {}, major, maxCount = 1;
    if(nums.length <2){
        return nums[0];
    }

    for(let i=0; i<nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }

        if(obj[nums[i]] > maxCount) {
            maxCount = obj[nums[i]];
            major = nums[i];
        }
        
    }

    // let major=null, maxCount = 0;
    // nums.forEach(num=> {
    //     if(maxCount === 0) {
    //         major = num;
    //     }
    //     maxCount+= major == num ? 1 : -1;
    // });
    return major;
}

console.log(majority([6,5,5]));
console.log(majority([2,2,1,1,1,2,2]));
console.log(majority([6,7,6,7,7,6,6]));