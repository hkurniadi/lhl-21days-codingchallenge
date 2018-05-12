/* Challenge 11
Since you were so impressive with the finding of rocks, Environment Canada wants you to do the same thing for strong currents. Again, they're going to use your function, so you have to write code that goes through the grid and finds the cells with strong currents.

Write a function called allCurrents() which, when called, will return an array of the coordinates of all the strong currents in your grid. (Example: allCurrents() should return ["E2", "C8", "D8", "D9", "E9", "E10", "F10"])
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

const allCurrents = () => {
  let cellsWithCurrents = [];

  GRID.forEach((row, rowNumber) => {
    row.forEach((cellValue, columnNumber) => {
      let cell = '';
      if (cellValue === '~') {
        // variable column is the letter representation of the columnNumber
        let column = String.fromCodePoint(columnNumber + 97).toUpperCase();
        cell = cell + column + (rowNumber+1);
        console.log(cell);
        cellsWithCurrents.push(cell);
      }
    })
  })
  return cellsWithCurrents;
};

console.log(allCurrents());