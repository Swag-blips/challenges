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

const filterRange = (arr, a, b) => {
  return arr.filter((curr) => curr >= a && curr <= b);
};

console.log(filterRange([10, 20, 30, 40, 50], 15, 45));

// // Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that
// are between a and b. The test is: a ≤ arr[i] ≤ b.

// // The function should only modify the array. It should not return anything.

const filterRangeInPlace = (arr, a, b) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(filterRangeInPlace([-1, 0, 1, 2, 3], 0, 2));

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

const getAverageAge = (users) => {
  const length = Object.keys(users).length;

  if (length == 0) {
    return undefined;
  }
  let sum = 0;
  users.forEach((user) => {
    sum += user.age;
  });

  return sum / length;
};

console.log(getAverageAge([]));

//Write the function sortByAge(users) that gets an array of objects with the age property
// and sorts them by age.

const sortByAge = (users) => {
  return users.sort((a, b) => a.age - b.age);
};

console.log(
  sortByAge([
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Eve", age: 20 },
    { name: "Charlie", age: 30 },
  ])
);

// Create a function unique(arr) that should return an array with unique items of arr.
const uniqueArr = (arr) => {
  let newArr = [];

  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    } else {
      console.log(`Duplicate found ${item}`);
    }
  });

  return newArr;
};

console.log(uniqueArr([1, 4, 5, , 5, 5, 6, 7, 7, 7, 7, 7]));

// other challenges

// Challenge: FizzBuzz
// The FizzBuzz challenge is a classic programming problem used in coding interviews. Here's how it works:

// Print numbers from 1 to 100.
// For multiples of three, print "Fizz" instead of the number.
// For multiples of five, print "Buzz" instead of the number.
// For numbers which are multiples of both three and five, print "FizzBuzz".

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz();

// Challenge: Inventory Management System
// Objective:
// Create an inventory management system for a store. The system should allow you to add items, remove items, and search for items by name.

// Requirements:
// Add Item: Add a new item to the inventory.
// Remove Item: Remove an item from the inventory by its name.
// Search Item: Search for an item by its name and return its details.
// Steps:
// Define the Item Structure:
// Each item in the inventory will have a name, quantity, and price.

// Create the Inventory Array:
// This will hold all the items.

// Implement Add Item Function:
// A function to add a new item to the inventory.

// Implement Remove Item Function:
// A function to remove an item by its name.

// Implement Search Item Function:
// A function to search for an item by its name and return its details.'

let inventory = [];
const addItem = (name, quantity, price) => {
  if (typeof quantity === "string") throw new Error("Invalid quantity");
  if (name === "") throw new Error("Invalid name");
  if (price === "") throw new Error("Invalid price");
  const item = {
    name,
    quantity,
    price,
  };

  inventory.push(item);
};

addItem("apple", 50, "$50");
addItem("banana", 100, "$150");
addItem("bear", 110, "$170");

const removeItem = (name) => {
  if (typeof name !== "string") throw new Error("invalid name");
  inventory = inventory.filter((item) => item.name !== name);
};

removeItem("apple");

const searchItem = (name) => {
  if (typeof name !== "string") throw new Error("invalid name");

  return inventory.find((item) => item.name === name);
};

console.log(searchItem("banana"));

console.log(inventory);

// Challenge: Inventory Management with Categories
// Extend your inventory system to support categories for each item. Implement the following functions:

// addItem(name, quantity, price, category):

// Add an item to the inventory with the given name, quantity, price, and category.
// Ensure that the price is converted to a number even if it has a dollar sign.
// Validate inputs and throw appropriate errors for invalid values.
// removeItem(name):

// Remove an item from the inventory by its name.
// searchItem(name):

// Search for an item by its name and return the item if found. Return a message if the item is not found.
// getItemsByCategory(category):

// Get all items belonging to a specific category and return them as an array. Return an empty array if no items are found in that category.
// updateItem(name, updatedProperties):

// Update the properties (quantity, price, or category) of an existing item by its name.
// Ensure that price updates also handle the conversion from a string with a dollar sign to a number.

let inventoryAlt = [];
const addItemAlt = (name, quantity, price, category) => {
  if (typeof quantity === "string") throw new Error("Invalid quantity");
  if (name === "") throw new Error("Invalid name");
  if (price === "") throw new Error("Invalid price");
  if (category === "") throw new Error("Invalid category");

  const numericPrice = parseFloat(price.replace(/^\$/, ""));
  if (isNaN(numericPrice)) throw new Error("Invalid price format");

  const item = {
    name,
    quantity,
    price: numericPrice,
    category,
  };

  inventoryAlt.push(item);
};

addItemAlt("Apple", 5, "$10.99", "Fruit");
addItemAlt("Banana", 7, "$0.99", "Fruit");
addItemAlt("Orange", 3, "$1.49", "Fruit");

addItemAlt("Samsung TV", 2, "$1299.99", "Electronics");
addItemAlt("LG TV", 4, "$999.99", "Electronics");
addItemAlt("Sony Headphones", 5, "$199.99", "Electronics");

