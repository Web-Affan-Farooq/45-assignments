/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/


let friendsName:string[] = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
let message:string = "Would you come to have dinner with us?";
friendsName.forEach((n:string)=> {
    console.log(`Hello ${n} , ${message}`);
})

console.log("--------------------------------------Question-12 completed-------------------------------");
