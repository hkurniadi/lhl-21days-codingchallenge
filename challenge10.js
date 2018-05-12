/* Challenge 10
Environment Canada has called and wants a report sent to them of all the rocks in your grid, for use in their latest map.

Write a function called allRocks() which when called will return an array of the coordinates of all the rocks in your grid. (Example: allRocks() should return ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", "B10"])
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

// Answer
// cell with rocks: ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", "B10"])

const allRocks = () => {
  let cellsWithRocks = [];

  GRID.forEach((row, rowNumber) => {
    row.forEach((cellValue, columnNumber) => {
      let cell = '';
      if (cellValue === '^') {
        // variable column is the letter representation of the columnNumber
        let column = String.fromCodePoint(columnNumber + 97).toUpperCase();
        cell = cell + column + (rowNumber+1);
        console.log(cell);
        cellsWithRocks.push(cell);
      }
    })
  })
  return cellsWithRocks;
};

console.log(allRocks());