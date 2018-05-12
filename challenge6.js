/* Challenge 6
Your next job is have your lighthouse sweep a whole row of cells.

To do this, write a function named lightRow() that takes in the number of the row and returns the contents. (Example: lightRow(2); would return ["", "", "", "", "~", "", "", "", "", ""])
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

function lightRow(rowNumber) {
  let rowContent = GRID[rowNumber-1];
  return rowContent;
};

console.log(lightRow(2));