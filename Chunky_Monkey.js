//FreeCodeCamp Bonfire Challenge: Chunky Monkey

//Write a function that splits an array (first argument) into groups the length of size (second argument)
//and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var segments = [];
    var newArray = [];
    for (var i = 0; i < arr.length; i += size) { //set i = size, number of times it will run the loop 
        segments = arr.slice(i, i+size); //slice array up to size
        newArray.push(segments); 
        console.log(newArray);
    }
    return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //[ [ 'a', 'b' ], [ 'c', 'd' ] ]
