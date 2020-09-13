//To Do
//Write html with bootstrap 
//style html 
//create a variable to hold user score and initials
//create a timer that counts down but also jumps down 5 second on wrong answer


//----------------------------------------------------------------------------
// Questions
//----------------------------------------------------------------------------

var questionOne = "Commonly used data types do NOT include:"
var questionOneAnswerOne = "Strings"
var questionOneAnswerTwo = "Booleens"
var questionOneAnswerThree = "Alerts"
var questionOneAnswerFour = "Number"


var questionTwo = "Conditions in an if/else statement are enclosed with a _______."
var questionTwoAnswerOne = "Quotes"
var questionTwoAnswerTwo = "Curly brackets"
var questionTwoAnswerThree = "Parenthises"
var questionTwoAnswerFour = "Square brackets"

var questionThree = "Array in Java Script can be used to store_______."
var questionThreeAnswerOne = "Numbers and strings"
var questionThreeAnswerTwo = "Other arrays"
var questionThreeAnswerThree = "Booleens"
var questionThreeAnswerFour = "All of the above"

var questionFour = "String values must be enclosed with a __________ when being assigned to variables."
var questionFourAnswerOne = "Commas"
var questionFourAnswerTwo = "Curly brackets"
var questionFourAnswerThree = "Quotes"
var questionFourAnswerFour = "Parenthises"

var questionFive = "A very useful tool used during development and debugging for printing content to the debugger:"
var questionFiveAnswerOne = "Java Script"
var questionFiveAnswerTwo = "Terminal / Bash"
var questionFiveAnswerThree = "For loops"
var questionFiveAnswerFour = "Console log"

//----------------------------------------------------------------------------
// Question array
//----------------------------------------------------------------------------

var question = [
    {
        question: questionOne,
        answers: [
            { questionOneAnswerOne, correct: false },
            { questionOneAnswerTwo, correct: false },
            { questionOneAnswerThree, correct: true },
            { questionOneAnswerFour, correct: false },
        ]
    },
    {
        question: questionTwo,
        answers: [
            { questionTwoAnswerOne, correct: false },
            { questionTwoAnswerTwo, correct: true },
            { questionTwoAnswerThree, correct: false },
            { questionTwoAnswerFour, correct: false },
        ]
    },
    {
        question: questionThree,
        answers: [
            { questionThreeAnswerOne, correct: false },
            { questionThreeAnswerTwo, correct: false },
            { questionThreeAnswerThree, correct: false },
            { questionThreeAnswerFour, correct: true },
        ]
    },
    {
        question: questionFour,
        answers: [
            { questionFourAnswerOne, correct: false },
            { questionFourAnswerTwo, correct: false },
            { questionFourAnswerThree, correct: true },
            { questionFourAnswerFour, correct: false },
        ]
    },
    {
        question: questionFive,
        answers: [
            { questionFiveAnswerOne, correct: false },
            { questionFiveAnswerTwo, correct: false },
            { questionFiveAnswerThree, correct: false },
            { questionFiveAnswerFour, correct: true },
        ]
    },
]
console.log(question)


//----------------------------------------------------------------------------
// start quiz function
//----------------------------------------------------------------------------

var startBtn = document.querySelector("#startbtn")
var questionBox = document.querySelector("#panel-container")
document.getElementById("panel-container").style.visibility = "hidden";

function startGame() {
    console.log("started")
    document.getElementById("startbtn").style.visibility = "hidden";
    document.getElementById("panel-container").style.visibility = "visible";
    orderedQuestions = question.sort()
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    var fiveMinutes = 60 * 1.25,
        display = document.querySelector('#countdown');
    startTimer(fiveMinutes, display);
    setNextQuestion()
}

//----------------------------------------------------------------------------
// Countdown timer
//----------------------------------------------------------------------------

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}



//----------------------------------------------------------------------------
// Working code here... bit crap
//----------------------------------------------------------------------------



//Variable to hold score

var myScore = 0

document.querySelector("#btn1").textContent = questionThreeAnswerTwo;


document.querySelector("#question").textContent = questionOne


function showQuestionOne() {
    

}



var startButton = document.getElementById("startbtn")
var questionContainerEl = document.getElementById("questionbox")
var questionEl = document.getElementById("question")
var answerBtnsEl = document.getElementById("answer-buttons") //fix this with html

startButton.addEventListener("click", startGame)

var orderedQuestions, currentQuestionIndex