addItemAlt("Nike Shoes", 3, "$79.99", "Clothing");
addItemAlt("Adidas Shoes", 6, "$69.99", "Clothing");
addItemAlt("Levi's Jeans", 8, "$49.99", "Clothing");

const removeItemAlt = (name) => {
  inventoryAlt = inventoryAlt.filter(
    (item) => item.name.toLowerCase() !== name.toLowerCase()
  );
};

const searchItemAlt = (name) => {
  let foundItem = inventoryAlt.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (foundItem) {
    return foundItem;
  } else {
    return "item could not be found";
  }
};

const getItemsByCategory = (category) => {
  let filteredCategory = inventoryAlt.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredCategory) {
    return filteredCategory;
  } else {
    return [];
  }
};

const updateItem = (name, quantity, price, category) => {
  let foundItem = inventoryAlt.find((item) => item.name === name);

  if (typeof quantity === "string") throw new Error("Invalid quantity");
  if (name === "") throw new Error("Invalid name");
  if (price === "") throw new Error("Invalid price");
  if (category === "") throw new Error("Invalid category");

  foundItem.quantity = quantity;
  foundItem.price = price;
  foundItem.category = category;
};

removeItemAlt("NiKe Shoes");
console.log(searchItemAlt("LG TV"));

console.log(getItemsByCategory("FruiT"));
updateItem("Apple", 10, "$50", "Electronics");
console.log(inventoryAlt);

// Challenge: User Data Transformation
// You have an array of user objects. Each user object contains the user's full name, age, and a list of skills. Your task is to transform this data in various ways.

// Requirements:
// capitalizeNames(users):

// Transform the fullName of each user to have the first letter of each word capitalized.
// filterAdults(users):

// Filter the array to include only users who are 18 years or older.
// getAllSkills(users):

// Extract and return a sorted array of all unique skills from all users.
// groupByInitial(users):

// Group the users by the first letter of their fullName.
// Return an object where the keys are the initials and the values are arrays of users whose names start with that letter.

const users = [
  { fullName: "john doe", age: 25, skills: ["JavaScript", "React"] },
  { fullName: "jane smith", age: 17, skills: ["JavaScript", "Vue"] },
  { fullName: "bob johnson", age: 30, skills: ["Java", "Spring"] },
  { fullName: "alice davis", age: 22, skills: ["Python", "Django"] },
];

const capitalizeNames = () => {
  for (let i = 0; i < users.length; i++) {
    users[i].fullName.split("")[0].toUpperCase();
  }
};

capitalizeNames();

//OOP

// Challenge: Create a Movie Rental System
// You need to create a movie rental system with the following requirements:

// Classes to Create:

// Movie: Represents a movie with properties like title, director, and ID.
// RentalStore: Represents a rental store that can hold multiple movies and perform operations like adding and removing movies.
// Customer: Represents a customer with properties like name and customer ID. Customers should be able to rent and return movies.
// StoreManager: Represents a store manager who can add and remove movies from the rental store. Inherits from Customer.

class Movie {
  constructor(title, director, id) {
    this.title = title;
    this.director = director;
    this.id = id;
  }
}
const movie1 = new Movie("Inception", "Christopher Nolan", 8347);
const movie2 = new Movie("The Matrix", "Lana Wachowski, Lilly Wachowski", 1293);
const movie3 = new Movie("The Godfather", "Francis Ford Coppola", 4785);
const movie4 = new Movie("Pulp Fiction", "Quentin Tarantino", 2376);
const movie5 = new Movie("The Dark Knight", "Christopher Nolan", 5642);

class RentalStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    return this.movies.push(movie);
  }

  removeMovie(id) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }
}

const jimmyRentals = new RentalStore();
jimmyRentals.addMovie(movie1);
jimmyRentals.addMovie(movie2);
jimmyRentals.addMovie(movie3);
jimmyRentals.addMovie(movie4);

console.log(jimmyRentals);

jimmyRentals.removeMovie(8347);

console.log(jimmyRentals);

class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.rentedMovies = [];
  }
}

class StoreManager extends Customer {
  constructor(name, customerId) {
    super(name, customerId);
  }

  addMovieToStore(movie, store) {
    store.addMovie(movie);
  }

  removeMovieFromStore(id, store) {
    store.removeMovie(id);
  }
}

// Challenge:

// Write a program that takes a list of numbers as input and returns the list with all duplicates removed and the remaining numbers sorted in ascending order.

// Example:

// Input: [4, 2, 7, 2, 1, 3, 4, 5]
// Output: [1, 2, 3, 4, 5, 7]

// Constraints:

// - Use a programming language of your choice
// - Share your solution in the comments
// - Explain your approach and thought process

// This challenge requires some data manipulation and sorting skills. Show me your coding prowess!

const sortDuplicate = (arr) => {
  let uniqueArray = [...new Set(arr)];

  return uniqueArray.sort((a, b) => a - b);
};

console.log(sortDuplicate([4, 2, 7, 2, 1, 3, 4, 5]));

