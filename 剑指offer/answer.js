

function judge(m, n) {
    let d = m ^ n
    let res = 0
    while (d) {
        res++
        d = (d - 1) & d
    }
    return res
}

console.log(judge(10, 13))