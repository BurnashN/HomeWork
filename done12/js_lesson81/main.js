// const numbers = [1, '2', true, [1, 2, 3], 5]
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]
// numbers[4] = 6
// console.log(numbers[4])

// const numbers = [1, 2, 3, 4, 5]
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] + 1)
// }

// =====================дз==================================


const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length;  i++ ) {
    if (i % 2 == 1)   {
    console.log(numbers[i])
    }
}

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'blue', 'purple']

for(let i = rainbow.length - 1; i >= 0; i--) {
    console.log(rainbow[i])
}
