function judgeType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

function isObject(obj) {
    return (typeof obj === 'function' || typeof obj === 'object') && obj !== null
}

function deepClone(obj, set = new WeakSet()) {
    if (!isObject(obj)) {
        return obj
    }
    if (set.has(obj)) {
        return obj
    }
    set.add(obj)

    let source = null
    let type = undefined
    if (Array.isArray(obj)) type = 'array'
    else type = judgeType(obj)

    if (type === 'array') {
        source = []
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                source[key] = deepClone(obj[key], set)
            }
        }
    } else if (type === 'date') {
        console.log(obj)
        
        return new Date(obj)
    } else {
        source = Object.create(null)
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                source[key] = deepClone(obj[key], set)
            }
        }
    }


    return obj
}

let target = {
    a: 1,
    b: [2, 3],
    c: {
        d: 4
    },
    e: new Date(0)
}

target.f = target
console.log(target.e)
console.log(deepClone(target))