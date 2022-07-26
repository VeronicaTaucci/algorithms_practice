//! Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// https://leetcode.com/problems/palindrome-number/

//? Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//? Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//? Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

// var isPalindrome =  (x) => {
//     let num = ''
//     for (let i of x.toString()) {
//         // console.log(i)
//         num =i+num
//         console.log(num)
//     } if (num === x.toString()) {
//         return true
//     } else {
//         return false
//     }
// };

// let result = isPalindrome(121)
// console.log(result)

//! Could you solve it without converting the integer to a string?

var isPalindrome =  (x) => {
    
};
let result = isPalindrome(121)
console.log(result)