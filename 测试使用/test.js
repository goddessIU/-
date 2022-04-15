Function.prototype.myBind = function(thisArg) {
    let fn = this
    let args = [].slice.call(arguments, 1)
    function fNot() {}
    function fBound() {
        let res = fn.call(this instanceof fNot ? this : thisArg, ...args, ...arguments)
        return res
    }
    fNot.prototype = this.prototype
    return fBound
}

let obj = {
    name: 'george'
}

function hello(age, hobby) {
    this.age = age
    this.hobby = hobby
    console.log(this.name)
    console.log(age)
    console.log(hobby)
    console.log(this.friends)
}

hello.prototype = {
    friends: ['a', 'b', 'c']
}

let helloBind = hello.bind(obj, 13)
console.log(new helloBind('football'))