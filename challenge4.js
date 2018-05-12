/* Challenge 4
In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid. Rocks are indicated with the ^ symbol on the grid.

Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a false boolean value depending on whether there is a rock in that cell or not. (Example: isRock('D1'); would return true)
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

const isRock = (coordinate) => {
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

  if (cellValue === "^") {
    return "Cell " + coordinate + " is a rock ";
  } else {
    return "It is not a rock";
  }

};

console.log(isRock('b8'));


