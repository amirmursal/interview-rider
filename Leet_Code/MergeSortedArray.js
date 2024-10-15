function merge(nums1, m, nums2, n) {
  const test = nums1.slice(0, m);
  const test1 = nums2.slice(0, n);
  const merged = [...test, ...test1].sort();

  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
