Promise.myRace = function(promises) {
    return new Promise((res, rej) => {
        let len = promises.length
        let count = 0
        
        promises.forEach((p, i) => {
            Promise.resolve(p).then(res).catch(rej)
        })
    })
}