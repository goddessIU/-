## Q3
```ts
function transfromUrl(url: string): string {
    const arr = url.split('')

    let num: number = 0
    for (const m of arr) {
        if (m === ' ') {
            num++
        }
    }

    let j = arr.length - 1
    arr.length = arr.length + num * 2
    let i = arr.length - 1

    while (j >= 0) {
        if (arr[j] !== ' ') {
            arr[i--] = arr[j--]
        } else {
            j--
            arr[i--] = '0'
            arr[i--] = '2'
            arr[i--] = '%'
        }
    }

    return arr.join('')
}

console.log(transfromUrl('we are happy'))
```

## Q3相关题目
```ts
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
```

## 总结
这种题目，可以倒叙，也可能搭配双指针

## Q4
```ts
递归
function reversePrint(head: ListNode | null): number[] {
    const res: number[] = []

    const helper = (head: ListNode | null) => {
        if (head === null) {
            return
        }

        helper(head.next)

        res.push(head.val)
    }
    helper(head)

    return res
};

//或者正常做，或者用栈
```

## Q10相关题目：小矩形、大矩形
```js
菲波那切数列
```

## Q11 排序和查找
数组有序和二叉搜索树要注意
十大排序，在什么情况下如何使用

## Q14 剪绳子
动态规划算法不写了， 记录下贪心
```ts
function cuttingRope(n: number): number {
    if (n === 2) return 1
    if (n === 3) return 2

    let sum: number = 1
    while (n > 4) {
        n -= 3
        sum *= 3
    }
    sum *= n
    
    return sum
};
```

## Q15 二进制中1的个数
```js
var hammingWeight = function(n) {
    let sum = 0
    while (n) {
        if (n & 1) sum++
        n >>>= 1
    }
    return sum
};
但是遇到负数会出问题，所以优化为下面



var hammingWeight = function(n) {
    let sum = 0
    let flag = 1
    while (flag) {
        if (n & flag) sum++
        flag <<= 1
    }
    return sum
};
循环次数为整数二进制的位数，32位整数要循环32次，如下优化

var hammingWeight = function(n) {
    let sum = 0
    
    while (n) {
        sum++
        n = (n - 1) & n
    }
    return sum
};
```

相关题目：
```js
function judge(n) {
    let d = (n - 1) & n
    if (d === 0) return true
    return false
}

console.log(judge(7))
```

```js
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
```