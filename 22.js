var generateParenthesis = function(n) {
    const PA = '()';
    const map = new Map();
    map.set(1, ['()']);
    map.set(0, []);
    function ge (n) {
        if (map.get(n)) return map.get(n);

        for (let i = 1; i <= n; i++) {
            const rss = [];
            let rsi = map.get(i);
            let rsni = map.get(n-i-1);
            for (let j = 0; j < rsi.length; j++) {
                for (let k = 0; k < rsni.length; k++) {
                    rss.push(
                        '(' + rsi[j] + ')' + rsni[k]
                    );
                }
            }
            map.set(i, rss);
        }
        return map.get(n);
    }
    return ge(n);
};

generateParenthesis(3)
