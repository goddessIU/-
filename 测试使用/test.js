let obj1 = {
    name: 'a'
}

function f(obj1) {
    obj1 = new Object()
    obj1.name = 'c'
}
f(obj1)
console.log(obj1.name)