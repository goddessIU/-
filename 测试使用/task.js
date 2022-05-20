function flat(arr, depth) {
    if (depth <= 0) return arr
    let res = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res =  res.concat(flat(item, depth - 1))
        } else {
            res.push(item)
        }
    })
    return res
}

const arr = [[1], [2, 3], [4, 6], [7, [8, 9]]]
console.log(flat(arr, 8))