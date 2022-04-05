
function objectFactory() {
    let obj = new Object()
    const Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    let res = Constructor.apply(obj, arguments)

    return typeof res === 'object' ? res || obj : obj 
}

function person(name, age) {
    this.name = name
    this.age = age
}
let p = objectFactory(person, 'a', 1)
console.log(p)