/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicians: string[] = ["Penn & Teller","Dynamo","Criss Angel", "Ricky Jay ","Doug Henning", ];
function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}
show_magicians(magicians);
// add function to modifies array
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] +" "+"The Great";
  }
}
make_great(magicians);
show_magicians(magicians);
console.log("--------------------------------------Question-42 completed-------------------------------");
