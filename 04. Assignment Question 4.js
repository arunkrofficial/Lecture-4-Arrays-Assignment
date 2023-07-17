function arrayPairSum(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input is not an array');
    }
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
    return sum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2];
  const result = arrayPairSum(nums);
  console.log(result); // Output: 4
  