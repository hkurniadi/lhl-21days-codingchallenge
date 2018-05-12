/* Challenge 14 
A cell is considered dangerous if there is a rock or a strong current in it, OR in the cells immediately above, below, left, or right of it. Write a function called isDangerous() that will take a cell in the format 'G7' and return a true or a false value. (Example: isDangerous('E4') would return true, because there is a rock there. Similarly, isDangerous('C9') would return true, because there are rocks and currents AROUND the cell. However, isDangerous('I6') would return false because it is open water.) 
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

console.log(isDangerous("i6"));