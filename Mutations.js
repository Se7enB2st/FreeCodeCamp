//FreeCodeCamp Bonfire Challenge: Mutations

//Return true if the string in the first element of the array contains all of the letters of the string
//in the second element of the array.


function mutation(arr) {
    var first = arr[0].toString().toLowerCase();
    var second = arr[1].toString().toLowerCase();
    var newArr = second.split("");
    var result;

    for (i = 0; i < second.length; i++) {
        if (first.indexOf(newArr[i]) === -1) { //return -1 if not found
          result = false; { break; } //break out of loop if return false          
        } else {
          result = true;
        }
    }  
    return result;
}

mutation(["hello", "neo"]); //false
