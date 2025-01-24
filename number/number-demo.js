console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER); //if we want to have precise then we use this. 
console.log(Number.POSITIVE_INFINITY); // (12 / 0)
console.log(Number.NEGATIVE_INFINITY);

if (Number.isInteger(12)) {
    console.log('Is integer');
} else {
    console.log('Not Integer');
}

if (Number.isNaN(NaN)) {
    console.log('True');
} else {
    console.log('False');
}

if (isNaN(NaN)) {   // (10 / "AUEB")
    console.log('Is NaN');
} else {
    console.log("Not is NaN");
}

console.log(Number.parseInt('44')); // convert a string to a number
console.log(parseInt('42')); // make the same as above.

console.log(Number.parseFloat('44.8'));
console.log(parseFloat('45.1'));

const num1 = 0.1 + 0.2;
const num2 = 0.3;
// We make this to compare two float numbers.
function compareFloatingPoints(a, b) {
    return Math.abs(a-b) < Number.EPSILON ;
}

console.log(compareFloatingPoints(num1, num2));

