function maxOperations(nums, k) {
  let count = 0;
  const map = new Map();

  for (let num of nums) {
    const complement = k - num;

    if (map.has(complement) && map.get(complement) > 0) {
      count++;
      map.set(complement, map.get(complement) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  return count;
}

// Example usage:
const nums = [1, 2, 3, 4];
const k = 5;
console.log(maxOperations(nums, k)); // Output: 2
