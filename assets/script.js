//----------------------------------------------------------------------------
// Countdown timer
//----------------------------------------------------------------------------
// var timerMaster = startTimer(duration, display)
// console.log(timerMaster)

var timer = 0;

function startTimer(display) {

    setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        console.log(seconds)
        if (--timer < 0) {
            return window.location.assign("./assets/end.html");
        }
    }, 1000);
}

function decrementTime(seconds) {
    seconds = seconds - 10; //NOT WORKING 
}
//----------------------------------------------------------------------------
// Start quiz function
//----------------------------------------------------------------------------

var startBtn = document.querySelector("#startbtn");
var questionBox = document.querySelector("#panel-container");
document.getElementById("panel-container").style.visibility = "hidden";
var startButton = document.getElementById("startbtn");
startButton.addEventListener("click", startGameButton);


function startGameButton() {
    console.log("started");
    document.getElementById("startbtn").style.visibility = "hidden";
    document.getElementById("panel-container").style.visibility = "visible";
    timer = 60 * 1.25;
    startTimer(timerText);
}
//---------------------------------------------------------------------------- 
//Variables and questions and answer array 
//----------------------------------------------------------------------------


var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var scoreText = document.getElementById("score");
var timerText = document.querySelector('#countdown');


var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choice1: "Strings",
        choice2: "Booleens",
        choice3: "Alerts",
        choice4: "Number",
        answer: 3
    },
    {
        question: "Conditions in an if/else statement are enclosed with a _______.",
        choice1: "Quotes",
        choice2: "Curly brackets",
        choice3: "Parenthises",
        choice4: "Square brackets",
        answer: 2

    },
    {
        question: "Array in Java Script can be used to store_______.",
        choice1: "Numbers and strings",
        choice2: "Other arrays",
        choice3: "Booleens",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "String values must be enclosed with a __________ when being assigned to variables.",
        choice1: "Commas",
        choice2: "Curly brackets",
        choice3: "Quotes",
        choice4: "Parenthises",
        answer: 1
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger:",
        choice1: "Java Script",
        choice2: "Terminal / Bash",
        choice3: "For loops",
        choice4: "Console log",
        answer: 4
    }
]

//----------------------------------------------------------------------------
// Game mechanics
//----------------------------------------------------------------------------

var CORRECT_BONUS = 1;
var MAX_QUESTIONS = 5;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("./assets/end.html");
    }
    
    
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(function (choice) {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers)
            return;
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer == currentQuestion.answer === true) {
            incrementScore();
        }
        else if (selectedAnswer == currentQuestion.answer === false) {
            decrementTime();
        }
        console.log(selectedAnswer == currentQuestion.answer);
        getNewQuestion();
    });
});

function incrementScore() {
    score += 1;
    scoreText.innerText = + score;
}

startGame();


