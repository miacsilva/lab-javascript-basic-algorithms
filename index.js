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

// Bonus Time! 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tincidunt urna, at volutpat purus. Suspendisse quis lacinia justo, nec iaculis ante. Cras consectetur purus volutpat dolor consectetur porta. Praesent egestas tortor a ligula volutpat, et scelerisque diam pulvinar. Nam eget lacinia purus, a maximus dolor. Ut maximus nisl at porttitor accumsan. Donec at magna lorem. Aliquam erat volutpat. Aliquam nec mi nisi. Sed laoreet justo id purus auctor mollis. Nulla a sodales augue. Aenean fermentum porta libero, ornare tempus ante dapibus ut. Vestibulum rhoncus fringilla eros, quis venenatis nunc porta in. Proin ultricies vitae massa non pellentesque. Curabitur congue purus vel nibh vestibulum condimentum. In vel quam id purus tempus pellentesque vitae sed nibh. Nulla consequat nulla sit amet cursus consequat. Etiam facilisis euismod purus consequat efficitur. Mauris ornare neque ac dui porttitor dignissim ut id nisi. Vestibulum vitae sapien ut lacus vestibulum fringilla sed in arcu. Aliquam est ligula, scelerisque et elit ac, eleifend consectetur ex. Vestibulum vestibulum tellus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin non tortor id malesuada. Nam ac egestas enim, et malesuada dolor. Morbi volutpat magna non mauris auctor vulputate. Aliquam iaculis elit ut tincidunt mollis."

console.log(longText.length)

let count = 0
for(let i= 0; i<=longText.length; i++){
    const twoChart = longText[i] + longText[i+1]
    if (twoChart === "et"){
        count++
    }
}

console.log(count)



//Bonus Time! 2

let phraseToCheck = "step on no pets"


let reversedPhrase = ""
for( let i = phraseToCheck.length-1; i>=0; i--){
    
    reversedPhrase += phraseToCheck[i]
}

if(phraseToCheck === reversedPhrase){
    console.log(`${phraseToCheck} is a Palindrome!`)
}else {
    console.log(`${phraseToCheck} is not a Palindrome!`)  
    }


    