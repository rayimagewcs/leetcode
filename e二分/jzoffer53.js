/**
 * @link https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0, j = nums.length-1, m = Math.ceil((j-i)/2 + i)
    while (i<=j) {
        if (nums[m] === m) {
            // r
            i = m+1
        }
        else {
            // l
            j = m-1
        }
        m = Math.ceil((j-i)/2) + i
    }
    return i
}

let e = missingNumber([0, 1, 2, 3, 5])
console.log(e)
e = missingNumber([0, 1, 3])
console.log(e)
e = missingNumber([0, 1, 3])
console.log(e)
e = missingNumber([0, 1])
console.log(e)
e = missingNumber([1, 2])
console.log(e)
e = missingNumber([0,1,2,3,4,5,6,7,9])
console.log(e)
