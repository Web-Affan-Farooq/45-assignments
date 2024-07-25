"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */
let guests = ["Ayesha", "Shahid", "Aqib", "Ayan"];
console.log("Hi guys, we've just found a bigger table"); // informing about bigger table
guests.push("Rubab"); // adding to end of list
guests.splice(1, 0, "Aashir"); //addingto the middle of the list
guests.forEach((guest) => {
    console.log(`Assalamoalikum ${guest} , you're invited for  dinner`);
});
console.log("--------------------------------------Question-16 completed-------------------------------");
// let Guests:string[] = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
// let dinner_invitation:string = "You are invited to dinner.";
// //Cannot attend
// let Cannot_Attend:string = "Shadab";
// //guest replace
// let new_guest:string = "Haseeb";
// Guests[Guests.indexOf(Cannot_Attend)]=new_guest;
// //print statment
// console.log("Wellcome all we found a bigger dinner table");
// //Add new Guest in the start of the list.
// Guests.unshift("Hamza");
// //Add new Guest in middle of the list.
// let middle_guest:string = "Aqeel";
// let middleindex = Guests.length/2;
// Guests.splice(middleindex,0,middle_guest);
// //Add new Guest in end of the list.
// Guests.push("Behroz");
// //Send massage.
// Guests.map((item)=>console.log(`Dear ${item}, ${dinner_invitation}`));
