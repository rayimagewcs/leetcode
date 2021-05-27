/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const boardstatus = []
    for (let i = 0; i < n; i++) {
        boardstatus.push(new Array(n).fill(0))
    }

    /**
     * @param {*} fillType 1 选择  0 取消选择
     */
    function select (r, c, fillType) {
        for (let i = 0; i < n; i++)
            boardstatus[r][i] = fillType // fill row
        for (let i = 0; i < n; i++)
            boardstatus[i][c] = fillType // fill column
        let i = r+1, j = c+1
        while (i < n && j < n) {
            boardstatus[i][j] = fillType
            i++
            j++
        }
        i = r-1, j = c-1
        while (i >= 0 && j >= 0) {
            boardstatus[i][j] = fillType
            i--
            j--
        }
    }

    const res = []
    /**
     * @param {string[]} paths 
     * @returns 
     */
    function backtrace (r, c, paths) {
        if (paths.length === n) {
            const path = paths.slice()
            const result = path.map(arr => arr.join(''))
            res.push(result)
            return
        }
        select(r, c, 1)
        const path = new Array(n).fill('.')
        path[c] = 'Q'
        paths.push(path)
        for (let i = r; i < n; i++) {
            for (let j = 0; j < n; j++) {        
                if (boardstatus[i][j] === 0) {
                    // select(i, j, 1)
                    // const path = new Array(n).fill('.')
                    // path[j] = 'Q'
                    // paths.push(path)
                    backtrace(i, j, paths)
                    select(r, c, 0)
                    paths.pop()
                }
            }
        }

    }

    // for (let i = 0; i < n; i++) {
    //     select(i, 0, 1)
        backtrace(0, 1, [])
    //     select(i, 0, 0)
    // }

    printMetrix(res)

    return res
};

solveNQueens(4)

function printMetrix (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
