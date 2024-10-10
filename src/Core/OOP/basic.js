"use strict";
// function userCreator(name, score) {
// 	let newUser = {};

// 	newUser = {
// 		name,
// 		score,
// 		addScore: () => {
// 			return newUser.score++;
// 		},
// 	};

// 	return newUser;
// }

// const user1 = userCreator("jamshid", 95);
// const user2 = userCreator("afzal", 100);

// user1.addScore();
// user2.addScore();

// console.log(user1);
// console.log(user2);

//### Object.getOwnPropertyDescriptor()

// const user = {
// 	name: "John",
// };

// getter
// const descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(JSON.stringify(descriptor, null, 2));

// create with descriptor

// const user2 = {};
// Object.defineProperty(user2, "name", { value: 10 });

// Object.freeze(user2);

// console.log(
// 	JSON.stringify(Object.getOwnPropertyDescriptor(user2, "name"), null, 2)
// );

// user2.age = 12;

// console.log(Object.isSealed(user2));
// console.log(Object.isFrozen(user2));
// console.log(Object.isFrozen({}));

/* 
## -> Object.defineProperty(obj, keyName, {
		value: "",
		writable: false,
		enumerable: false,
		configurable: false
	}
), 
## -> Object.getOwnPropertyDescriptor(obj, keyName)
*/

console.log("Start");

setTimeout(() => {
	console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
	console.log("Microtask: Promise");
});

console.log("End");
