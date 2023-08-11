// Define the input string
let input = "turpentine and turtles";

// Define an array of vowels
const vowels = ["a", "e", "i", "o", "u"];

// Create an empty array to store the result
let resultArray = [];

// Iterate through each character in the input string
for (i = 0; i < input.length; i++) {
  // Uncomment the next line to see the current character being processed
  // console.log(input[i]);

  // Iterate through each vowel in the vowels array
  for (j = 0; j < vowels.length; j++) {
    // Uncomment the next line to see the index of the current vowel being checked
    // console.log(j + 1);

    // Check if the current character is a vowel
    if (input[i] === vowels[j]) {
      // Uncomment the next line to see the input string when a vowel match is found
      // console.log(input);

      // Add the vowel to the resultArray
      resultArray.push(input[i]);
    }
  }

  // Check if the current character is 'e' or 'u'
  if (input[i] === "e" || input[i] === "u") {
    // Add 'e' or 'u' to the resultArray
    resultArray.push(input[i]);
  }
}

// Join the characters in the resultArray to form a string and convert it to uppercase
let resultString = resultArray.join("").toUpperCase();

// Print the final result string
console.log(resultString);
