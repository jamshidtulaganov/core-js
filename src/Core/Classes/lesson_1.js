// Learn Classes

//#1 Classes create with "new" keyword

class MyFirstClass {
	constructor(name) {
		this.name = name;
	}

	hasName() {
		return this.name ? true : false;
	}
}

// #2 when we want to use class with always use "new"

const test = new MyFirstClass("jam");
console.dir(test.hasName());

// class has constructor function for getting parameters

// Question what is class ? Class is a kind of function

function MyConstructorFunc(name) {
	this.name = name;
}

const test2 = new MyConstructorFunc("jamshid");
MyConstructorFunc.prototype.hasName = function () {
	return this.name ? true : false;
};
console.log(test2.hasName());

//#3 defining class expression

const MySecondClass = class {
	constructor() {}

	// methods
};

// defining classes with name expression

const MyThirdClass = class Test2 {
	//
};

// Test2 only access inside class scope

// #------------------------ Getters/Setters ----------------------------------------
