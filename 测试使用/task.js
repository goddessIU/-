function findDup(arr) {
    let start = 1,
        end = arr.length - 1
    while (end >= start) {
        const mid = Math.floor((start + end) / 2)
        let num = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= mid && arr[i] >= start) {
                num++
            }
        }
        if (end === start) {
            if (num > 1) {
                return mid
            } else {
                return NaN
            }
        }
        if (num > (mid - start + 1)) {
            end = mid
        } else {
            start = mid + 1
        }
    }
}

console.log(findDup([2, 3, 4, 5, 3, 2, 7, 6]))