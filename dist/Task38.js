"use strict";
/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// making function:
function describe_cities(city, country = "Pakistan") {
    console.log(`\n${city} is in ${country}.`);
}
// Calling Function with city names & By-default country:
describe_cities("Lahore");
describe_cities("Karachi");
describe_cities("Islamabad");
// Calling Function with city name & country name:
describe_cities("Istanbul", "Turkey");
console.log("--------------------------------------Question-38 completed-------------------------------");
