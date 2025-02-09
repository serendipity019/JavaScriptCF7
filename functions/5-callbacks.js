function doMap(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 5, 8];
const double = doMap(numbers, (n => n + n));
console.log(double);