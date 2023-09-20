// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }
// const resalt = sumNumbers(3, 10)
// console.log(resalt)
// console.log(sumNumbers(-2, 2))

const users = ['John', 'Ann', 'Alex', 'Max']
const numbers = [1, 2, 3, 4]

function checkForCopyItem (array, item) {
    for (let i = 0 ; i < array.length, i++;)  {
        if(array[i] === item) {
            return `There is a copy of the ${item} in array`
        }
    }
    return `there is no such itam in the array`
}


console.log(checkForCopyItem ( users, 'Alex'))




function checkForCopyItem = (array, item) => {
    for (let i = 0 ; i < array.length, i++;)  {
        if(array[i] === item) {
            return `There is a copy of the ${item} in array`
        }
    }
    return `there is no such itam in the array`
}


console.log(checkForCopyItem ( numbers, 2))