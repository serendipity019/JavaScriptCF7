const objArray =  [ 
    {id: 1, firstname: 'Bob', age: 23},
    {id: 2, firstname: 'Alice', age: 40},
    {id: 3, firstname: 'Nikos', age: 20},
    {id: 4, firstname: 'Nike', age: 32},
    {id: 5, firstname: 'Nikos', age: 18}
];

// sort by age
/* objArray.sort(function(a,b){
    return a.age - b.age ;
}); */

//console.log(objArray);

//sort by firstname and age
objArray.sort(function(a, b) {
    if(a.firstname === b.firstname) {
        return a.age - b.age;
    }
    return a.firstname.localeCompare(b.firstname);
});

console.log(objArray);