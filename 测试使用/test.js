function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms)
        }
    })
}

function add(a, b) {
    console.log(a + b)
}
let f = delay(add, 300)
f(1, 2)