"use strict";

// Write a JavaScript function that takes a string as an input and returns the string with all vowels removed.

const vowelReplace = (str) => {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => !"aeiou".includes(char))
    .join("");
};

const measurePerformance = () => {
  const testString =
    "This is a performance test string with a significant length to measure the time taken to remove vowels.";

  let startTime = performance.now();

  const result = vowelReplace(testString);

  let endTime = performance.now();

  const duration = endTime - startTime;

  console.log(`output: ${result}`);
  console.log(`duration: ${duration}`);
};

measurePerformance();

// Reverse a String: Write a function that takes a string as input and returns the reversed string.

const reverseStr = (arg) => {
  if (typeof arg !== "string")
    throw new Error(
      "this function does not accept any parameter except strings"
    );
  return arg.toLowerCase().split("").reverse().join("");
};

console.log(reverseStr("hello"));

// 1. Find the Maximum: Write a function that takes an array of numbers as input and returns the maximum value.
const maximumNum = (arg) => {
  if (!Array.isArray(arg))
    throw new Error(
      "this function does not accept any parameter except Arrays"
    );
  let maxNum = arg[0];

  for (let i = 0; i < arg.length; i++) {
    if (arg[i] > maxNum) {
      maxNum = arg[i];
    }
  }

  return maxNum;
};

console.log(maximumNum([1, 2, 3, 5, 6, 8, 9, 10, 20, 59, 80]));

//Sort an Array: Write a function that takes an array of numbers as input and returns the sorted array in ascending order.

const sortArray = (arg) => {
  return arg.sort((a, b) => a - b);
};

console.log(sortArray([1, 3, 7, 4, 8, 6, 9, 2, 5, 10]));

//Check if Palindrome: Write a function that takes a string as input and returns true if it's a palindrome, false otherwise.

const isPalindrome = (arg) => {

};
