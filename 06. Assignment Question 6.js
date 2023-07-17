function sortedSquares(nums) {
    if (nums.length === 0) {
        return [];
    }
    const squared = nums.map(num => num * num);
    squared.sort((a, b) => a - b);
    return squared;
}
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100]
  