//or

const sortDuplicateAlt = (arr) => {
  let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

  return uniqueArr.sort((a, b) => a - b);
};

console.log(sortDuplicateAlt([4, 2, 7, 2, 1, 3, 4, 5]));

let dup = [];
[4, 2, 7, 2, 1, 3, 4, 5, 9, 7].forEach((a, b) => {
  if (dup.includes(a)) {
    return;
  }
  dup.push(a);
});
console.log(dup.sort());

// Write a JavaScript function that takes a string as input and returns the string with all vowels removed, but with the following twist:

// - If a vowel is followed by another vowel, it should be replaced with a special character, like '#'.
// - If a consonant is followed by a vowel, it should be replaced with another special character, like '$'.

const replaceVowels = (str) => {
  if (typeof str !== "string")
    throw new Error(
      "this function does not accept any parameter except strings"
    );

  if (str.trim() === "") return;
  let vowels = "aeiouAEIOU";
  let convertedTestStr = str.split("");

  for (let i = 0; i < convertedTestStr.length; i++) {
    if (vowels.includes(convertedTestStr[i])) {
      convertedTestStr[i] = "";
      if (
        i + 1 < convertedTestStr.length &&
        vowels.includes(convertedTestStr[i + 1])
      ) {
        convertedTestStr[i + 1] = "#";
      } else if (i + 1 < convertedTestStr.length) {
        convertedTestStr[i + 1] = "$";
      }
    }
  }

  return convertedTestStr;
};

console.log(replaceVowels(""));

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// The "Five Houses" Problem

// There are five houses in a row, each painted a different color: blue, green, red, white, and yellow. Each house is occupied by a person of a different nationality: American, British, Canadian, Indian, and Japanese. Each person has a different favorite drink: coffee, tea, milk, soda, and water. Using the following clues, write a program to determine the color of each house, the nationality of its occupant, and their favorite drink.

// 1. The Canadian lives in the first house.
// 2. The person who drinks milk lives next to the person who owns the yellow house.
// 3. The person who owns the yellow house drinks soda.
// 4. The person who drinks coffee lives in the house next to the British person.
// 5. The American lives in the red house.
// 6. The person who drinks tea lives in the house next to the person who owns the green house.
// 7. The person who owns the green house drinks water.

// Constraints:

// - Write a program in Python (or your preferred language)
// - Use a logical and efficient approach (no brute force)
// - Output should be a 5x3 table with columns for color, nationality, and drink

// Take your time, think carefully, and show me your coding skills!

const fillHouses = () => {
  const houses = Array(5)
    .fill()
    .map(() => ({ color: "", nationality: "", drink: "" }));
  houses[0].color = "yellow";
  houses[1].nationality = "british";
  houses[2].color = "red";
  houses[3].color = "green";
  houses[4].nationality = "american";

  houses[0].nationality = "canadian";

  for (let i = 0; i < houses.length; i++) {
    if (houses[i].color === "yellow") {
      houses[i + 1].drink = "milk";
    }
  }

  for (let i = 0; i < houses.length; i++) {
    if (houses[i].color === "yellow") {
      houses[i].drink = "soda";
    }
  }

  for (let i = 0; i < houses.length; i++) {
    if (houses[i].nationality === "british") {
      houses[i + 1].drink = "coffee";
    }
  }
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].color === "red") {
      houses[i].nationality = "American";
    }
  }
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].color === "green") {
      houses[i + 1].nationality = "Tea";
    }
  }
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].color === "green") {
      houses[i].drink = "water";
    }
  }

  console.table(houses);
};

fillHouses();

// Challenge: "Guess My Number"

// Objective: Write a Python program that:

// 1. Generates a random number between 1 and 100.
// 2. Asks the user to guess the number.
// 3. Tells the user if their guess is higher or lower than the generated number.
// 4. Keeps asking until the user guesses the correct number.

// Constraints:

// - Use only built-in Python functions and libraries.
// - Write a single Python script.

// const guessMyNumber = () => {
//   let randomNum = Math.floor(Math.random() * 100);
//   let numOfTries = 0;
//   let guess;
//   while (guess !== randomNum) {
//     guess = Number(prompt(`Guess the number (tries left: ${5 - numOfTries})`));

//     if (isNaN(guess)) {
//       alert("Please input a number");
//       continue;
//     }
//     numOfTries++;
//     if (randomNum > guess) {
//       alert("Higher");
//     } else if (randomNum < guess) {
//       alert("Lower");
//     } else if (randomNum === guess) {
//       alert("You win");
//       break;
//     }

//     if (numOfTries === 5) {
//       alert("Youve lost the game, maximum number of tries exceeded");
//       break;
//     }
//   }
// };
// guessMyNumber();

// Write a program that prints the Multiplication Table with 7 (That's 7 times table .)

// let multiplicationTable = () => {
//   for (let i = 1; i <= 15; i++) {
//     let result = i * 7;
//     console.log(result);
//   }
// };

// multiplicationTable();

//////////////////////

