//FreeCodeCamp Bonfire Challenge: Title Case a Sentence

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var pieces = str.split(" ");
  for ( var i = 0; i < pieces.length; i++ ) {
    pieces[i] = pieces[i].toLowerCase();
    var capitalLetter = pieces[i].charAt(0).toUpperCase();
    pieces[i] = capitalLetter + pieces[i].substr(1); // Capital Letter + letters start at position[1]
    }  
  return pieces.join(" ");
}

titleCase("sHoRt AnD sToUt"); //"Short And Stout"
