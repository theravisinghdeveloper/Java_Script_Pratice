// let n = 4

// if (n % 2 == 1) {
//     console.log('Odd')
// }
// else {
//     console.log('Even')
// }

let isAdhar = true
let age = 19000
let giveVote = true

if (isAdhar) {
    if (age >= 18 && age <= 130) {
        if (giveVote) console.log('c false')
        else console.log('Ok')
    }
    else if (age < 0 || age > 130) console.log('invalid age')
    else console.log('b false')
}
else console.log('A false')
