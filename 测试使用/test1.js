function sort(arr = []) {
    for (let i = 0; i < arr.length - 1; i++) {
        let max = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[max]) {
                max = j
            }
        }

        [arr[max], arr[i]] = [arr[i], arr[max]]
    }
    console.log(arr)
}

sort([5, 2, 3, 1])