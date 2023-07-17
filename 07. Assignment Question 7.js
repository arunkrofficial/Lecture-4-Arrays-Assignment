function maxCount(m, n, ops) {
    if (typeof m !== 'number' || typeof n !== 'number' || !Array.isArray(ops)) {
        throw new Error('Invalid input parameters');
    }
    let minRow = m;
    let minCol = n;
  
    for (let i = 0; i < ops.length; i++) {
        if (!Array.isArray(ops[i]) || ops[i].length !== 2 || typeof ops[i][0] !== 'number' || typeof ops[i][1] !== 'number') {
            throw new Error('Invalid input parameters');
        }
        minRow = Math.min(minRow, ops[i][0]);
        minCol = Math.min(minCol, ops[i][1]);
    }
  
    return minRow * minCol;
}
  
  // Example usage:
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const result = maxCount(m, n, ops);
  console.log(result); // Output: 4
  