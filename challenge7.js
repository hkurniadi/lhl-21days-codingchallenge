/* Challenge 7
Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.

Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: lightColumn('C'); would return ["", "", "", "", "", "", "", "~", "", ""])
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

console.log(lightColumn('C'));