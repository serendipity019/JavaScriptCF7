const cities = ['Athens', 'Paris', 'Toronto'];

// add
cities.push("London");

let city = cities[0];
console.log(city);

cities[1] = "London";

cities.forEach(c => console.log(c));

cities.sort();

cities.sort((a,b) => a.localeCompare(b, 'en')); // The sort without slice() modified the array
const citiesSorted = cities.slice().sort((a,b) => a.localeCompare(b, 'en')); // Here we made shallow copy and the initial array stay how it is. 
// Deep copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities)); // with Jason made it string and with parse become again javaSript item

const cities2 = structuredClone(cities); // Also deep copy

// Shallo copies -- Spread operator
const cities3 =[...cities];
const nums = [1, 2, 3, 4];
let maxVal = Math.max(...nums);
let maxIndex = nums.indexOf(maxVal);
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`);

