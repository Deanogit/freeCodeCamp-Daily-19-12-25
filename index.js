// Pairwise
// Given an array of integers and a target number, find all pairs of elements in the array whose values add up to the target and return the sum of their indices.

// For example, given [2, 3, 4, 6, 8] and 10, you will find two valid pairs:

// 2 and 8 (2 + 8 = 10), whose indices are 0 and 4
// 4 and 6 (4 + 6 = 10), whose indices are 2 and 3
// Add all the indices together to get a return value of 9.

function pairwise(arr, target) {
  console.log(arr, target);
  // keep a used list
  const usedIndicies = [];
  let runningTotal = 0;

  // Nested loops
  for (let i = 0; i < arr.length; i++) {
    // pick up the first number
    // pick an index i
    // let index = i;
    // check if i is already in usedIndicies, if so, skip it
    if (usedIndicies.includes(i)) {
      // skip
      continue;
    }
    // if not start second loop at j = i + 1
    for (let j = i + 1; j < arr.length; j++) {
      // check if j is already in usedIndicies, if so, skip it
      if (usedIndicies.includes(j)) {
        // skip it
        continue;
        // if arr[i] + arr[j] = target, pair!
      } else if (arr[i] + arr[j] === target) {
        // // add both i & j to usedIndicies
        usedIndicies.push(i, j);
        // // add i + j to running totalSum
        runningTotal += i + j;
        // // break the inner loop (since i is used up now)
        break;
      }
    }
  }

  // if arr[i] === target - arr[i + 1]
  // for ( const [value, index] of arr.entries()) {
  //  console.log(value, index)
  // }
  // push indicies to valid arr
  // return arr;
  return runningTotal;
}
