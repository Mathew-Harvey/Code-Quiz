var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");



var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var MAX_HIGH_SCORES = 5


console.log(highScores)
finalScore.innerText = mostRecentScore


username.addEventListener("keyup", function () {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value
})



function saveHighScore(e) {
    console.log("tbutton clicked!!!!!")
    e.preventDefault();

    var score = {
        score:finalScore.innerText,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.reload(true)
  
}   

var highScoresList = document.getElementById("highScoreList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML=highScores.map(function (score) {
return(`<li class="high-score">${score.name}-${score.score}</li>`)
}).join ("")