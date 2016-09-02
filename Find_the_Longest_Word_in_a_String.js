//FreeCodeCamp Bonfire Challenge: Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
  var maxLength = 0;
  array = str.split(" ");
  for (i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }
  return maxLength;
}

findLongestWord("May the force be with you"); //5
