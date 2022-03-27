function reactive(obj) {
    if (typeof obj !== 'object' || obj === null) return;

    const observed = new Proxy(obj, {
        get(target, key, receiver) {
            const res = Reflect.get(...arguments)
            return typeof res === 'object' ? observed(res) : res
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(...arguments)
            return res
        },
        deleteProperty(target, key) {
            const res = Reflect.deleteProperty(...arguments)
            return res
        } 
    })

    return observed
}