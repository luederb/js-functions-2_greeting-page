console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

var currentTime = new Date().getHours();
var currentWeekDay = new Date().getDay();
// currentTime = 8;
// currentWeekDay = 6;
var greetingMessage = "Hello";
var dayColor = "white";

console.log(
  "Es ist der",
  currentWeekDay,
  ". Tag der Woche um ",
  currentTime,
  "Uhr!"
);

function getGreeting() {
  if (currentTime <= 5) {
    return (greetingMessage = "Good Night");
  }
  if (currentTime <= 12) {
    return (greetingMessage = "Good Morning");
  }
  if (currentTime <= 18) {
    return (greetingMessage = "Good Afternoon");
  } else {
    return (greetingMessage = "Good Night");
  }
}
console.log(getGreeting(currentTime));

function getDayColor() {
  if (currentWeekDay === 1) {
    return (dayColor = "darkgray");
  }
  if (currentWeekDay <= 5) {
    return (dayColor = "lightblue");
  } else {
    return (dayColor = "hotpink");
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
