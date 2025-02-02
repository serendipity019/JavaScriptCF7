const studensts = ['Alice', 'Andreas', 'Bob', 'Kostas' ];

//here return only the values from the array
studensts.forEach(function(stu) {
    console.log(stu);
});

//here values and indexes
studensts.forEach(function(stu, index) {
    console.log(stu, index);
});

//here values, indexes and the same array
studensts.forEach(function(stu, index, arr) { // if we want to have only values and the array then we would write the function like this: function(stu, _, arr)
    console.log(stu, index, arr);
});

let filtered = studensts.filter(student => student === 'Andreas');
console.log(filtered);

let mapped = studensts.map(student => 'Student: ' + student);
console.log(mapped);

const numbers = [1, 6, 9, 12];
let sum = numbers.reduce((total, val) => total + val, 0); // 0 is the iniial value of total
console.log(sum);