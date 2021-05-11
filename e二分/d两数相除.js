/**
 * @link https://leetcode-cn.com/problems/divide-two-integers/
 * 
 * 1、使用加法；
 * 2、加法步长为 2^N 次方
 * 
 * 边界问题： [-2^31, 2^31 - 1]
 * 
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
    console.log(a, b)
    if (b === 1) return a
    if (b === -1) {
        if (a === Math.pow(-2, 31)) {
            return Math.pow(2, 31) - 1
        }
    }
    if (a === 0 || b === 0) return 0

    let flag = -1 // 1 确定结果正负
    if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
        flag = 1
    }
    if (a < 0) a = 0-a
    if (b < 0) b = 0-b

    function get (a, b, rslt) {
        if (b > a) return rslt
        if (b === a) return rslt+1
        let arr = new Array(32) // 最大为 2^32
        let sum = 0, i = 0
        arr[0] = b
        // 一直加到第一个大于a的数，
        for (i = 0; i < arr.length; i++) {
            if ((sum + arr[i]) <= a && (sum + arr[i]) > 0 && (sum + arr[i]) < (Math.pow(2, 31)-1)) {
                sum += arr[i]
                arr[i+1] = arr[i] + arr[i]
                rslt += 1 << i
            }
            else {
                break // 已找到边界，或者整型溢出
            }
        }
        return get (a - sum, b, rslt)
    }

    let res = get(a, b, 0)
    return res * flag
};

// a = divide(1, 3)
// console.log('0\t', a)
// a = divide(3, 1)
// console.log('3\t', a)
// a = divide(35, 5)
// console.log('7\t', a)
// a = divide(-36, 5)
// console.log('-7\t', a)
// a = divide(0, 3)
// console.log('0\t', a)
// a = divide(36, -5)
// console.log('-7\t', a)
a = divide(Math.pow(2, 31) - 1, 2)
console.log('-7\t', a)
a = divide(-Math.pow(2, 31), -2)
console.log('-7\t', a)

a = divide(-Math.pow(2, 31), -1)
console.log('-7\t', a)
