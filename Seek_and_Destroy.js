//FreeCodeCamp Bonfire Challenge: Seek and Destroy

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, a, b, c) { // ([1,2,3,1,2,3],2,3,undefined)
    var base = arr.filter(function(x) { 
      return x !== a && x !== b && x !== c; //compare and filter out a, b, c  
    });
    return base; 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1,1]
