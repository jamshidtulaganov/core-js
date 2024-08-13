// #1 static method  - Array.from()

// use for iterable DS and array-like objects to array
// convert to array NodeList, Array-Like Object, iterable object
// iterable strings
/* 

    Array.from(iterable, callbackFn, thisArg)
*/

const users = new Set([1, 2, 2, 3]);

const convertedArray = Array.from(users);
console.log(convertedArray);

// shallow copying

// if copy the object's references
const costumers = [{ name: "Test", age: 12 }];

const convertedCostumers = Array.from(costumers);

console.log(convertedCostumers);

costumers[0].age = 24;

console.log(convertedCostumers);

/*
    Shallow coping it means , copy the object references not object
*/

// iterable objects - array like
const obj = {
	0: "Jamshid",
	1: "Tulaganov",
	4: "12",
	length: 5,
};

// it will be DENSE array
console.log(Array.from(obj));

// SPARSE array is not given value
console.log([1, , 2]);

/* ------------------------------------- Array.fromAsync() ---------------------------------------- */

/* 
	1. Handling async iteration to convert array
	2. syntax Array.fromAsync(data, mapFn, thisArg)
	3. return Promise and not blocking main-thread
*/

// generators

const asyncIterable = (async function* () {
	for (let i = 0; i < 5; i++) {
		await new Promise((resolve) => setTimeout(resolve, 10 * i));
		yield i;
	}
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]

/*---------------------------------------- Array.isArray() ---------------------------------*/
