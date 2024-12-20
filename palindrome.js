//String Array Operations- Palindrome

//declare two variables
let firstVar = prompt("Enter first word: ");
let secondVar = prompt("Enter second word: ");

//log to the console the original string
console.log(firstVar);
console.log(secondVar);

//reverse the string and log to the console
let revFirstVar = firstVar.split('').reverse().join('');
console.log(revFirstVar);
let revSecondVar = secondVar.split('').reverse().join('');
console.log(revSecondVar);

//checks the truth value if the original string is equivalent to the reversed string
let is1stEquivalent = firstVar === firstVar.split('').reverse().join('');
console.log(is1stEquivalent);
let is2ndEquivalent = secondVar === secondVar.split('').reverse().join('');
console.log(is2ndEquivalent);