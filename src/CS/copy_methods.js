// Shallow copy and Deep copy

const arr1 = [1, 2, 3, [10, 11]];
const shallowCopy = [...arr1];

shallowCopy[3][0] = 100;

console.log(shallowCopy, arr1);

// ########################### - SHALLOW COPY - ############################

/*
+-----------+           +------------------+
arr1:  |   Array   |   ------> | [1, 2, 3, [10, 11]]  |
       +-----------+           +------------------+
           /   |    |     \
          /    |    |      \
         /     |    |       \
       /      |     |         \
      /       |     |          \
     |        |     |           |
+-------+  +----+  +----+   +----------------+
|  1    |  | 2  |  | 3  |   | [10, 11]       |
+-------+  +----+  +----+   +----------------+
                              |
                              |
               +--------------+--------------+
               |                             |
+----------------+                 +-----------------+
| shallowCopy    | ------->      | Same nested array |
+----------------+                 +-----------------+

*/

/*

shallowCopy is save the value with reference that is being
like we have nested objects or maybe arrays , 
if the nested array elements or object elements save the memory with reference
shallow copying save the reference and

*/

//Ex: with concat()

const firstArray = [1, 2];
const secondArray = [3, 4, [100]];

// it has reference in secondArray [100] copying with this reference

const shallowCopyArray = firstArray.concat(secondArray);

// when changes shallowCopyArray then when reference exist to make changes
// ex:
shallowCopyArray[4] = 1001; // change the last arr

// secondArray = [3, 4, [1001]];

const copiedFirstArr = firstArray;
copiedFirstArr[0] = 1000;

console.log(copiedFirstArr, firstArray);

// Reference types: Object, Array, Functions, Map, Set, WeakMap, WeakSet, Date, RegEx
// Primitive types: Number, String, Boolean, Null, Undefined, BigInt, Symbol

// ########################### - DEEP COPY - ############################

/*
    Deep copying copy without nested reference
    like when change copied value, other value don't change
*/

const userObj = { age: 10 };
const deepCopy = JSON.parse(JSON.stringify(userObj));

deepCopy.age = 11;

console.log(userObj, deepCopy);

// # how can make deep copy

// #1 JSON serialization JSON.parse() and JSON.stringify()
// #2 recursive function
