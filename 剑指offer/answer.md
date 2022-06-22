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

## Q16
```java
// 递归解法
class Solution {
    
    public double myPow(double x, int n) {
        if (x == 0.0) {
            return 0.0;
        }
        long N = n;
        double res = N >= 0 ? getRes(x, N) : 1.0 /getRes(x, -N);
        // if (judge) {
        //     res = 1.0 / res;
        // }
        return res;
    }
    public double getRes(double x, long n) {
        if (n == 0) return 1;
        if (n == 1) return x;
        double res = getRes(x, n / 2);
        res = res * res;
        if (n % 2 == 1) {
            res = res * x;
        }
        return res;
    }
}


// 递推解法
class Solution {
    
    public double myPow(double x, int n) {
        if (x == 0.0) {
            return 0.0;
        }
        long N = n;
        double res = N >= 0 ? getRes(x, N) : 1.0 /getRes(x, -N);
        // if (judge) {
        //     res = 1.0 / res;
        // }
        return res;
    }
    public double getRes(double x, long n) {
        if (n == 0) return 1;
        if (n == 1) return x;
        double ans = 1;
        while (n > 0) {
            if (n % 2 == 1) ans *= x;
            x *= x;
            n /= 2;
        }
        return ans;
    }
}
```


## Q17
```ts
function Print1ToMax(n) {
    var res = [];
    var temp = new Array(n);
    temp.fill('0');
    if (n <= 0)
        return;
    while (!Increment(temp)) {
        PrintNumber(temp);
    }
}
function Increment(array) {
    var isOverFlow = false;
    var takeOverFlow = 0;
    var len = array.length - 1;
    for (var i = len; i >= 0; i--) {
        var tSum = array[i].charCodeAt(0) - '0'.charCodeAt(0) + takeOverFlow;
        if (i === len)
            tSum++;
        if (tSum >= 10) {
            if (i === 0) {
                isOverFlow = true;
                break;
            }
            else {
                tSum -= 10;
                takeOverFlow = 1;
                array[i] = String.fromCharCode('0'.charCodeAt(0) + tSum);
            }
        }
        else {
            array[i] = String.fromCharCode('0'.charCodeAt(0) + tSum);
            break;
        }
    }
    return isOverFlow;
}
function PrintNumber(array) {
    var isZero = false;
    var tem = [];
    for (var i = 0; i < array.length; i++) {
        if (!isZero && array[i] !== '0') {
            isZero = true;
        }
        if (isZero) {
            tem.push(array[i]);
        }
    }
    console.log(tem);
}
Print1ToMax(2);


递归解法
function Print1ToMax(n) {
    var res = [];
    var temp = new Array(n);
    temp.fill('0');
    if (n <= 0)
        return;
    for (var i = 1; i < 10; i++) {
        temp[0] = String.fromCharCode(i + '0'.charCodeAt(0));
        dfs(temp, n, 0);
    }
}
function dfs(array, len, index) {
    if (index === len - 1) {
        PrintNumber(array);
        return;
    }
    for (var i = 1; i < 10; i++) {
        array[index + 1] = String.fromCharCode(i + '0'.charCodeAt(0));
        dfs(array, len, index + 1);
    }
}
function PrintNumber(array) {
    var isZero = false;
    var tem = [];
    for (var i = 0; i < array.length; i++) {
        if (!isZero && array[i] !== '0') {
            isZero = true;
        }
        if (isZero) {
            tem.push(array[i]);
        }
    }
    console.log(tem);
}
Print1ToMax(2);

```


## Q19
```ts
自己写的递归
function isMatch(s: string, p: string): boolean {
    return judge(s, p, s.length - 1, p.length - 1)
};

function judge(s: string, p: string, tS:number, tP: number): boolean {
    while (tP >= 0 && tS >= 0) {
        if (p[tP] === '.') {
            tP--
            tS--
        } else if (p[tP] === '*') {
            const d = p[tP - 1]
            if (d === '.') {
                while (tS >= 0) {
                    if (judge(s, p, tS, tP - 2)) {
                        return true
                    }
                    tS--
                }
                tP -= 2
            } else {
                if (s[tS] !== d) {
                    tP -= 2
                    continue
                } 
                while (s[tS] === d) {
                    if (judge(s, p, tS, tP - 2)) {
                        return true
                    }
                    tS--
                }
                tP -= 2
            }
        } else {
            if (p[tP] !== s[tS]) {
                return false
            } 
            tP--
            tS--
        }
    }
    if (tS >= 0) return false
    while (tP >= 0) {
        if (p[tP] !== '*') return false
        else {
            tP -= 2
        }
    }
    return true
}

动态规划
function isMatch(s: string, p: string): boolean {
    let dp: boolean[][] = new Array(s.length + 1).fill(0).map(() => new Array(p.length +1).fill(false))
    dp[0][0] = true
    for (let i = 0; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                if (matches(s, p, i, j - 1)) {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i][j - 2]
                }
            } else {
                if (matches(s, p, i, j)) {
                    dp[i][j] = dp[i - 1][j  - 1]
                } else {
                    dp[i][j] = false
                }
            }
        }
    }
    console.log(dp)
    return dp[s.length][p.length]
};

function matches(s: string, p: string, i:number, j:number) {
    if (i === 0) return false
    if (p[j - 1] === '.') return true
    return s[i - 1] === p[j - 1]
}
```

## Q20
```ts
let start, end

function isNumber(s: string): boolean {
    if (s.length === 0) return false
    start = 0
    end = s.length - 1
    while (s[start] === ' ') start++
    while (s[end] === ' ') end--

    let numeric: boolean = scanInteger(s)
    if (s[start] === '.') {
        ++start
        numeric = scanUnsignedInteger(s) || numeric
    }   
    if (s[start] === 'e' || s[start] === 'E') {
        ++start
        numeric = scanInteger(s) && numeric
    }
    return numeric && start > end
};

function scanInteger(s: string): boolean {
    if (s[start] === '+' || s[start] === '-') start++
    return scanUnsignedInteger(s)
}

function scanUnsignedInteger(s: string): boolean {
    let before = start
    while (s[start] >= '0' && s[start] <= '9' && start <= end) start++
    return start > before
}
```