//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”let FavTransportation:string[] = ["G wagon", "Range Rover", "Honda city"];

let FavTransportation:string[] = ["G wagon", "Range Rover", "Honda city"];
let statement:string = "I would like to own a"
FavTransportation.forEach((n:string)=> {
    console.log(`${statement} ${n}`);
})

console.log("--------------------------------------Question-13 completed-------------------------------");
