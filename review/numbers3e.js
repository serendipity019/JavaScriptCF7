let num1 = 10;
let num2 = 3;

let divResult = num1 / num2;
let expr = (num2 / num1) * (8.5 / 3.3);

let fixedDiv = (num1 / num2).toFixed(1); // 3.3
let intResult = Math.floor(num1 / num2); // returns int -- the bottom limit
let upperInt = Math.ceil(num1 / num2); // returns int -- the upper limit
let roundResult = Math.round(num1 / num2); // rounds up for .5 and up, round down otherwise

//The modul hold the sign of the divisible.
let resultMod = num1 % num2; //JS & Java remaining part of a division

console.log(`Div result: ${divResult}, expr: ${expr}, fixed Div: ${fixedDiv},
            integer result: ${intResult}, upper Int: ${upperInt}, round result: ${roundResult},
            modulus result: ${resultMod}`);

