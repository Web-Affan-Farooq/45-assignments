"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Penn & Teller", "Dynamo", "Criss Angel", "Ricky Jay ", "Doug Henning",];
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
show_magicians(magicians);
console.log("--------------------------------------Question-41 completed-------------------------------");
