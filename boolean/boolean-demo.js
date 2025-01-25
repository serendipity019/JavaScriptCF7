console.log(boolean(1)); // true
console.log(boolean(0)); // false
console.log(boolean("Hello")); // true
console.log(boolean("")); // false
console.log(boolean(null)); // false
console.log(boolean(undefined)); // false
console.log(boolean({})); // true
console.log(boolean([])); // true

while (1) {
    console.log("Hello");
    break;
}

do {
    console.log("One iteration");
} while (0);

for (let i =1; 1; i++) {
    console.log("In for");
    break;
}

let num = 10;
while (num) {
    console.log(num);
    num--; // will break when num be 0
}

// && || !
console.log("Hello" && 7); // truthy && truthy -> last truthy value, give 7 
console.log("Cat" && 0); // truthy && falsy, first falsy -> the first falsy value, give 0

console.log("User" || "Default"); // First truthy value or last falsy value if all are false. This give user

const username = "" || "Default";
let isBtnExists = true;
let Button = "Button";
const buttonToShow = isBtnExists && Button ;
