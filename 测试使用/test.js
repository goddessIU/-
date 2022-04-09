Promise.allSettled2 = function(arrs) {
    let res = []
    let count = 0
    return new Promise((resolve, reject) => {
        arrs.forEach((p, i) => {
            Promise.resolve(p).then(val => {
                res[i] = {
                    status: 'fulfilled',
                    value: val
                }
                count++
                if (count === arrs.length) {
                    resolve(res)
                }
            }, rea => {
                res[i] = {
                    status: 'rejected',
                    reason: rea
                }
                count++
                if (count === arrs.length) {
                    resolve(res)
                }
            })
        })
    })
}
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.allSettled2([promise1, promise2, promise3]).then(console.log)