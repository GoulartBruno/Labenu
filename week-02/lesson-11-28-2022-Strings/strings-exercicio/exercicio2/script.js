const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


const newMyString= minhaString.trim()

console.log("The number of the characters of the string is:", minhaString.length)
console.log("The new number of the characters of the string is:", newMyString.length)

console.log(newMyString.replaceAll("________","sticioso"))