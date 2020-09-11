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

//----------------------------------------------------------------------------
// Questions
//----------------------------------------------------------------------------

var questionOne = "Commonly used data types do NOT include:"
var questionOneAnswerOne = "1.  Strings"
var questionOneAnswerTwo = "2.  Booleens"
var questionOneAnswerThree = "3.  Alerts"
var questionOneAnswerFour = "4.  Number"


var questionTwo = "Conditions in an if/else statement are enclosed with a _______."
var questionTwoAnswerOne = "1.  Quotes" 
var questionTwoAnswerTwo = "2.  Curly brackets"
var questionTwoAnswerThree = "3.  Parenthises"
var questionTwoAnswerFour = "4.  Square brackets"

var questionThree = "Array in Java Script can be used to store_______."
var questionThreeAnswerOne = "1.  Numbers and strings"
var questionThreeAnswerTwo = "2.  Other arrays"
var questionThreeAnswerThree = "3.  Booleens"
var questionThreeAnswerFour = "4.  All of the above"

var questionFour = "String values must be enclosed with a __________ when being assigned to variables."
var questionFourAnswerOne = "1.  Commas"
var questionFourAnswerTwo = "2.  Curly brackets"
var questionFourAnswerThree = "3.  Quotes"
var questionFourAnswerFour = "4.  Parenthises"

var questionFive = "A very useful tool used during development and debugging for printing content to the debugger:"
var questionFiveAnswerOne = "1.  Java Script"
var questionFiveAnswerTwo = "2.  Terminal / Bash"
var questionFiveAnswerThree = "3.  For loops"
var questionFiveAnswerFour = "4.  Console log"

//Variable to hold score

var myScore = 0

document.querySelector("#answer-1").textContent = questionThreeAnswerTwo;
// document.querySelector("#answer-2").textContent = answer-One;
// document.querySelector("#answer-3").textContent = answer-One;
// document.querySelector("#answer-4").textContent = answer-One;
// document.querySelector("#answer-5").textContent = answer-One;

function  showQuestionOne() {



}



var questionOneEl = document.querySelector("#question").textContent = questionOne;
var questionTwoEl = document.querySelector("#question").textContent = questionTwo;
var questionThreeEl = document.querySelector("#question").textContent = questionThree;
var questionFourEl = document.querySelector("#question").textContent = questionFour;
var questionFiveEl = document.querySelector("#question").textContent = questionFive;



