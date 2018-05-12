/* Challenge 5
There are also areas where the currents are too strong for boats to be effective, and boats run the risk of being smashed up against the rocks if they get caught here. Strong currents are indicated with the ~ symbol.

Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true or a false boolean value depending on whether there is a strong current in that cell or not. (Example: isCurrent('E2'); would return true)
*/

const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

const isCurrent = (coordinate) => {
// Check if the coordinate value is a string
if (typeof(coordinate) != 'string') {
return "Incorrect coordinate";
} else if(coordinate.toLowerCase().codePointAt(0) < 97 || coordinate.toLowerCase().codePointAt(0) > 122) {
// check if the first digit is a letter
return "First digit has to be a letter";
}

// codePointAt() returns integer number of code point value of the passed string
// lowercase letter 'a' is equal to 97, 'b' is 98, and so on
// in order to get element position, subtract code point value by 97 i.e. letter a is pos 0
let column = coordinate.toLowerCase().codePointAt(0) - 97;
// console.log("Column code point is", column);

// second letter of the coordinate is already a number in string type
// therefore, needs to be converted into integer and minus 1 to get the element position
let row = Number(coordinate.slice(1)) - 1;
// console.log("Type of row value", row);

let cellValue = GRID[row][column];

if (cellValue === "~") {
return "Cell " + coordinate + " is current ";
} else {
return "It is not current";
}

};

console.log(isCurrent('e2'));


