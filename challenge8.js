/* Challenge 8
The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the lightCell() method so that if an invalid cell is passed in, it returns false. (Example: lightCell('Z3'); would return false as would lightCell('A11');)
*/

/* 
Each element in the GRID array represents a row in the grid
Each element in the row represents a column
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

const lightCell = (coordinate) => {
  const maxNumOfColumns = GRID[0].length;
  console.log("number of columns", maxNumOfColumns);
  const maxNumOfRows = GRID.length;
  console.log("number of rows", maxNumOfRows);

  // Check if the coordinate exists
  // codePointAt() returns integer number of code point value of the passed string
  // lowercase letter 'a' is equal to 97, 'b' is 98, and so on
  // in order to get element position, subtract code point value by 97 i.e. letter a is pos 0
  let column = coordinate.toLowerCase().codePointAt(0) - 97;
  // console.log("Column code point is", column);
  
  // second letter of the coordinate is already a number in string type
  // therefore, needs to be converted into integer and minus 1 to get the element position
  let row = Number(coordinate.slice(1)) - 1;
  // console.log("Type of row value", row);
  
  if (column >= maxNumOfColumns || row >= maxNumOfRows) {
    return false;
  } else {
    return true;
  }

};

console.log(lightCell("z10"));