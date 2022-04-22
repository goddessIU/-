let o = Object.create(null)
console.log(Object.getPrototypeOf(o))

let d = new Object()
Object.setPrototypeOf(d, null)
console.log(Object.getPrototypeOf(d))