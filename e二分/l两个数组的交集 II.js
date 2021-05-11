/**
 * @link https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)

    let targ1 = nums1, targ2 = nums2
    if (nums1.length > nums2.length) {
        targ1 = nums2
        targ2 = nums1
    }

    /**
     * 
     * @param {Number[]} arr 
     * @param {Number} t 
     */
    function findFirstEqual (arr, t) {
        let m = 0, s = 0, e = arr.length - 1, f = -1
        while (s <= e) {
            m = Math.floor((e-s)/2) + s
            if (arr[m] === t) {
                f = m
                break
            }
            if (arr[m] > t) e = m-1
            else s = m+1
        }
        if (f !== -1) {
            let i = f
            while (i >= 0) {
                if (arr[i] === t) {
                    f = i
                    i--
                }
                else break
            }
        }
        return f
    }

    let res = []
    for (let i = 0; i < targ1.length; ) {
        let idx = findFirstEqual(targ2, targ1[i])
        if (idx === -1) {
            i++
            continue
        }

        let j = idx, tmp = targ1[i]
        while (i < targ1.length && j < targ2.length && targ1[i] === tmp && targ1[i] === targ2[j]) {
            res.push(targ1[i])
            i++
            j++
        }

        while (i < targ1.length && targ1[i] === tmp) {
            i++
        }
    }

    return res
};

// arr1 = [1,2,2,1]
// arr2 = [2,2]
// res = intersect(arr1, arr2)
// console.log(res)

// arr1 = [4,9,5,9,4]
// arr2 = [9,4,9,8,4]
// res = intersect(arr1, arr2)
// console.log(res)

arr1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
arr2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
res = intersect(arr1, arr2)
console.log(res)
