/* Challenge 13
That was outstanding! Now do the same thing with firstCurrent(). Don't reinvent the wheel here. Re-use existing code from Challenge #11. This is one of the most important skills you can build as a coder...er, uh, I mean lighthouse operator.
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
        // console.log(cell);
        cellsWithCurrents.push(cell);
      }
    })
  })
  return cellsWithCurrents;
};

const firstCurrent = () => {
  let coordinatesOfAllCurrents = allCurrents();
  let firstCurrentCoordinate = coordinatesOfAllCurrents[0];

  return firstCurrentCoordinate;
}

console.log(firstCurrent());