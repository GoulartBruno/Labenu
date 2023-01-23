const nome = prompt("Type your name.");
let visit = prompt(`Did you visit any city in Europe? 
Type "y" for yes and "n" for no.`);
let result = "";

while (visit === "y") {
  let city = prompt("What city did you visit?");
  result = city + ", " + result;
  visit = prompt(`Did you visit any other city in Europe? 
  Type "y" for yes and "n" for no.`);
}

console.log(result);
