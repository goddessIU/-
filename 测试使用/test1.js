function deepClone(obj) {
    if (typeof obj !== 'object') return obj
    let clone = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                clone[key] = deepClone(obj[key])
            } else {
                clone[key] = obj[key]
            }
        }
    }
    return clone
}

let obj1 = {
    name: 'a',
    friend: {
        name: 'ming',
        age: 3
    }
}
let obj2 = deepClone(obj1)
obj1.friend.age = 6
console.log(obj2)