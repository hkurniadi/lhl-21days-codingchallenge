/* Challenge 9
The other lighthouse operators are impressed that you figured out how to find rocks and currents, but they also need a method to identify safe cells. A cell is safe if there is no rock or strong current in that cell.

Write a function called isSafe() which will take in a coordinate in the form of 'H2' and return a true or a false boolean. The isSafe() function should check to see if there is a rock or current or not in that cell. (Example: isSafe('D7'); would return true)
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

const isSafe = (coordinate) => {
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

  if (cellValue == "") {
    return "Cell " + coordinate + " is safe ";
  } else {
    return "It is not safe";
  }

};

console.log(isSafe('F10'));