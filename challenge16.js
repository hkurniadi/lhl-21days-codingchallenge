/* Challenge 16
The only constant is change around here! The diving society has sunk a wreck in your grid to give divers a great place to scuba and swim around. Add a rock to your grid in cell J9.
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
  ["", "^", "", "~", "~", "", "", "", "", "^"],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

const gridSize = () => {
  let width = GRID[0].length;
  let height = GRID.length;
  let size = width + " x " + height;

  return size;
};

const totalCells = () => {
  let totalNumberOfCells = gridWidth * gridHeight;
  
  return totalNumberOfCells;
};

const lightCell = (coordinate) => {
  /* 
  ~ ideally would have to first ensure that parameter value, coordinate, is only 2 digits string and always starts with a letter

  1. slice/get the string coordinate into two variables
  2. first letter is a string to be converted into an integer, represents the column i.e. element of a row
  3. second letter is an integer, represents the row i.e. element of GRID array
  4. return the value in the element from step 3
  */

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

  return cellValue;
};

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
    return true;
  } else {
    return false;
  }
};

const isCurrent = (coordinate) => {
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

  if (cellValue === "~") {
    return true;
  } else {
    return false;
  }
};

function lightRow(rowNumber) {
  let rowContent = GRID[rowNumber-1];
  return rowContent;
};

function lightColumn(column) {
  let columnContent = [];
  // code point value of a lowercase 'a' is equal to 97
  let columnNumber = column.toLowerCase().codePointAt(0) - 97;

  GRID.forEach((row) => {
    let columnValue = row[columnNumber];
    columnContent.push(columnValue);
  });
  
  console.log(columnContent);
  return columnContent;
};

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

const isSafe = (coordinate) => {
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

  if (cellValue == "") {
    return true;
  } else {
    return false;
  }
};

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
};

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
};

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
};

const addRock = (coordinate) => {
  let columnIndex = coordinate.toLowerCase().codePointAt(0) - 97;
  let rowIndex = Number(coordinate.slice(1)) - 1;

  GRID[rowIndex][columnIndex] = ROCK;
};

addRock("J9");