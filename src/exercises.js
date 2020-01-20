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
    if (!number || number.length < 3 || number.length % 2 == 0) {
      return undefined;
    }
    if (number.some(isNaN)) {
      return undefined;
    }
    let first = number[0]
    let last = number[number.length-1]
    let middle = number[((number.length/2)-1) + 0.5]
    if ((first > last) && (first > middle)) {
      return first;
    }
    else if ((middle > last) && (middle > first)) {
      return middle;
    }
    else if ((last > first) && (last > middle)) {
      return last;
    }
    else {
      return first;
    }
  }

  function middle(values) {
  if (!values || values.length === 0) {
return [];
}

var length = values.length;

if ( length < 3 ) {
return [];
}

if( length % 2 == 0 ) {
return [];
}

var middle = parseInt( length / 2 ) ;
let arr = [];


for (i = 0; i < length; i++) {
if( i == (middle-1) || i == middle ) {
arr.push ( values[i] );
}
}

return arr;

}

function increasing(numbers) {
  if (!numbers || numbers.length === 0) {
return undefined;
}

var length = numbers.length;

if ( length < 3 ) {
return undefined;
}


for (i = 0; i < length; i++) {
if (isNaN(numbers[i])) {
return ;
}
}

for( i = 0; i < numbers.length - 2; i++) {
if( ( numbers[i+1] - numbers[i] == 1 ) && ( numbers[i+2] - numbers[i+1] == 1 ) ) {

return true;
}
}

return false;
}


  function everywhere(values, x) {
    let flag = 1;
    if (!values || values.length < 1 || x === undefined) {
      return false;
    }
    else {

      for (let i = 0; i < values.length - 1; i++) {
        if (values[i] === x) {
          flag = 0;
        }
        else if (values[i - 1] === x || values[i + 1] === x) {
          flag = 0;
        }
        else {
          flag = 1;
          return false;
        }
      }
    }
    if (flag === 0) {
      return true;
    }

  }


  function consecutive(numbers) {
    if (!numbers || numbers.length < 3) {
      return false;
    }
    for (let i = 0; i < numbers.length - 2; i++ ) {
      let index = numbers[i];
      let index_2 = numbers[i + 1];
      let index_3 = numbers[i + 2];
      if (Number.isInteger(index) == false || Number.isInteger(index_2) == false || Number.isInteger(index_3) == false ) {
        return false;
      }
      if (index % 2 == 0 && index_2 % 2 == 0 && index_3 % 2 == 0) {
        return true;
      }
      else if (index % 2 == 1 && index_2 % 2 == 1 && index_3 % 2 == 1) {
        return true;
      }
    }
    return false;
  }

  function balance(numbers) {
    if (!numbers || numbers.length === 0) {
     return false;
   }

   var length = numbers.length;

   if ( length < 2 ) {
     return false;
   }

   let lSum = 0;

   for (i = 0; i < length; i++) {
     if (isNaN(numbers[i])) {
       return false;
     }
     lSum += numbers[i];

   }
   let rSum = 0;
   for(i=length-1; i>=0; i--) {
     rSum += numbers[i];
     lSum -= numbers[i];
     if(lSum == rSum) {
       return true;
     }
   }
   return false;
  }

    console.log("test");


    function clumps(values) {
      if (!values) {
        return -1;
      }
      if (values.length < 2) {
        return 0;
      }
      let last = values[0];
      let current;
      let clump = 0
      let count = 0
      let count2 = 0
      for (x = 1; x < values.length; x++) {
        current = values[x]
        if (last === current) {
          clump = clump + 1
          for (y = x; y < values.length; y++) {
            last = current
            current = values[y]
            if (!(last === current)) {
              count = 1
              x = y
              break;
            }
            else {
              count = -1
            }
          }
        }
        if (count == -1) {
          break;
        }
        last = current
      }
      return clump;
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
