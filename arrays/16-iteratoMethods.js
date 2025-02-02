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
studensts.forEach(function(stu, index, arr) {
    console.log(stu, index, arr);
});