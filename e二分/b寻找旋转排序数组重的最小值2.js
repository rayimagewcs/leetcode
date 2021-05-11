/**
 * @link https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * 
 * @code LC154
 * 
 * @param {number[][]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    let i = 0, j = nums.length-1, m = 0
    while (i < j) {
        if (j-i <= 1) return Math.min(nums[i], nums[j])

        if (nums[i] === nums[i+1]) {
            while (nums[i] === nums[i+1] && i < j-1) {
                i++
            }
            continue
        }
        if (nums[j] === nums[j-1]) {
            while (nums[j] === nums[j-1] && j > i+1) {
                j--
            }
            continue
        }

        m = Math.floor((j-i)/2) + i
        if (nums[m] > nums[i]) {
            if (nums[m] > nums[j]) {
                i = m
                continue
            }
            else {
                return nums[i] // i->j 顺序
            }
        }
        if (nums[m] < nums[i]) {
            j = m // 此时 m 可能是最小值
        }
    }
};

// min = findMin([1,3,5])
// console.log(min)

// min = findMin([2,2,2,0,1])
// console.log(min)

// min = findMin([2,2,2,2,2])
// console.log(min)

// min = findMin([0,1])
// console.log(min)

// min = findMin([0])
// console.log(min)

min = findMin([1,2,1])
console.log(min)
