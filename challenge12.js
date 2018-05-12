/* Challenge 12
Here is an opportunity to prove how powerful your lighthouse-powering skills are! Look at the code for Challenge #10, and write a function called firstRock() which will return the coordinates of the first rock in your grid.
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

const allRocks = () => {
  let cellsWithRocks = [];

  GRID.forEach((row, rowNumber) => {
    row.forEach((cellValue, columnNumber) => {
      let cell = '';
      if (cellValue === '^') {
        // variable column is the letter representation of the columnNumber
        let column = String.fromCodePoint(columnNumber + 97).toUpperCase();
        cell = cell + column + (rowNumber+1);
        // console.log(cell);
        cellsWithRocks.push(cell);
      }
    })
  })
  return cellsWithRocks;
};

const firstRock = () => {
  let coordinatesOfAllRocks = allRocks();
  let firstRockCoordinate = coordinatesOfAllRocks[0];

  return firstRockCoordinate;
}

console.log(firstRock());