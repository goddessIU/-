function mergeSortedArr(arr1: number[], arr2: number[]): number[] {
    let i = arr1.length - 1
    arr1.length += arr2.length
    let j = arr2.length - 1
    let len:number = arr1.length - 1

    while (i >= 0 && j >= 0) {
        if (arr1[i] >= arr2[j]) {
            arr1[len] = arr1[i]
            i--
            len--
        } else {
            arr1[len] = arr2[j]
            j--
            len--
        }
    }

    while (i >= 0) {
        arr1[len] = arr1[i]
        i--
        len--
    }

    while (j >= 0) {
        arr1[len] = arr2[j]
        j--
        len--
    }

    return arr1
}

console.log(mergeSortedArr([2, 5, 7], [3,4,8]))