const arr = [[1, 4], [7, 9], [3, 6]]
function mergeArr(arr) {
    arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        } else {
            return a[0] - b[0]
        }
    })

    const res = []
    let start = arr[0][0],
        end = arr[0][1]
    
    for (let i = 1; i < arr.length; i++) {
        const [a, b] = arr[i]
        if (a > end) {
            res.push([start, end])
            start = a
            end = b
        } else if (a <= end && b > end) {
            end = b
        } else if (b < end) {
            continue
        }
    }
    res.push([start, end])

    console.log(res)
}

mergeArr(arr)