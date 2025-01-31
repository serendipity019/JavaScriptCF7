const array = [1, 2, 3];
console.log(array.join(", "));

//in diference we must make this below
let out = "";
for (const item of array) {
    out += item + ", ";
}
console.log(out);