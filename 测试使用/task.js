let apple = {
    a: 1
}

let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        let current = this.from
        let last = this.to
        for (let i = current; i <= last; i++) {
            yield i;
        }
    },
    __proto__: apple
}


console.log(Object.getOwnPropertySymbols(range))