function newObject() {
    const Con = [].shift.call(arguments)
    let obj = new Object()
    Object.setPrototypeOf(obj, Con.prototype)
    let res = Con.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
}
Person.prototype = {
    b: 3
}
function Person(name) {
    this.name = name
}

let o = newObject(Person, 'a')
console.log(o.b)