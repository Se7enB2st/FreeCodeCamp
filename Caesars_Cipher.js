//FreeCodeCamp Bonfire Challenge: Caesars Cipher

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

function rot13(str) { 
  var newStr = str.split(""); // String to Array
  var result = [];
  
  for (var i = 0; i < newStr.length; i++) {
    var num = str.charCodeAt(i);
    if (num >= 65 && num <= 77) { // A-M
      num += 13;
    } 
    else if (num >= 78 && num <= 90) { // N-Z
      num -= 13;
    }
    result.push(String.fromCharCode(num));
  }
  return result.join(""); // Array to String
}

rot13("SERR PBQR PNZC"); // 'FREE CODE CAMP'
