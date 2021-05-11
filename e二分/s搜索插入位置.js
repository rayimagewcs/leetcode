/**
 * @link https://leetcode-cn.com/problems/search-insert-position/
 * 
 * 本质求解数组中小于等于 target 的最大的数，或者第一个大于target的数
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) return 0
    if (target > nums[nums.length - 1]) return nums.length
    if (nums[0] > target) return 0

    let i = 0, j = nums.length - 1, m = 0
    while (i <= j) {
        m = Math.floor((j - i)/2) + i
        if (nums[m] > target && nums[m-1] <= target) {
            if (nums[m-1] === target) return m-1
            return m
        }
        if (nums[m] > target) {
            j = m-1
        }
        else {
            i = m+1
        }
    }
    return m
};

idx = searchInsert([1], 1)
console.log('0: ', idx)
idx = searchInsert([0], 1)
console.log('1: ', idx)
// idx = searchInsert([1,3], 2)
// console.log('1: ', idx)
// idx = searchInsert([1,3,5,6], 5)
// console.log('2: ', idx)
// idx = searchInsert([1,3,5,6], 2)
// console.log('1: ', idx)
// idx = searchInsert([1,3,5,6], 7)
// console.log('4: ', idx)
// idx = searchInsert([1,3,5,6], 0)
// console.log('0: ', idx)
