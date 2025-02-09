const initial = { name: "Alice", age: 30, address: {street: "Patission", num: 76}};

// 3 ways to copy an Object
// 1. With Spreading. spread operator give a shallow copy.
const copyInitial ={...initial}; // This is used for shallow copy

//2. Object type
const copyInitial2 = Object.assign({}, initial);

// 3. With JSON function --deep copy
const copyInitial3 = JSON.parse(JSON.stringify(initial));

// 4. Deep copy
const copyInitial4 = structuredClone(initial); //This is used for deep copy