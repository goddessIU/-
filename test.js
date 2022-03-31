let time = Date.now()
function mm() {
    setTimeout(() => {
        console.log(2)
    }, 1000)
    
    for (let i = 1; i <= 1000000000; i++) {
        
        if (i === 1000000000) {
            console.log(3)
        }
    }
}
mm()
console.log(Date.now() - time)