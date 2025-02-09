//old methods to avoid default params(before ECMA 6)
function greet(name) {
    if( name === undefined) {
        name =" Guest";
    }
    console.log(`hello, ${name}`);
}

greet();

//New methods with defualt params 
function getUser(name = "Guest", age = 18) {
    return {name, age}; // return{name:name, age:age}
}
const obj = getUser();
console.log(obj);


function getFormattedateTime(
    locale = "en-US",
    options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    }
) {
    const now = new Date();
    return now.toLocaleDateString(locale, options);
}

console.log(getFormattedateTime("el-GR"));

