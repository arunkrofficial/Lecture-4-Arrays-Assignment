function shuffle(nums, n) {
    if (!Array.isArray(nums) || typeof n !== 'number') {
        throw new Error('Invalid input types');
    }
    const result = [];
    let i = 0;
    let j = n;
  
    while (i < n && j < nums.length) {
      result.push(nums[i]);
      result.push(nums[j]);
      i++;
      j++;
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const result = shuffle(nums, n);
  console.log(result); // Output: [2, 3, 5, 4, 1, 7]
  