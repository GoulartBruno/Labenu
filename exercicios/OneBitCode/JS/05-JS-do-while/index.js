let comando = +prompt(`Choose an option:
1- Human Resources
2- Financial
3- Engineering
4- IT
5- End call`);

while (comando !== 5) {
  if (comando > 0 && comando < 5) {
    alert(`You chose the ${comando} option`);
    comando = +prompt(`Choose other option:
    1- Human Resources
    2- Financial
    3- Engineering
    4- IT
    5- End call`);
  } else if (comando === 5) {
  } else {
    alert(`You have chosen an invalid number`);
    comando = +prompt(`Choose other option:
    1- Human Resources
    2- Financial
    3- Engineering
    4- IT
    5- End call`);
  }
}

alert("You ended the call");
