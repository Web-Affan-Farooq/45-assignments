"use strict";
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
let friendsName = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
let message = "Would you come to have dinner with us?";
friendsName.forEach((n) => {
    console.log(`Hello ${n} , ${message}`);
});
console.log("--------------------------------------Question-12 completed-------------------------------");
