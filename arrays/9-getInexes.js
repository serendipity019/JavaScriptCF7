const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2];

/* We want a function that return to us the position index from a specific number */

// Mine function
function indexFound(array, number) {
    const positions = new Array();
    for (let i = 0; i < array.length; i++){
        if( array[i] == 2){
            positions.push(i+1); // +1 for human reading
        }
    }
    return positions;
}

console.log(indexFound(arr,2));

// Teacher function
const getIndexes = (arr, val) => {
    const indexes = []

    arr.forEach((v, index) => {
        if ( v === val) {
            indexes.push(index)
        }
    })

   // arr.forEach(function(v, index) {
   //   if (v === val) {
   //     indexes.push(index)
   //   }
   // })
    return indexes
}



console.log(getIndexes(arr,2));