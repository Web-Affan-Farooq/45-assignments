"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Sami", "Shahid", "Aqib", "Ayan"];
// let dinnerInvitation:string = "You are invited to dinner.";
// //Cannot attend
// let cannotAttend:string = "Shadab";
// console.log(`${cannotAttend} cannot attend make it, for dinner.`);
// //Guest replace
// let newguest:string = "Haseeb";
// guests0[guests0.indexOf(cannotAttend)]=newguest;
// //updated massage
// guests0.map((item)=>console.log(`Hi ${item}, ${dinnerInvitation}`));
let notInvited = "Sami";
console.log(`Sorry ${notInvited} you're not invited`);
guests.splice(0, 1, "Ayesha");
guests.forEach((guest) => {
    console.log(`${guest}You're still invited`);
});
console.log("--------------------------------------Question-15 completed-------------------------------");
