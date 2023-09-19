const firstNumber = 5
const secondNumber = 10

let result = null


if (firstNumber == secondNumber) {
    result = firstNumber + secondNumber
    console.log(result)
} else {
    result = secondNumber - firstNumber
    console.log(result)
}



const Alex = 'admin'
if (Alex === 'user') {
    console.log('Alex is user')
} else if(Alex === 'vip') {
    console.log('Alex is vip user')
} else{
    console.log('Alex is admin')
}

Alex === 'admin' ? console.log('Alex is admin') : console.log('Alex is not admin')

// ===========================================ДЗ======================

const age = 20
if(age >= 18) {
    console.log('вы совершеннолетний')
} else{
    console.log('вым еще нет 18')
}

age >= 18 ? console.log('вы совершеннолетний') : console.log('вам еще нет 18')