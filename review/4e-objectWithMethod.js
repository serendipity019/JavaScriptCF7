// functions inside the object
const calc = {
    add: function(a, b) {
        return a + b;
    },

    sub(a, b) {
        return a - b ;
    }
};

console.log(calc.add(5,1));
console.log(calc["sub"](10, 4)); // second way