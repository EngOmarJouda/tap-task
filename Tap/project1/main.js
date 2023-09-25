var twoNoSum = function(nums, target) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
  
      if (diff in hashmap) { 
        return [hashmap[diff], i];
      }
  
      // Otherwise, add the current number to the hashmap.
      hashmap[nums[i]] = i;
    }
  
    return [];
  };


  let nums = [2 , 7, 15 ,17 , 9];
  let target = 17; 
  let result = twoNoSum( nums,target);
  console.log(result);