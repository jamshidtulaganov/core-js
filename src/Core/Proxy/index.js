// Proxy
// for wrapping object

// const proxy = new Proxy(target, handler)

// target is object
// handler is proxy configuration - traps

// 1. creation new Proxy
// let target = {};
// let proxy = new Proxy(target, {});

// proxy.name = "test";
// console.log(proxy);
// console.log(
// 	JSON.stringify(Object.getOwnPropertyDescriptor(proxy, "name"), null, 2)
// );

// Proxy traps
// 1. get
// 2. set
// 3. has

// const nums = [1, 2, 3];

// const proxy = new Proxy(nums, {
// 	get(target, prop) {
// 		if (prop in target) {
// 			return target[prop];
// 		} else {
// 			console.log("Undefined bratishka");
// 		}
// 	},
// });

// console.log(proxy[10]);

//ex for adding array only number: Validation
// let numbersArray = [];

// numbersArray = new Proxy(numbersArray, {
// 	set(target, prop, newValue) {
// 		if (typeof newValue === "number") {
// 			target[prop] = newValue;
// 			return true;
// 		} else {
// 			console.error("You can add the only numbers");
// 			return false;
// 		}
// 	},
// });

// numbersArray[0] = "1";
// numbersArray.push(12);

// console.log(numbersArray);

//--------------------- Enumerable(Iteration) ------------------------
// let user = {};

// user = new Proxy(user, {
// 	ownKeys() {
// 		return ["a", "b", "c"];
// 	},
// 	getOwnPropertyDescriptor() {
// 		// called for every property
// 		return {
// 			enumerable: true,
// 			configurable: true,
// 		};
// 	},
// });

// console.log(Object.keys(user));

//##---------------------------- don't acces "_" values

// let user = {
// 	name: "John",
// 	age: 21,
// 	_secret: true,
// 	getSecret: () => {
// 		return this._secret;
// 	},
// };

// user = new Proxy(user, {
// 	get(target, prop) {
// 		if (prop.startsWith("_")) {
// 			return undefined;
// 		} else {
// 			return target[prop];
// 		}
// 	},

// 	ownKeys(target) {
// 		return Object.keys(target).filter((prop) => !prop.startsWith("_"));
// 	},

// 	getOwnPropertyDescriptor(target, prop) {
// 		if (prop.startsWith("_")) {
// 			console.error("Shit you can't change the value");
// 			return {
// 				enumerable: false,
// 				writable: false,
// 				configurable: false,
// 			};
// 		} else {
// 			return {
// 				enumerable: true,
// 				writable: true,
// 				configurable: true,
// 			};
// 		}
// 	},

// 	// delete property

// 	deleteProperty(target, prop) {
// 		if (prop.startsWith("_")) {
// 			throw new Error("You can't delete it");
// 		} else {
// 			delete target[prop];
// 			return true;
// 		}
// 	},
// });

// user._secret = true;
// user.age = 12;
// delete user._secret;

// console.log(user._secret);
// console.log(user.getSecret());
// console.log(Object.keys(user));
// console.log(user);

// ----------------------- has() ----------------

// let range = {
// 	start: 1,
// 	end: 10,
// };

// range = new Proxy(range, {
// 	has(target, prop) {
// 		return prop >= target.start && prop <= target.end;
// 	},
// });

// console.log(1 in range);

// delay

// function delay(f, ms) {
// 	return function () {
// 		setTimeout(() => f.apply(this, arguments), ms);
// 	};
// }

// function sayHi(user) {
// 	console.log(`Hello, ${user}!`);
// }
// // 1 (function length is the arguments count in its declaration)

// sayHi = delay(sayHi, 3000);

// console.log(sayHi.length);

// with Proxy

// function delay(f, ms) {
// 	return new Proxy(f, {
// 		apply(target, thisArg, args) {
// 			setTimeout(() => target.apply(thisArg, args), ms);
// 		},
// 	});
// }

// function sayHi(user) {
// 	console.log(`Hello, ${user}`);
// }

// test = delay(sayHi, 3000);

// console.log(test);

// test("John");
