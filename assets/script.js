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
// Start quiz function
//----------------------------------------------------------------------------

var startBtn = document.querySelector("#startbtn")
var questionBox = document.querySelector("#panel-container")
document.getElementById("panel-container").style.visibility = "hidden";

function startGameButton() {
    console.log("started")
    document.getElementById("startbtn").style.visibility = "hidden";
    document.getElementById("panel-container").style.visibility = "visible";


    var oneMinuteFifteen = 60 * 1.25,
        display = document.querySelector('#countdown');
    startTimer(oneMinuteFifteen, display);

}
var startButton = document.getElementById("startbtn")
startButton.addEventListener("click", startGameButton)

//----------------------------------------------------------------------------
//Variables and questions and answer array 
//----------------------------------------------------------------------------


const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
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

const CORRECT_BONUS = 1
const MAX_QUESTIONS = 5

function startGame() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};


function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to end page
        return window.location.assign("./assets/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function (choice) {
        const number = choice.dataset["number"];
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
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer == currentQuestion.answer === true) {
            incrementScore();
        }
        // else if (selectedAnswer != currentQuestion.answer != true) {
        //     HERE IS WHERE I NEED TO LINK TO TAKING TIME OFF TIMER

        // }

        console.log(selectedAnswer == currentQuestion.answer);
        getNewQuestion();
    });
});

function incrementScore() {
    score += 1;
    scoreText.innerText = score;

}

startGame();