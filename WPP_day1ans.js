// Write a JS Program to display the current day and time in the following format.
// Sample O/P : Today is: Tuesday
//              Current time is: 10:30:38 PM


const date = new Date();
const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

const day = days[date.getDay()];

console.log("Today is:", day);
console.log(`Current time is: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${date.getHours() > 11 ? 'PM' : 'AM'}`);