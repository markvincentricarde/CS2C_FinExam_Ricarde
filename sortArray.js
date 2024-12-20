//Single Dimensiional Array Operations-Array Sorting

//single dimensional arrays, numerbers and strings
let arrNum = [24, 65,21, 5, 9, 32, 42, 80, 57];
let arrNames = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

//merge both arrays into a single array and log it to the console
let mergeArr = arrNum.concat(arrNames);
console.log(mergeArr);

//sort arrNum numerically in reverse and log it to the console
let sortNum = arrNum.sort((a, b) => b - a);
console.log(sortNum);

//sort arrNames alphabetically and log it to the console
let sortName = arrNames.sort();
console.log(sortName);