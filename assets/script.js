const startTimer = document.getElementById('start-btn')
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions
let currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var timeEl = document.querySelector('.time')

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
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  //nextButton.classList.add(hide)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
      setNextQuestion()
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
} else {
  element.classList.add('wrong')
}
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  { 
    question:"Which coding language is in charge of making a website look good?",
    answers: [
    { text: "CSS", correct: true },
    { text: "HTML", correct: false},
    {text: "Javascript", correct: false},
    {text: "Python", correct: false},
        ]
  },
  { 
    question:"Which coding style is considered the skeleton of a website?",
    answers: [
    { text: "CSS", correct: false },
    { text: "HTML", correct: true},
    {text: "Javascript", correct: false},
    {text: "Python", correct: false},
        ]
  },
  { 
    question:"Which coding language makes websites function?",
    answers: [
    { text: "CSS", correct: false},
    { text: "HTML", correct: false},
    {text: "Windows", correct: false},
    {text: "Javascript", correct: true},
        ]
  },
  { 
    question:"Which browser(s) support HTML, CSS and Javascript?",
    answers: [
    { text: "Chrome", correct: false},
    { text: "Explorer", correct: false},
    {text: "Firefox", correct: false},
    {text: "All of the above", correct: true},
        ]
  }]