function getType(key) {
    return Object.prototype.toString.call(key).slice(8, -1).toLowerCase()
}
let map = new WeakSet()
function myStringfy(obj) {
    const type = getType(obj)
    if (typeof obj !== 'object') {
        if (type === 'undefined') return undefined
        else if (type === 'boolean') return '' + obj
        else if (type === 'number') {
            if (Number.isNaN(obj) || obj === Infinity || obj === -Infinity) return 'null'
            return '' + obj
        }
        else if (type === 'symbol') return undefined
        else if (type === 'string') return `"${obj}"`
    } else {
        if (obj === null) return 'null'
        else if (type === 'function') return undefined
        else if (type === 'date') return `"${obj.toJSON()}"`
    }
    if (map.has(obj)) throw new TypeError('Converting circular structure to JSON')
    map.add(obj)
    if (type === 'array') {
        let str = []
        for (const m of obj) {
            let t = getType(m)
            if (t === 'undefined' || t === 'function' || t === 'symbol') {
                str.push('null')
            } else if (typeof m !== 'object') {
                str.push('' + m)
            } else {
                str.push(myStringfy(m))
            }
        }
        return `[${str.join(',')}]`
    } else if (type === 'object') {
        if (obj.toJSON) return obj.toJSON()
        let res = ''
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            const type = getType(obj[keys[i]])
            if (type === 'undefined' || type === 'function' || type === 'symbol') continue
            res += `"${keys[i]}":${myStringfy(obj[keys[i]])}`
            if (i !== keys.length - 1) res += ','
        }
        return '{' + res + '}'
    }
}

let test = {
    name: "aaa",
    age: 11,
    obj1: {
        name: "c"
    },
    t: null,
    d: [1, 2, 3]
}
test.m = test
console.log(myStringfy(test))
// console.log(JSON.stringify(test))
