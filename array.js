// const numbers = [4, 2, 1];

// function myFunc(number, index){
//     console.log(`index is ${number} * 2 == ${number*2}`)
// }

// for(let i=0; i<numbers.length; i++){
//     myFunc(numbers[i], i)
// }

const users = [
    { name : "Rishabh", age : 22},
    { name : "Tony", age : 49},
    { name : "John", age :56},
]

users.forEach((user, index)=>{
    console.log(user.name, index);
})