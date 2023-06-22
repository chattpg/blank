function pivotIndex(nums) { 
     const leftSum = 0; 
     const rightSum = 0; 
     for (let i = 0; i < nums.length; i++) {
         leftSumOfNums = nums[i] + nums[i - 1]; 
         rightSumOfNums = nums[i + 1] + nums[i];
         if (i < 0 || leftSumOfNums === 0) { return -1; } 
         if (i >= nums.length || rightSumOfNums === nums[nums.length - 1]) { return -1; } 
         const pivotIndex = i; } 
