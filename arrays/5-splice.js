const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//Delete
const arr1 = arr.splice(0, 4);// delete from 0 until 4-1 
console.log(arr1);
console.log(arr);

// Insert
arr.splice(0, 0, 10); // .splice(in position 0, delete 0 items, add this item)
console.log(arr);

//Update
arr.splice(0, 1, 11); //.splice(in position 0, delete 1 items, add this item)
console.log(arr);