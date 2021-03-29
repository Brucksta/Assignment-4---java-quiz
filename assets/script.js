const startTimer = document.getElementById('start-btn')
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions
let currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var timeEl = document.querySelector('.time')
]
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


//starting game
startButton.addEventListener('click', startGame)

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
  questionElement.innerText = question.question
}

var questions = [
  { question:"Which coding language is in charge of making a website look good?",
  answers: [
    { text: "CSS",
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