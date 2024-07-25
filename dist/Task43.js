"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */
let magicians = ["Penn & Teller", "Dynamo", "Criss Angel", "Ricky Jay ", "Doug Henning",];
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
console.log("Orignal magicians:");
show_magicians(magicians);
console.log(`\nGreat magicians:`);
show_magicians(greatMagicians);
console.log("--------------------------------------Question-43 completed-------------------------------");
