console.log(
  "%c<Code Started>",
  "color: white; background-color:blue; font-size: 1.5rem; font-weight: bold;"
);

let name = prompt("Enter Your Name:");
let raw_Age = prompt("Enter Your Age:");
let seat = prompt("Choose Your Seat:");
let movieType = prompt("Choose Your Movie Type {Horror - Action - Comedy}:");
let ticketType;
let time = new Date();
let age = Number(raw_Age);

if (age >= 20) {
  ticketType = "Senior";
} else if (age >= 18) {
  ticketType = "Adult";
} else if (age >= 15) {
  ticketType = "Teenager";
} else ticketType = "Child";

switch (movieType.toLowerCase()) {
  case "horror":
    movieType = "Horror";
    break;
  case "action":
    movieType = "Action";
    break;
  case "comedy":
    movieType = "Comedy";
    break;
  default:
    movieType = "Not Defined";
    break;
}

let Access;
if (age < 18 && movieType == "Horror") Access = "Not Allowed";
else Access = "Allowed";

let CinemaSystem = `
    Name : ${name}
    Age : ${age}
    Ticket Type : ${ticketType}
    Movie Type : ${movieType}
    Seat : ${seat}
    Access : ${Access}
    Booking Time : ${time}
`;

console.log(CinemaSystem);

console.log(
  "%c</Code Ended>",
  "color: white; background-color:blue; font-size: 1.5rem; font-weight: bold;"
);
