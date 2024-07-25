/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 */
let guests:string[]= ["Ayesha", "Shahid","Aashir", "Aqib", "Ayan","Rubab"]; //updated guestlist of answer 16

console.log(`Hey guy's ! I've just found that our new dinner table won’t arrive in time for the dinner, and we have space for only two guests.`);   // message for informing about tragedy
guests.push();
guests.push();
guests.push();
guests.push();
guests.forEach((guest:string)=> {
    console.log(`Hello ${guest} you're still invited for the dinner`);
})
guests.push();
guests.push();

console.log("--------------------------------------Question-17 completed-------------------------------");
