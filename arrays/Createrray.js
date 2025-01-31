const arr = []; // empty array
const arr1 = [1,2,3,4,5]; // and populate
const arr2 = [1, "Alice", 3.4, true]; // mix array
const sparseArr =[1, ,3]; //sparce array
const arr3 = [,,,]; // length is 3
const arr4 = new Array(2); // create new array with 2 elements

const grid = [[1, 2], [2, 3], [5, 6, 7]]; // grid.length= 3, grid[0].length = 2
const objArr = [{id: 1}, {id: 2}, {id: 3}]; // array with object

console.log(arr1[0]); // 1

//traverse
for (let i =0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
//second way
for (const item of arr1) {
    console.log(item);
}

//traverse 2D array
for (let i = 0; i < grid.length; i++ ){
    for (let j = 0; j < grid[i].length; j++){
        console.log(grid[i][j]);
    }
}
//second way
for (const row of grid) {
    for (const item of row){
        console.log(item);
    }
}
