
/**
 * @link https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {Number[]} nums 
 * @returns 
 */
var findMin = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (nums[pivot] < nums[high]) {
            high = pivot;
        } else {
            low = pivot + 1;
        }
    }
    return nums[low];
}

a = findMin([1])
console.log(a)
a = findMin([3,4,5,1,2])
console.log(a)
a = findMin([4,5,6,7,0,1,2])
console.log(a)
a = findMin([0,1,2])
console.log(a)
a = findMin([11,13,15,17])
console.log(a)
a = findMin([2,3,0])
console.log(a)
