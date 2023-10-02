// const element = document.querySelector('.block')

// element.textContent ='text'
// element.id = '123'
// element.style.color = 'red'
// element.style.fontSize = '30px'


// console.log(element.textContent)

const elements = document.querySelectorAll('div')
console.log(elements[1])

elements.forEach((element) =>{
    console.log(element)
    element.style.color = 'blue'
})