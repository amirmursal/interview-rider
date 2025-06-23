/**
 * Given an array of integers numbers, write a function that returns the indices of two integers
 * within the numbers array that sum up to a target integer.The smaller index should appear first.
 * Example:
 * Input: numbers = [4,9,2,1,7], target = 5
 * Output: [0,3]
 * Explanation: numbers[3] plus numbers[0] = 5 which is target
 */


function getAllPairSums(arr, target) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

console.log(getAllPairSums([4, 9, 2, 1, 7], 5));
