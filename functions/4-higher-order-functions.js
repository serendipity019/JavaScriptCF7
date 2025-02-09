//Higher-order functions
//Fuction factory
//Closure
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    }
}

const createMultiplier2 = (multiplier) => (num) => num * multiplier; // this is same like above function but is arrow function. 

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(3));