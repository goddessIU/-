function curry(fn, args) {
    var length = fn.length
    args = args || []
    return function() {
        console.log(1)
        var _args = args.slice(0)
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] === _) continue
            _args.push(arguments[i])
        }
        if (_args.length < length) {
            return curry.call(this, fn, _args)
        } else {
            return fn.apply(this, _args)
        }
    }
}
var _= ''
var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
});

fn("a", _, "c")("b") // ["a", "b", "c"]



