//FreeCodeCamp Bonfire Challenge: Repeat a string repeat a string

//Repeat a given string (first argument) num times (second argument).
//Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	var printStr = "";
	for (var i = 0; i < num; i++) {
		printStr += str;
	}
	return printStr;
}

repeatStringNumTimes("abc", 3); //'abcabcabc'

