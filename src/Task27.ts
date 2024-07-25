/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

 */



// Blue colour version
let alienColor:string="Blue";
if(alienColor=="Blue"){
    console.log("The player just earned 05 points.")
}
else if(alienColor=="Red"){ 
    console.log("The player just earned 10 points for shooting the alien. ")  
}
else if(alienColor=="Yellow"){
    console.log("The player just earned 15 points.")
}
// Yellow colour version
alienColor="Yellow";
if(alienColor=="green"){
    console.log("The player just earned 5 points.")
}
else if(alienColor=="Red"){ 
    console.log("The player just earned 10 points for shooting the alien.")  
}
else if(alienColor=="Yellow"){
    console.log("the player just earned 15 points.")
}
// Red colour version
alienColor="Red";
if(alienColor=="green"){
    console.log("the player just earned 5 points.")
}
else if(alienColor=="Red"){ 
    console.log("the player just earned 10 points for shooting the alien. ")  
}
else if(alienColor=="Yellow"){
    console.log("the player just earned 15 points.")
}

console.log("--------------------------------------Question-27 completed-------------------------------");