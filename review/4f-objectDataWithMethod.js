
// constructors inside the object
const user = {
    firstname: 'George',
    lastname: 'Papado',
    // one way to make function is this
    getFirstname: function() { 
        return this.firstname;
    },

    // an other way is this(sooner)
    getFullname() {
        return `${this.firstname}, ${this.lastname}`;
    }

};

console.log(user.getFirstname());
console.log(user["getFullname"]()); //Second way