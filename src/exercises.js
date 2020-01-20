function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a[0] === b[0]){
    return true;
  } else if (a[a.length-1] === b[b.length-1]) {
    return true;
  } else {
    return false;
  }
};

function endsMeet(values, n) {
  let array = [];
  if (!values || values.length < n || n < 0) {
    return array;
  }
  for (i = 0; i < n; i++) {
    array.push(values[i]);
   }
   for (z = (values.length - n); z < values.length; z++) {
     array.push(values[z])
   }
   return array
 }

function difference(numbers) {
let difference = 0;
let large = 0;
let small = 0;
let counter = 0;
if (!numbers || numbers.length <= 0) {
  difference = undefined
  return difference;
}
if (numbers.some(isNaN)) {
  return undefined;
  counter = 1
}
if (counter != 1) {
  let y = Number.MIN_SAFE_INTEGER
  for (z = 0; z < numbers.length; z++) {
    if (numbers[z] > y) {
      y = numbers[z];
      large = numbers[z];
    }
  }
  if (counter != 1) {
    let v = Number.MAX_SAFE_INTEGER
    for (x = 0; x < numbers.length; x++) {
      if (numbers[x] < v) {
        v = numbers[x];
        small = numbers[x];
      }
    }
    difference = large - small;
    return difference;
  }
}
}
function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
