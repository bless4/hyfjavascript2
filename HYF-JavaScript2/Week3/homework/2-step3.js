"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

  // make array:

  const values = [];

  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next:

  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);

    // if the num can be divided to both 3 and 5:

    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log(i + " can be divided to both: ");
      threeCallback("3");
      fiveCallback("5");
    }

    // if num can be divided to 3:

    else if (i % 3 == 0) {
      console.log(i + " can be divided to: ");
      threeCallback("3");
    }

    // if num is divided to 5:

    else if (i % 5 == 0) {
      console.log(i + " can be divided to: ");
      fiveCallback("5");
    };

  }

}

//callback functions  params 

function sayThree(threeCallback) {
  console.log(threeCallback);
}

function sayFive(fiveCallback) {
  console.log(fiveCallback);
}

threeFive(10, 15, sayThree, sayFive);
