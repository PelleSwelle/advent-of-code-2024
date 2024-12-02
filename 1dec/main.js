const fs = require('fs')

const leftNumbers = new Array();
const rightNumbers = new Array();

let totalDistance = 0;

fs.readFile('numbers.txt', (error, data) => {
  if (error) throw error;

  const numberString = data.toString();
  const twoColumns = numberString.split('\r\n')
  
  for (let i = 0 ; i < twoColumns.length; i++) {
    console.log(twoColumns[i]);
    leftNumbers.push(parseInt(twoColumns[i].slice(0, 5)))
    rightNumbers.push(parseInt(twoColumns[i].slice(8, 13)))
  }

  leftNumbers.sort();
  rightNumbers.sort();


  // console.log(sortedLeft);
  for (let i = 0 ; i < leftNumbers.length; i++) {
    totalDistance += Math.abs(leftNumbers[i] - rightNumbers[i]);
  }
  console.log(totalDistance)
})



// for (let i = 0 ; )