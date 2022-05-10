const arr = [1, 2, 3,4, 5, 2, 1]

function findIndex(arr) {
    const n = arr.length
    let left = 0,
        right = n - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (mid === 0) {
            return mid
        } else if (mid === n- 1) {
            return mid
        }

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid
        } else if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        } else if (arr[mid] < arr[mid - 1]) {
            right = mid - 1
        }
    }
    return undefined
}

console.log(findIndex(arr))