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

//1. Reverse a String: Write a function that takes a string as input and returns the reversed string.

const reverseStr = (arg) => {
  if (typeof arg !== "string")
    throw new Error(
      "this function does not accept any parameter except strings"
    );
  return arg.toLowerCase().split("").reverse().join("");
};

console.log(reverseStr("hello"));

// 2. Find the Maximum: Write a function that takes an array of numbers as input and returns the maximum value.

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

//3. Check if Palindrome: Write a function that takes a string as input and returns true if it's a palindrome, false otherwise.

const isPalindrome = (arg) => {
  if (typeof arg !== "string")
    throw new Error(
      "this function does not accept any parameter except strings"
    );
  let reversedStr = arg.toLowerCase().split("").reverse().join("");
  return reversedStr === arg.toLowerCase();
};
console.log(isPalindrome("kayak"));

//4. Fibonacci Sequence: Write a function that takes a number as input and returns the corresponding Fibonacci number.

const fibonacciRecursive = (n) => {
  // dont fully understand this code

  if (typeof n !== "number" || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive(5));

//5. Sort an Array: Write a function that takes an array of numbers as input and returns the sorted array in ascending order.

const sortArray = (arg) => {
  return arg.sort((a, b) => a - b);
};

console.log(sortArray([1, 3, 7, 4, 8, 6, 9, 2, 5, 10]));

//6. Find the First Duplicate: Write a function that takes an array of numbers as input and returns the first duplicate value.

const firstDuplicate = (arg) => {
  if (!Array.isArray(arg)) throw new Error("this function takes only an arra");

  for (let i = 0; i < arg.length; i++) {
    for (let j = i + 1; j < arg.length; j++) {
      if (arg[j] === arg[i]) {
        return arg[j];
      }
    }
  }

  return -1;
};

console.log(firstDuplicate([1, 2, 3, 4, 5, 6]));

// alt way and better to solve it

const firstDuplicateAlt = (arg) => {
  const seen = new Set();

  for (let i = 0; i < arg.length; i++) {
    if (seen.has(arg[i])) {
      return arg[i];
    }
    seen.add(arg[i]);
  }

  return -1;
};

console.log(firstDuplicateAlt([1, 2, 3, 4, 4, 5, 5]));

//7. Count the Vowels: Write a function that takes a string as input and returns the number of vowels.
const vowelCount = (arg) => {
  if (typeof arg !== "string")
    throw new Error(
      "this function does not accept any parameter except strings"
    );
  let count = 0;

  for (let i = 0; i < arg.length; i++) {
    if ("aeiou".includes(arg[i])) {
      count++;
    }
  }
  return count;
};

console.log(vowelCount("helloo"));
// 8 Check if Array is Sorted: Write a function that takes an array of numbers as input and returns true if it's sorted in ascending order, false otherwise.

const isSorted = (arg) => {
  if (!Array.isArray(arg)) throw new Error("this function takes only an arra");

  let initArg = [];
  initArg = [...arg];

  const sorted = arg.sort((a, b) => a - b);
  console.log(initArg);

  console.log(sorted);

  return initArg.toString() === sorted.toString();
};

console.log(isSorted([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
//9 Find the Longest Word: Write a function that takes a string as input and returns the longest word.

const longestWord = (arg) => {
  if (typeof arg !== "string")
    throw new Error(
      "this function does not accept any parameter except strings"
    );

  if (arg.trim() === "") return;
  const wordSplit = arg.toLowerCase().split(" ");
  let initialWord = wordSplit[0];

  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i].length > initialWord.length) {
      initialWord = wordSplit[i];
    }
  }
  return initialWord;
};

console.log(longestWord("i love javascript"));

//10 Calculate the Sum: Write a function that takes an array of numbers as input and returns the sum of all numbers.

const sumOfArray = (arg) => {
  const sum = arg.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return sum;
};

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 2]));

/* Challenge: User Data Processing
Problem Description
You are given an array of user objects. Each user object contains the following properties:

id (a unique identifier)
name (the user's name)
age (the user's age)
email (the user's email address)
isActive (a boolean indicating if the user is currently active)
Your task is to write functions to perform the following operations:

Filter Active Users: Write a function that filters out all inactive users.
Find Average Age: Write a function that calculates the average age of all users.
Find User by ID: Write a function that finds a user by their unique ID.
Sort Users by Name: Write a function that sorts users alphabetically by their names.
Format User Data: Write a function that formats the user data into a more readable string for each user.
 */

const factorsOf12 = (num) => {
  let arr = [];

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(factorsOf12(10));

// // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

const camelize = (str) => {
  // remove dashes

  const splitStr = str.trim().split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "-") {
      splitStr[i + 1] = splitStr[i + 1].toUpperCase();

      splitStr.splice(i, 1);
    }
  }
  return splitStr.join("");
};

camelize("my-short-string");


// //Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.


const filterRange = (arr,a,b) => {
  return arr.filter(curr => curr >=a && curr<=b)
}

console.log(filterRange([10, 20, 30, 40, 50],15,45))


// // Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that 
// are between a and b. The test is: a ≤ arr[i] ≤ b.

// // The function should only modify the array. It should not return anything.


const filterRangeInPlace = (arr, a,b) => {

let result = []
  for(let i=0; i<arr.length; i++){
   if(arr[i] >= a && arr[i] <=b){
    result.push(arr[i])
   }
  }

  return result
}


console.log(filterRangeInPlace([-1, 0, 1, 2, 3],0,2))


// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.


const getAverageAge = (users) => {


 const length = Object.keys(users).length

 if(length == 0){
  return undefined 
 }
 let sum = 0;
  users.forEach((user) => {
    sum+=user.age
  })

  return sum/length
}

console.log(getAverageAge(
  [
    
  ]))

  //Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.