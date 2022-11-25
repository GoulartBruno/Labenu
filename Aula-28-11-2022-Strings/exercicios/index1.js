const whatname= prompt("What's your name?")
const email= prompt("What's your email?")
//it asking two normal sentences

console.log(`The email ${email} has been successfully registered, Welcome ${whatname}`)
//it's printing only the sentence

console.log(`The number of characters in the name is::`, whatname.length)


whatname1= whatname.replaceAll("r","X")
//the letter "R" was replaced by "x", by using the .replace.All method

console.log(whatname1)

console.log(`${email} has @? `, email.includes("@"))
//it checked if has de character @