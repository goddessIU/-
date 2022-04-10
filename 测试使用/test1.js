Promise.resolve2 = function(p) {
    if (p instanceof Promise) return p
    return Promise.resolve(p)
}
Promise.resolve2(2).then(val => console.log(val))

// let p1 = new Promise((res, rej) => {
//     setTimeout(res(1), 3000)
// })
// let p2 = 2
// let p3 = Promise.resolve(3)
// let p4 = new Promise((res, rej) => {
//     rej(4)
// })
// let p5 = new Promise(() => {

// })
// Promise.all2([p1, p2, p3,p4,  p5]).then(val => {
//     console.log(val)
// }, err => {
//     console.log(err)
// })