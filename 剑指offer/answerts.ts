function Print1ToMax(n: number): void {
    const res: number[] = []
    const temp: string[] = new Array(n)
    temp.fill('0')
    if (n <= 0) return ;

    for (let i = 1; i < 10; i++) {
        temp[0] = String.fromCharCode(i + '0'.charCodeAt(0))
        dfs(temp, n, 0)
    }
} 

function dfs(array: string[], len: number, index: number): void {
    if (index === len - 1) {
        PrintNumber(array)
        return
    }
    for (let i = 1; i < 10; i++) {
        array[index + 1] = String.fromCharCode(i + '0'.charCodeAt(0))
        dfs(array, len, index + 1)
    }
}

function PrintNumber(array: string[]): void {
    let isZero: Boolean = false
    let tem: string[] = []
    for (let i = 0; i < array.length; i++) {
        if (!isZero && array[i] !== '0') {
            isZero = true
        }
        if (isZero) {
            tem.push(array[i])
        }
    }
    console.log(tem)
}

Print1ToMax(2)