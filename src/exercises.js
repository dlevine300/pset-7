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
