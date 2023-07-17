function intersectionOfThreeArrays(arr1, arr2, arr3) {
    let i = 0; // Pointer for all arrays
    const result = [];
  
    while (i < arr1.length && i < arr2.length && i < arr3.length) {
      if (arr1[i] === arr2[i] && arr2[i] === arr3[i]) {
        result.push(arr1[i]);
      }
      i++;
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  const result = intersectionOfThreeArrays(arr1, arr2, arr3);
  console.log(result); // Output: [1, 5]
  