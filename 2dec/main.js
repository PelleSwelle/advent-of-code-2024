const fs = require('fs');

let safeReports = [];
let unsafeReports = [];

const data = fs.readFileSync('./input.txt', 'utf8');

const parseData = (data) => {
  let stringArray = data.split('\n');
  let reports = [];

  for (let i = 0; i < stringArray.length; i++) {
    let numsArray = stringArray[i].split(' ')
    if (numsArray.length > 1) {
      reports.push(numsArray)
    }
  }
  console.log(`${reports.length} parsed`)

  return reports;
}

const setDirection = (difference) => {
  let vector
  if (difference < 0) {
    vector = -1;
  } else if (difference > 0) {
    vector = 1;
  }
  return vector;
}

let initialVectorSetCount = 0

const isSafe = (report) => {
  let initialDirection = null;

  for (let i = 0; i < report.length; i++) {
    let level = report[i]
    let nextLevel = report[i + 1]
    let difference = level - nextLevel;
    let distance = Math.abs(difference)

    let vector;

    if (difference < 0) {
      vector = -1;
    } if (difference > 0) {
      vector = 1;
    } else return false;

    if (i == report.length - 1) {
      console.log('found a safe report')
      return true;
    }

    if (initialDirection == null) {
      initialVectorSetCount++;
      initialDirection = vector;
      continue
    }

    if (!1 <= distance <= 3) {
      return false
    }

    if (vector != initialDirection) {
      return false;
    }
  }
}

const reports = parseData(data);

for (let i = 0; i < reports.length; i++) {
  if (isSafe(reports[i])) {
    safeReports.push(reports[i])
  } else if (!isSafe(reports[i])) {
    unsafeReports.push(reports[i]);
  }
}

console.log(`set initial vector ${initialVectorSetCount}`)
console.log(`safe reports: ${safeReports.length}, unsafe reports: ${unsafeReports.length}`);
console.log('safe reports: ')
console.table(safeReports)
