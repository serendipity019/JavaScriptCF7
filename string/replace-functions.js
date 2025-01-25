const s = "Coding Factory";
const s2 = "CODING Factory";

const replaced = s.replace("Coding", "Code");
const lower = s.toLowerCase();
const upper = s.toUpperCase();

if (s.toUpperCase() === s2.toUpperCase()){
    console.log("Equals");
}

const firstname = "Alice    ";
if (firstname.trim() === "Alice") {
    console.log("Equals");
}

console.log("Coding".repeat(10));

const concat = s + s2 + "Good night!";

const concat2 = s.concat(s2).concat("Bye!"); 

console.log(concat);
console.log(concat2);