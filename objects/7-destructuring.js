const [a, b] = [1, 2] // array destructure

const person = { 
    firstname: "Alice",
    age: 24,
    city: "Athens"
};

console.log(person); 

const {firstname, age, city} = person; // object destructure
console.log(firstname, age, city);

const {firstname: first, age: myAge, city: myCity = "Toronto"} = person; //here we change the key names
console.log(first, myAge, myCity);