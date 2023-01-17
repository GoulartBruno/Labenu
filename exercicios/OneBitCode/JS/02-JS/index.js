const vehicle01 = prompt("Type the vehicle name.");
const speed01 = prompt("Type your speed.");
const vehicle02 = prompt("Type the vehicle name.");
const speed02 = prompt("Type your speed.");

if (speed01 > speed02) {
  alert(vehicle01 + " is quicker than " + vehicle02);
} else if (speed01 === speed02) {
  alert("they have the same speed");
} else {
  alert(vehicle02 + " is quicker than " + vehicle01);
}

const name01 = prompt("Type the name of the Pokemon.");
let attack = +prompt("How much is your attack power?");

const name02 = prompt("Type the name of the second Pokemon.");
let life = +prompt("How much is your life?");
let defense = +prompt("How much is your defense?");
const shield = confirm("He has a shield?");

if (attack > defense && shield === false) {
  console.log("The damage done was " + (attack - defense));
} else if (attack > defense && shield === true) {
  console.log("The damage done was " + (attack - defense) / 2);
} else if (attack <= defense) {
  console.log("The damage done was zero ");
}
