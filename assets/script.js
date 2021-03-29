const startTimer = document.getElementById('start-btn')
var timeEl = document.querySelector('.time')
var question1 = {
    question:"Which coding language is in charge of making a website look good?",
    answer1:"CSS",
    answer2:"HTML",
    answer3:"Javascript",
    answer4:"Python",
}

var question2 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:"",
}

var question3 = {

}

var question4 = {

}

var secondsLeft = 60;


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {

        clearInterval(timerInterval);

      }
  
    }, 1000);
}

startTimer.addEventListener("click", setTime);

const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)

function startGame() {
console.log('started')
}