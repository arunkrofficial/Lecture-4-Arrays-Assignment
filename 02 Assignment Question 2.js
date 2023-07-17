function findDistinctIntegers(nums1, nums2) {
    if (!nums1 || !nums2) {
        return [];
    }
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];
  
    const distinctNums1 = nums1.filter(num => !set2.has(num));
    const distinctNums2 = nums2.filter(num => !set1.has(num));
  
    result.push(distinctNums1);
    result.push(distinctNums2);
  
    return result;
}
  
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const result = findDistinctIntegers(nums1, nums2);
  console.log(result); 
  