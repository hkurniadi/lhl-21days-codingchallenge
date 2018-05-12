/* Challenge 3
Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")

Don’t erase your past code when you work on the new challenge! Remember that the challenges are cumulative so you shouldn’t erase any of your work once you finish a challenge. You will need functions created on prior days to complete future challenges!
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

  return "Cell Value of " + coordinate + " is " + cellValue;
};

console.log(lightCell("h8"));