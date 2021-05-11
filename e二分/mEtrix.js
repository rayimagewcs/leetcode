/**
 * @link https://leetcode-cn.com/problems/search-a-2d-matrix/
 * 
 * 1、利用二分查找找到所在行
 * 2、在利用二分查找该行找到目标数
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false

    let i = 0, j = matrix.length-1, m = 0, row=-1, col = matrix[0].length-1
    // 找出第一个大于等于 target 的行 matrix[row][0]
    while (i <= j) {
        m = Math.floor((j-i)/2) + i
        if (matrix[m][0] === target) {
            return true
        }
        if (matrix[m][0] < target && matrix[m][col] >= target) {
            row = m
            break
        }
        if (matrix[m][0] > target) {
            j = m-1
        }
        else i = m+1
    }
    if (row === -1) return false

    // console.log(row)
    i = 0, j = col
    while (i <= j) {
        m = Math.floor((j-i)/2) + i
        if (matrix[row][m] === target) return true

        if (matrix[row][m] > target) {
            j = m-1
        }
        else i = m+1
    }
    return false
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 */
searchMatrix = (matrix, target) => {
    let l = 0, h = matrix.length * matrix[0].length -1
    while (l <= h) {
        const m = Math.floor((h-l)/2) + l
        const row = Math.floor(m/matrix[0].length)
        const col = m % matrix[0].length
        if (matrix[row][col] === target) {
            return true
        }
        if (matrix[row][col] > target) {
            h = m-1
        }
        else l = m+1
    }
    return false
}

a = searchMatrix([[1,3,5,7]], target = 7)
console.log(a)
a = searchMatrix([[]], target = 3)
console.log(a)
a = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3)
console.log(a)
a = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 0)
console.log(a)
a = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 61)
console.log(a)
a = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 1)
console.log(a)
a = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 60)
console.log(a)
a = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 20)
console.log(a)
