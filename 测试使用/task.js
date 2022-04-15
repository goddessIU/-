let obj = {
    length: 2,
    0: '1',
    1: '2'
}
let h = [].concat(Object.getPrototypeOf([]).slice.call(obj))
console.log(h)