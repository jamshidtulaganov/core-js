// #1 create array Array() and new Array()
// #2 first argument if it is number , it would be array length

const arr1 = new Array(10);

for (let i = 0; i < 11; i++) {
	arr1[i] = i;
}

// instance methods

/*---------------- at(index: number) ----------------------------*/
// Array.prototype.at(index: number) return the element

const firstElement = [1, 2, 3, 4].at(0);
// console.log(firstElement);

// index can be negative number: -1

/*--------------------- concat(arr1, arr2)--------------------------------*/

// const testArr1 = [1, 2, [10]];
// const testArr2 = [3, 4];
// const concatedArr = testArr1.concat(testArr2);

// concatedArr[0] = 101;

// console.log(testArr1);

// console.log(concatedArr);

/*--------------------- copyWithin(target, start=0, end="arr.length") --------------------------------*/

// use in-place algorithm don't change the length of array
// instead of change the places

// const arr = ["a", "b", "c", "d"];
// const res = arr.copyWithin(0, 1, 4);

// console.log(res);

/*--------------------- entires() ---------------------------------------- */
// for iteration generate with index

// const arr = [1, 3];

// for (const [index, element] of arr.entries()) {
// 	console.log(index, element);
// }

/*---------------------- every(callbackFn, thisArg) ---------------------- */

// #1 return Boolean
// #2 callback function exist
// #3 thirdArgument is this - arr

// const mainArr = [1, 2, 3];
// const subArr = [1, 2];

// const isSub = subArr.every((num) => {
// 	return mainArr.includes(num);
// });

// console.log(isSub);

// #ex: check increasing numbers

// const numbers = [-2, 4, -8, 16, -32];
// const isIncreasing = numbers
//   .filter((num) => num > 0)
//   .every((num, idx, arr) => {
//     // Without the arr argument, there's no way to easily access the
//     // intermediate array without saving it to a variable.
//     if (idx === 0) return true;
//     return num > arr[idx - 1];
//   });
// console.log(isIncreasing); // true

/*------------------------ some(callbackFn, thisArg) ----------------------  */

//#1 return Boolean for condition
// const arr = new Array(5);

// const greaterThanTen = arr.some((i) => console.log(i));

// console.log(greaterThanTen);

// when some() iterate this sparse array this part not invoked
// console.log([1, , 3].some((x) => x === undefined)); // false
// console.log([1, , 1].some((x) => x !== 1)); // false
// console.log([1, undefined, 1].some((x) => x !== 1)); // true

//##### calling some() non-array objects ###

// const arrayLike = {
// 	0: "a",
// 	1: "b",
// 	2: "a",
// 	3: 3,
// 	length: 3, // ignored by some() since length is 3 cause is considiration by length
// };
// console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// // false
