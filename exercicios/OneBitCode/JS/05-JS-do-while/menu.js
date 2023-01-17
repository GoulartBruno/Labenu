// let comando = +prompt(`Choose an option:
// 1- Human Resources
// 2- Financial
// 3- Engineering
// 4- IT
// 5- End call`);

// while (comando !== 5) {
//   if (comando > 0 && comando < 5) {
//     alert(`You chose the ${comando} option`);
//     comando = +prompt(`Choose other option:
//     1- Human Resources
//     2- Financial
//     3- Engineering
//     4- IT
//     5- End call`);
//   } else if (comando === 5) {
//   } else {
//     alert(`You have chosen an invalid number`);
//     comando = +prompt(`Choose other option:
//     1- Human Resources
//     2- Financial
//     3- Engineering
//     4- IT
//     5- End call`);
//   }
// }

// alert("You ended the call");
let comando = "5";

do {
  comando = prompt(`Choose an option:
  1- Human Resources
  2- Financial
  3- Engineering
  4- IT
  5- End call`);

  switch (comando) {
    case "1":
      alert("You choose the option 1. ");
      break;
    case "2":
      alert("You choose the option 2. ");
      break;
    case "3":
      alert("You choose the option 3. ");
      break;
    case "4":
      alert("You choose the option 4. ");
      break;
    case "5":
      alert("You choose the option 5. ");
      alert("Finishing ");
      break;
    default:
      alert("You have chosen an invalid number");
  }
} while (comando !== "5");
