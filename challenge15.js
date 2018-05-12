/* Challenge 15
HELP! A ship is in trouble and is firing off a distress beacon, with their coordinates. You need to look at all the cells beside, above, and below the ship and decide which cell is the best one for them to go to.

Rules:

Target cell should not be dangerous.
Target cell should be adjacent to the given coordinates (beside, above or below).
Write a function called distressBeacon() that takes a coordinate in the format 'H2' and returns a different coordinate in the same format. (Example: distressBeacon('E8') should return 'F8'.)
*/

// TODO EPIC: import isDangerous function from challenge14.js
// var isDangerous = require('./challenge14.js');

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

const isDangerous = (coordinate) => {
  let column = coordinate.toLowerCase().codePointAt(0) - 97;
  let row = Number(coordinate.slice(1)) - 1;

  let cellValue = GRID[row][column];
  let cellValueAbove = row - 1 < 0 ? "" : GRID[row-1][column];
  let cellValueBelow = row + 1 > GRID.length - 1 ? "" : GRID[row+1][column];
  let cellValueLeft = column - 1 < 0 ? "" : GRID[row][column-1];
  let cellValueRight = column + 1 > GRID[row].length - 1 ? "" : GRID[row][column+1];

  let cellValuesAround = [cellValueAbove, cellValueBelow, cellValueLeft, cellValueRight];

  if (cellValue == "~" || cellValue == "^") {
    return true;
  } else {
    for (let value of cellValuesAround) {
      if (value == "~" || value == "^") {
        return true;
      }
    }
    return false;
  } 
};

const distressBeacon = (shipCoordinate) => {

  let column = shipCoordinate.slice(0,1);
  let columnCodePoint = shipCoordinate.toLowerCase().codePointAt(0);
  let columnIndex = shipCoordinate.toLowerCase().codePointAt(0) - 97;
  let row = Number(shipCoordinate.slice(1));
  let rowIndex = Number(shipCoordinate.slice(1)) - 1;

  let rowAbove = rowIndex - 1 < 0 ? "" : row-1;
  let coordinateAbove = column + rowAbove;
  // console.log("coordinate above", coordinateAbove);

  let rowBelow = rowIndex + 1 > GRID.length - 1 ? "" : row+1;
  let coordinateBelow = column + rowBelow;
  // console.log("coordinate below", coordinateBelow);

  let columnStringLeft = columnIndex - 1 < 0 ? "" : String.fromCodePoint(columnCodePoint - 1).toUpperCase();
  let coordinateLeft = columnStringLeft + row;
  // console.log("coordinate left", coordinateLeft);

  let columnStringRight = columnIndex + 1 > GRID[row].length - 1 ? "" : String.fromCodePoint(columnCodePoint + 1).toUpperCase();
  let coordinateRight = columnStringRight + row;
  // console.log("coordinate right", coordinateRight);

  let coordinatesToCheck = [coordinateLeft, coordinateRight, coordinateAbove, coordinateBelow, ];

  for (let adjacentCoordinate of coordinatesToCheck) {
    if (isDangerous(adjacentCoordinate) === false) {
      return adjacentCoordinate;
    }
  }

  return "No safe adjacent cells";
}

console.log(distressBeacon("E8"));