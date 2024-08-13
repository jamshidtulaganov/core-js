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
console.log(firstElement);

// index can be negative number: -1
