function max(...numbers) {
    let maxVal = -Infinity;

    for(let n of numbers) {
        if (n > maxVal) {
            maxVal = n;
        }
    }
    return maxVal;
}

console.log(max(1, 6, 45, 12, 2)); //We can call with this way cause the ...rest operator in function.

//other example
function sum(...numbers) {
    return numbers.reduce((total, sum) => total + sum, 0); 
}

// Spread vs rest operator
function maxx(...numbers) { // rest
    return Math.max(...numbers); // spread
}

console.log(sum(1, 2, 5, 8, 12));

//and one a little more complex
function greet(message, ...names) { // the ...rest operator must be in the end, because take the rest values. message and after all the rests. 
    console.log(message + ", " + names.join(", "));
}

greet("Hello", "Alice", "Bob", "Costas"); // with ...rest all things after Hello can readed. 

