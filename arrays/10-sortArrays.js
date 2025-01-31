const cities = ["Paris", 'London', 'Berlin', 'Athens'];
const numbers = [10, 101, 103, 77, 99, 123, 690, 590]; 

console.log(cities.sort());
console.log(numbers.sort()); // Make sort accord ASCII and for this reason for numbers don't work properly

//With this make ascend sort is something like compare(a,b) in Java. 
/* numbers.sort(function(a,b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
}); */

//its like above
numbers.sort(function(a,b) {
   return a - b; // if we put b - a then we will take descend sort
});

console.log(numbers);
console.log(numbers.reverse()); // with reverse make descend sort
