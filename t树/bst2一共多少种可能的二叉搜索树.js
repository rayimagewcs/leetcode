/**
 * 
 * F(0) = 1 // null
 * F(1) = 1
 * F(2) = 2
 * F(3) = 1_F(0)*F(2) + 2_F(1)*F(1) + 3_F(2)*F(0) // 选择1作为根节点，左边有0种可能选择，右边有2种可能选择
 * .
 * .
 * .
 * F(N) = 1_F(0)*F(N-1) + 2_F(1)*F(N-2) + ... + N_F(N-1)*F(0)
 * 
 * F(4) = 1*5 + 1*2 + 2*2 + 5*1
 * 
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {

    let arr = new Array(n)
    arr[0] = 1
    arr[1] = 1

    for (let i = 2; i <= n; i++) {
        arr[i] = 0
        for (let j = 0; j < i; j++) {
            arr[i] += arr[j] * arr[i - j - 1]
        }
    }

    return arr[n]
};

a = numTrees(3)
console.log(a)
a = numTrees(4)
console.log(a)
a = numTrees(5)
console.log(a)
a = numTrees(6)
console.log(a)
