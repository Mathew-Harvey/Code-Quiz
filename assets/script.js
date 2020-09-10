//To Do
//Write html with bootstrap 
//style html 
//create 5 questions and answers
//Commonly used data types to NOT include
// 1 strings
// 2 booleens
// 3 alerts
// 4 number
//Conditions in an if/else statement are inclosed with a _______
//1 quotes 
//2 curly brackets
//3 parenthises
//4 square brackets
//Aarray in Java Script can be used to store______
//1 numbers and strings
//2 other arrays
//3 booleens
//4 all of the above
//String values must be enclosed with a __________ when being assigned to variables
//1 commas
//2 curly brackets
//3 quotes
//4 parenthises
//A very useful tool used during development and debugging for printing printing content to the debugger:
//1 Java Script
//2 Terminal / Bash
//3 for loops
//4 Console log
//create a variable to hold user score and initials
//create a timer that counts down but also jumps down 5 second on wrong answer



//----------------------------------------------------------------------------
// Countdown timer
//----------------------------------------------------------------------------
var startingMinutes = 1;
let time = startingMinutes * 75;

var countDownEl = document.getElementById("countdown")

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if (--time < 0) {
        time = 0;
    }
}

