const initial = [1, 2, 3];
//spread operator ...
const copy =[...initial];// fresh copy(shallow)

const extended = [0, ...initial, 4];

const chars = [..."Hello"]; // make it like this H, e, l, l, o

console.log(copy);
console.log(extended);
console.log(chars);