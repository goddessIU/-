class EventEmitter {
    constructor() {
        this.cache = {}
    }
    on(name, fn) {
        if (!this.cache[name]) {
            this.cache[name] = []
        }
        this.cache[name].push(fn)
    }
    off(name, fn) {
        let tasks = this.cache[name]
        if (tasks) {
            const index = tasks.findIndex(f => f === fn || f.callback === fn)
            if (index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }
    emit(name, once = false, ...args) {
        let arrs = this.cache[name].slice()
        arrs.forEach(f => {
            f(...args)
        })
        if (once) {
            delete this.cache[name]
        }
    }
}

let eventBus = new EventEmitter()
let fn1 = function(name, age) {
	console.log(`${name} ${age}`)
}
let fn2 = function(name, age) {
	console.log(`hello, ${name} ${age}`)
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, '布兰', 12)

