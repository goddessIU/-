const ps = document.querySelectorAll('p')
for (let i = 0; i< ps.length; i++) {
    // ps[i].addEventListener('copy', e => {
    //     // e.stopImmediatePropagation()
    //     e.stopPropagation()
    // })
    ps[i].oncopy = null
}
