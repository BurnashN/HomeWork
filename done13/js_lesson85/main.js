// const array = [1, 2, 3, 4]
// array.push(5)
// console.log(array.length)

const users = [
    {
        name: 'max',
        age: 23
    },
    {
        name: 'ivan',
        age: 25
    },
    {
        name: 'robert',
        age: 12
    }
]

const userName = []


users.forEach((user)=>{
userName.push(user.name)
})
console.log(userName)




