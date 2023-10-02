const button = document.querySelector('.btn')
let btnIsRed = false


button.addEventListener('click', () => {
    if(btnIsRed === true) {
        button.style.background = 'blue'
        btnIsRed = false
    } else {
        button.style.background = 'red'
        btnIsRed = true
    }
})



function scrolling() {
    console.log('scroll')
}


document.addEventListener('scroll', csrolling)