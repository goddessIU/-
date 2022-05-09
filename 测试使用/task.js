function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200 || xhr.status === 304) {
                resolve(xhr.responseText)
            } else {
                reject(new Error(xhr.responseText))
            }
        }
        xhr.send()
    })
}

const urls = ['1', '2', '3']
const promiseArr = urls.map((url) => {
    return makeRequest(url)
})

Promise.race(promiseArr).then(res => {
    console.log(res)
})