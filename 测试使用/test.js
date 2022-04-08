let a = "9007199254740991";
let b = "1234567899999999999";

function add(num1, num2){
    const len1 = num1.length
    const len2 = num2.length
    let i = len1 - 1,
        j = len2 - 1
    let str = '',
        up = 0
    while (i >= 0 && j >= 0) {
        const val1 = num1[i--],
              val2 = num2[j--]
        let val = Number(val1) + Number(val2) + up
        up = Math.floor(val / 10)
        str += (val % 10)
    }
    while (i >= 0) {
        let val = Number(num1[i--]) + up
        up = Math.floor(val / 10)
        str += (val % 10)
    }
    while (j >= 0) {
        let val = Number(num2[j--]) + up
        up = Math.floor(val / 10)
        str += (val % 10)
    }
    let res = ''
    for (let i = str.length -1; i >= 0; i--) res += str[i]
    return res
}
console.log(add(a, b))

console.log(9007199254740991n + 1234567899999999999n)