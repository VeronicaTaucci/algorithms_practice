
//! two sums
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
////
//? Input: nums = [2,7,11,15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

////
//? Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

const twoSums = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+ 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                // console.log([i,j])
                return[i, j]
            } 
            }
        }
}

let result = twoSums([0, 3,6,7,1], 1)
console.log(result)