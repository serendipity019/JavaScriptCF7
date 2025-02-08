// 3 ways to create object
const obj = {}; //empty object
const point = {x: 1, y: 1};
point.z = 2; //add in object
//2nd way
const point3D = new Object(); //is same as the first in line 2
point3D.x = 1;
point3D.y = 2;
point3D.z = 35;
//3rd way
const newObj = Object.create(Object.prototype); 