Function.prototype.bind2 = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error()
    }
    let self = this
    let temp = function() {}

    let resFunc =  function() {
        return self.apply(this instanceof temp ? this : context, args.concat(arguments))
    }
    temp.prototype = this.prototype
    resFunc.prototype = new temp()

    return resFunc
}

var foo = {
    value: 1
}

function bar(name) {
    this.name = name
    console.log(this.value)
    console.log(name)
}

var bindFoo = bar.bind2(foo, 'name')
let o = new bindFoo()
console.log(o.name)