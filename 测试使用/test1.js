let t = {}
let d = new Proxy(t, {})
console.log(d == t)