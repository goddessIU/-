function deepClone(source) {
    let obj = null
    if (Array.isArray(source)) obj = []
    else if (typeof source === 'object') obj = {}

    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object') {
                if (Array.isArray(source[key])) {
                    obj[key] = []
                    obj[key] = deepClone(source[key])
                } else {
                    obj[key] = {}
                    obj[key] = deepClone(source[key])
                }
            } else {
                obj[key] = source[key]
            }

           
        }
    }


    return obj
}

let o = {
    'aa': 1,
    'likes': [1, 2, 3],
    names: {
        'a': 1,
        'b': 2
    }
}
console.log(deepClone(o))