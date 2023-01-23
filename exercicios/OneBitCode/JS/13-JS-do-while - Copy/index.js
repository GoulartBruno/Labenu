// let money = +prompt("How much money do you have?");
// let soma = money;
// let question = +prompt(`You have $${money}
// Would you like to add or remove money?
// Type:
// 1- Add
// 2- Remove
// 3- Exit`);

// while (question !== 3) {
//   if (question == 1) {
//     money = +prompt("How much money would you like to add?");
//     soma += money;
//     question = +prompt(`You have $${soma}
// Would you like to add or remove money?
// Type:
// 1- Add
// 2- Remove
// 3- Exit`);
//   } else if (question == 2) {
//     money = +prompt("How much money would you like to remove?");
//     soma -= money;
//     question = +prompt(`You have $${soma}
//   Would you like to add or remove money?
//   Type:
//   1- Add
//   2- Remove
//   3- Exit`);
//   } else {
//     alert("You entered an invalid number, Try again");
//     question = +prompt(`You have $${soma}
//     Would you like to add or remove money?
//     Type:
//     1- Add
//     2- Remove
//     3- Exit`);
//   }
// }

let money = +prompt("How much money do you have?");
let soma = money;
let question = "";

do {
  question = prompt(`You have $${money}
   Would you like to add or remove money?
   Type:
   1- Add
   2- Remove
   3- Exit`);

  switch (question) {
    case "1":
      money = +prompt("How much money would you like to add?");
      soma += money;
      alert(`You have $${soma}`);
      break;
    case "2":
      money = +prompt("How much money would you like to remove?");
      soma -= money;
      alert(`You have $${soma}`);
      break;
    case "3":
      alert("Finishing");
      break;
    default:
      alert("You entered an invalid number, try again.");
  }
} while (question !== "3");
