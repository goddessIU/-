let url = 'https://www.zhihu.com/search?type=content&q=iu'

var keyWords = url.split('?')[1].split('&')
let obj = {}
for (let i = 0; i < keyWords.length; i++) {
    if (keyWords[i].includes('=')) {
        let [key, val] = keyWords[i].split('=')
        obj[key] = val
    }
}

console.log(obj)