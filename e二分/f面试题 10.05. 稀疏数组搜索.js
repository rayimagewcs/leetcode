/**
 * 
 * @link https://leetcode-cn.com/problems/sparse-array-search-lcci/
 * 思路：
 *  1、二分法；
 *  2、由于存在空字符因此没办法确定空字符和目标字符所在位置的比较
 *      s = 0, e = words.length, m = Math.floor((e - s)/2)+s
 *  3、遇到空字符先往后找，直到遇到第一个非空字符，所在位置为 p ， 然后和 targ 进行比较
 *      1、比 targ 小，[m, e] 区间，再对 p 到 e 位置进行二分查找，直到 words[m] = targ 或者 s > e时返回 -1
 *      2、比 targ 大，[s, m] 区间，。。。
 *      3、=targ，则返回m
 * 
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, t) {
    let s = 0, e = words.length

    while (s <= e) {
        m = Math.floor((e-s)/2) + s
        if (words[m] === t) {
            return m
        }
        if (words[m] === '') {
            let p = m+1
            while (p <= e) { // r
                if (words[p] === '') p++
                else break
            }
            if (p>(words.length-1)) {
                return -1
            }
            // m = i
            if (words[p] < t) {
                // [p, e]
                s = p+1
                continue
            }
            else if (words[p] === t) {
                return p
            }
            else {
                // [s, m]
                p = m-1
                while (s<=p) { // l
                    if (words[p] === '') p--
                    else break
                }
                if (p < 0) {
                    return -1
                }
                if (words[p] === t) return p
                // [s, p]
                e = p-1
                continue
            }
        }
        if (words[m] < t) {
            s = m+1 // [m+1, e]
        }
        else {
            e = m-1 // [s, m-1]
        }
    }
    return -1
};

findString = function(words, t) {
    let s = 0, e = words.length-1
    function find (s, e) {
        let m = 0
        while (s <= e) {
            m = Math.floor((e-s)/2 + s)
            if (words[m] === t) return m
            if (words[m] === '') {
                let l = m-1, r=m+1
                while (l>=s && r<=e) {
                    if (words[l] !== '') break
                    if (words[r] !== '') break
                    l--
                    r++
                }
                // if (l < s) return find(r, e)
                // if (r > e) return find(s, l)
    
                let fl = find(s, l)
                let fr = find(r, e)
                if (fl !== -1) return fl
                if (fr !== -1) return fr
                return -1
            }
            if (words[m] > t) e = m-1
            else s = m+1
        }
        return -1
    }

    return find(s, e)
};

words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
i = findString(words, s)
console.log(i, '\n')
words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
i = findString(words, s)
console.log(i, '\n')
words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", "ddd"], s = "ddd"
i = findString(words, s)
console.log(i, '\n')
words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "at"
i = findString(words, s)
console.log(i, '\n')