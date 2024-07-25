"use strict";
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// making a function
function make_shirt(size = "Large", printedText = "I Love TypeScript") {
    console.log(`\nCreating a "${size}" size shirt with "${printedText}" print on it.`);
}
// calling function with by-default values:
make_shirt();
// calling function with new size & by-default message:
make_shirt("Medium");
// calling function with new values:
make_shirt("Small", "Coding Is Life");
console.log("--------------------------------------Question-37 completed-------------------------------");
