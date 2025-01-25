const s = "Coding Factory";

const substr = s.substring(0, 6);

console.log(substr);

const mySlice = s.slice(7);
const mySlice2 = s.slice(7, 8);

console.log(mySlice);
console.log(mySlice2);

const copyStr = s.slice(); // make copy of s
console.log(copyStr);

const mySlice3 = s.slice(-7); // run from the end -7
console.log(mySlice3);

const splitted = s.split(" "); // brake the string when meet empty space 
console.log(splitted); 