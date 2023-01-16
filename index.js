/* /* // Iteration 1: Names and Input
 */
const hacker1 = "Maria C"
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = "André L"
console.log(`The navegator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navegator has the longest name, it has ${hacker2.length} characters.`)}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters. `)
}



// Iteration 3: Loops
//3.1

const newHacker1 = hacker1.toUpperCase()
let string = ""
for (let i=0; newHacker1.length> i; i++){
string += (newHacker1[i] + " ")
}

let newString = string.slice(0,string.length-1)
console.log(newString)

//3.2

let newString2 = ""
for( let i = hacker2.length-1; i>=0; i--){
    
    newString2 += hacker2[i]
}

console.log(newString2)

//3.3

let stringA= "The driver's name goes first."
let stringB= "Yo, the navigator goes first definitely."
let stringC= "What?! You both have the same name?"

if (hacker1.localeCompare(hacker2) === -1){
    console.log(stringA)
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log(stringB)
} else if (hacker1.localeCompare(hacker2) === 0){
    console.log(stringC)
}

