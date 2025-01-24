const employee = {
    firstname: 'Bob',
    position: "Developer",
    address: {
        street: 'Patision 75',
        city: 'Athens',
        zipCode: '10434'
    }
};

console.log(employee.address.street);
console.log(employee.firstname);
console.log(employee["address"]["zipCode"]); // second way