function arrangeCoins(n) {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('Input must be a positive integer');
    }
    let rows = 0;
    let coins = n;
  
    while (coins >= rows + 1) {
      rows++;
      coins -= rows;
    }
  
    return rows;
}
  
  // Example usage:
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output: 2
  