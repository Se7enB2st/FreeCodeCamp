//FreeCodeCamp Bonfire Challenge: Where do I Belong

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
//The returned value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).


function getIndexToIns(arr, num) { //sort the array in ascending order
    arr.sort(function(a, b) { 
        return a - b;
    });
    for(var index = 0; index < arr.length; index++) { //loop thru the array
        if(num <= arr[index]) {
            break; // Jump out of array
        }
    }
    return index;
}

getIndexToIns([85, 100, 35, 45, 60], 50); //2
