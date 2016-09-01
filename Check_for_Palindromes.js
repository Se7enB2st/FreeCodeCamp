//FreeCodeCamp Bonfire Challenge: Check for Palindromes

//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward,
//ignoring punctuation, case, and spacing.

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_-]/g, ''); // remove all non-alphanumeric characters
  return str === str.split('').reverse().join('');
}

palindrome("eye"); // true
