// const rejectHandler = reason => ({ status: 'rejected', reason });

// const resolveHandler = value => ({ status: 'fulfilled', value });

// Promise.allSettled1 = function(promises) {
//     const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler))
//     return Promise.all(convertedPromises)
// }

new Promise((resolve, reject) => {
    resolve(Promise.resolve(3))
}).then(res => console.log(res))