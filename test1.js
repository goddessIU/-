
async function f() {
    for (var i = 0; i < 5; i++) {
        await new Promise((res, rej) => {
            setTimeout(function() {
                console.log(new Date, i);
                res()
            }, 1000);
        })
    }

    await new Promise((res, rej) => {
        setTimeout(() => {
            console.log(new Date, i);
            res()
        }, 1000)
    })
}

f()