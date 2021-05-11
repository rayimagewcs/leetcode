/**
 * @link https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 
 * [0, k],  [k+1, n]
 * 
 * [0, i] 查找nums[m]如果大于nums[len-1], m向后移， [j, n]查找nums[m]如果小于nums[len-1], m向前移
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let k = 0
    if (nums[0] < nums[nums.length-1]) k = 0
    // find k
    let t = nums[nums.length-1]
    let mi = 0, mj = 0, i = 0, j = nums.length-1
    while (i <= j) {
        mi = Math.floor((j-i)/2) + i
        if (nums[mi] < t) {
            break
        }
        else {
            i = mi+1 // k [mi, j]
        }
    }

    // if (nums[mi] > target && nums[0] > target) {

    // }

    t = nums[0], i = 0, j = nums.length-1
    while (i <= j) {
        mj = Math.floor((j-i)/2) + i
        if (nums[mj] > t) {
            break
        }
        else {
            j = mj-1
        }
    }
    // console.log('mi: ', mi, 'mj: ', mj)

    let small = mi > mj ? mj : mi
    let large = mi > mj ? mi : mj
    let n = small, min = nums[small]
    // console.log('n: ', n, min)
    for (; n <= large;) {
        if (nums[n] < min) {
            k = n
            min = nums[n]
        }
        n++
    }

    // console.log('k: ', k)

    function bs (i, j) {
        let m = -1
        while (i <= j) {
            m = Math.floor((j-i)/2) + i
            if (target === nums[m]) {
                return m
            }
            if (nums[m] > target) j = m-1
            else i = m+1
        }
        return -1
    }

    let lm = -1, rm = -1
    if (k !== 0) {
        // k = 0,  说明全部顺序
        lm = bs(0, k === 0 ? 0 : k-1)
    }
    rm = bs(k, nums.length-1)
    if (lm === -1) {
        return rm
    }
    if (rm === -1) {
        return lm
    }
};

// a = search([4,5,6,7,0,1,2], 0)
// console.log(a)
// a = search([4,5,6,7,0,1,2], 3)
// console.log(a)
// a = search([1, 2, 4,5,6,7, 0], 3)
// console.log(a)
// a = search([1, 2, 4,5,6,7, 0], 0)
// console.log(a)
// a = search([1, 2, 4,5,6,7, 0], 1)
// console.log(a)
a = search([0, 1, 2, 4,5,6,7], 0)
console.log(a)
