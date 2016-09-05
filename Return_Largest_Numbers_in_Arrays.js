//FreeCodeCamp Bonfire Challenge: Return Largest Numbers in Arrays

//Return an array consisting of the largest number from each provided sub-array.
//For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    var maxArray = [];
  	for (var i=0;i < 4; i++) {
    	maxArray.push(Math.max.apply(Math, arr[i])); //Math.max.apply take arr as argument and apply to 'Math', then find the largest number
  	}
  	return maxArray;
}

largestOfFour([[13, 27, 18, 26],[4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[27,5,39,1001]
