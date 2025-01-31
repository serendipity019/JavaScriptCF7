const arr = [0, 2, 3, 4]
delete arr[0]; // bad practice because leave empty space, undefined.
console.log(arr);

arr.push(5) // add the number 5 in the same array we had before
arr.push(6,7) // every time add after the last item

console.log(arr);
