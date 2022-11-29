let name1= prompt("Write your name:")
let color= prompt("write your favorite color:")
let quote = prompt("What is your favorite quote?")


console.log(name1 + " your favorite color is " +color)
console.log(`${name1} your favorite color is ${color}`)


console.log(`Your name is: ${name1}. 
Your favorite quote is: \"${quote}"\ `)


let name2= name1.toUpperCase()
console.log(name2)
console.log("The number of characters in the string is:", name2.length)
console.log(`Does the name have the letter \"A"\? ${name2.includes("A")} `)