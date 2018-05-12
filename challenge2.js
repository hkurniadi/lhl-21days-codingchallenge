/* Challenge 2
Awesome job! Other lighthouse operators are jealous of your grid, and your code skills. Just to show off, let's write a new function for the system which will count up how many cells total there are. Given the code you just wrote, this should be pretty easy.

Write a new function called totalCells() which will return the total number of cells in your grid. For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return. We want to make all the other lighthouse operators jealous.

Don’t erase your past code when you work on the new challenge! Remember that the challenges are cumulative so you shouldn’t erase any of your work once you finish a challenge. You will need functions created on prior days to complete future challenges!
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

// Solution
/* const totalCells = () => {
  let width = GRID[0].length;
  let height = GRID.length;
  let totalNumberOfCells = width * height;
  
  return totalNumberOfCells;
}; */

// Refactored version

let gridWidth = GRID[0].length;
let gridHeight = GRID.length;

const gridSize = () => {
  let size = gridWidth + " x " + gridHeight;

  return size;
};

const totalCells = () => {
  let totalNumberOfCells = gridWidth * gridHeight;
  
  return totalNumberOfCells;
};

console.log(totalCells());


