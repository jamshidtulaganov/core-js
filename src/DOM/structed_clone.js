// ############## - STRUCTURED CLONE - ###################

// it is DOM API - for deep cloning

const user = { age: 10, name: "test" };
const clone = structuredClone(user);

clone.age = 12;

console.log(user, clone);
