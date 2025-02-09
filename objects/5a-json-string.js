const jsObj =  {
    id: 1,
    hobbies: [{id:1, title: "gym"}, {id:2, title: "music"}]
};

//convert to jason string, serialization
const jsonStr =JSON.stringify(jsObj);
console.log(jsonStr);

//convert from jason, deserialization
const jsObj2 = JSON.parse(jsonStr);
console.log(jsObj2);