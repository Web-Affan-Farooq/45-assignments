"use strict";
/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let car = `subaru`;
console.log("if car == `subaru`? i predict true.");
console.log(car == `subaru`); // test 1:equality comparison (==)
console.log("if car === `subaru`? i predict true.");
console.log(car === `subaru`); // test 2:strict equality comparison (===)
console.log("if car != `subaru`? i predict false.");
console.log(car != `subaru`); // test 3:inequality comparison (!=)
console.log("if car !== `subaru`? i predict false.");
console.log(car !== `subaru`); // test 4:strict inequality comparison (!==)
console.log("if car < `subaru`? i predict false.");
console.log(car < `subaru`); // test 5:less than comparison (<)
console.log("if car <= `subaru`? i predict true.");
console.log(car <= `subaru`); // test 6:less than or equal to comparison (<=)
console.log("if car > `subaru`? i predict false.");
console.log(car > `subaru`); // test 7:greaer than comparison (>)
console.log("if car >= `subaru`? i predict true.");
console.log(car >= `subaru`); // test 8:greaer than or equal to comparison (>=)
console.log("if !!car? i predict true.");
console.log(!!car); // test 9:Advance operator (!!)
console.log("if !car? i predict false.");
console.log(!car); // test 10:Not true (!)
console.log("--------------------------------------Question-23 completed-------------------------------");
