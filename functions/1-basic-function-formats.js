// 1.Basic function definition
function greet(name) {
    return `Hello, ${name}`;
}

function add(a, b) {
    return a + b;
}

console.log(greet("Alice"));

// 2.Function expression. These functions we can't call them before create them. (before line 12)
const mul = function(a, b) {
    return a * b;
}

let result = mul(3, 4);

// 3. Fat arrow function
const div = (a, b) => a / b;

