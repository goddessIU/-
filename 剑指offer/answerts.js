function countingSort(arr) {
    const res = []
    
    let minValue = arr[0],
        maxValue = arr[0]
    for (const m of arr) {
        minValue = Math.min(minValue, m)
        maxValue = Math.max(maxValue, m)
    }

    const tempArr = new Array(maxValue - minValue + 1).fill(0)
    for (const m of arr) {
        tempArr[m - minValue]++
    }

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] > 0) {
            const d = i + minValue
            while (tempArr[i] > 0) {
                res.push(d)
                tempArr[i]--
            }
        }
    }

    return res
}

console.log(countingSort([1,3, 9, 2, 7, 12]))