var counter = (function() {
    var i = 0
    return {
        get: function() {
            return i
        },
        set: function(val) {
            i = val
        },
        increment: function() {
            return ++i
        }
    }
}())

console.log(counter.get())
counter.set(3)
counter.increment()
counter.increment()
console.log(counter.get())
console.log(counter.i)