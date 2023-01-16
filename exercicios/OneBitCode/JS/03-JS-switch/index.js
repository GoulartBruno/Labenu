const valueMeter = +prompt("Enter a measurement in meters");
const otherUnit = prompt(
  `What unit of measurement would you like to convert?
  a) millimeter 
  b) Centimeter 
  c) Decimeter 
  d) Dectometer 
  e) Hectometer
  f) Kilometer`
);
let millimeter = valueMeter * 1000;
let centimeter = valueMeter * 100;
let decimeter = valueMeter * 10;
let decameter = valueMeter / 10;
let hectometer = valueMeter / 100;
let kilometer = valueMeter / 1000;

switch (otherUnit) {
  case "a":
    console.log("The value in millimeter is " + millimeter);
    break;
  case "b":
    console.log("The value in centimeter is " + centimeter);
    break;
  case "c":
    console.log("The value in decimeter is " + decimeter);
    break;
  case "d":
    console.log("The value in decameter is " + decameter);
    break;
  case "e":
    console.log("The value in hectometer is " + hectometer);
    break;
  case "f":
    console.log("The value in kilometer is " + kilometer);
    break;
  default:
    alert("You entered an invalid option");
}
