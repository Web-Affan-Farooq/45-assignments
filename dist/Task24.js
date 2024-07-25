"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
Object.defineProperty(exports, "__esModule", { value: true });
// equallity with strings ..
console.log("Testing equality with strings.");
console.log("apple" == "apple"); //true
// Using lower case function ..
console.log("Testing with lower case.");
console.log("Crypto".toLowerCase() == "crypto"); //true
// numerical tests ..
console.log("Numerical tests.");
console.log(6 > 9); //false
console.log(6 < 9); //true
// testing using "and" & "or" operators..
console.log("Tests with 'and' & 'or'.");
console.log(true && false); //false
console.log(true || false); //true
// test whether an item is in an array ..
let guests = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
console.log("Is 'Ayan' in guests array?");
console.log(guests.includes("Ayan")); //true
// test whether an item is not in an array ..
console.log("Is 'Hamza' is not in guests array?");
console.log(!guests.includes("Hamza")); //true
console.log("--------------------------------------Question-24 completed-------------------------------");
