//########### - at() - ##########

// Array.prototype.myAt = function (index) {
// 	const length = this.length;
// 	const idx = index < 0 ? length + index : index;
// 	return this[idx];
// };

// const largeNumberArray = Array.from({ length: 10000 }, (_, i) => i);

// console.time("starting_my_at");
// console.log(largeNumberArray.myAt(1));
// console.timeEnd("starting_my_at");

// console.time("starting_default_at");
// console.log(largeNumberArray.at(1));
// console.timeEnd("starting_default_at");

//######### - concat() - ###########

// Array.prototype.myConcat = function (arr) {
// 	const length = this.length;
// 	const result = [];

// 	for (let i = 0; i < length + arr.length; i++) {
// 		if (i < length) {
// 			result[i] = this[i];
// 		} else {
// 			result[i] = arr[i - arr.length];
// 		}
// 	}

// 	return result;
// };

// const arr = [1, 2];
// const arr2 = [3, 4];
// console.time("starting_my_concat");
// console.log(arr.myConcat(arr2));
// console.timeEnd("starting_my_concat");

// console.time("starting_default_concat");
// console.log(arr.concat(arr2));
// console.timeEnd("starting_default_concat");

//########### - copyWithin - ###############
