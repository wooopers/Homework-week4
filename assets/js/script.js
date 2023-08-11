var multipleChoiceQuestions = document.querySelector('.multiple-choice-questions');
var correct = document.querySelector('.correct');
var incorrect = document.querySelector('.incorrect');
var winMessage = document.querySelector('.win');
var loseMessage = document.querySelector('.lose');
var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var clock = document.querySelector('.clock');
var gameOver = document.querySelector('.game-over');
var scoreDisplay = document.querySelector('.score');

// Get the start button element
const startButton = document.querySelector('.start-button');

// Add a click event listener to the start button
startButton.addEventListener('click', startQuiz);

// Define the startQuiz function
function startQuiz() {
  // Hide the start page
  const startPage = document.querySelector('#start-page');
  startPage.style.display = 'none';

  // Show the main challenge section
  const mainChallenge = document.querySelector('#The-Main-Challenge');
  mainChallenge.style.display = 'block';
}


// Array of questions the user will be asked after clicking the start button
var questions = [  {    
    question: "What mountain range is located in the Eastern United States?",    choices: ["Appalachian Mountains", "Rocky Mountains", "Mount Kilimanjaro", "Sierra Nevada Mountains"],
    answer: "Appalachian Mountains"
  },
  {
    question: "What is the Capital of the United States?",
    choices: ["Chicago", "Washington D.C.", "Philadelphia", "New York"], 
    answer: "Washington D.C."
  },
  {
    question: "Where is Mount Everest located?",
    choices: ["Alaska", "Australia", "Mars", "Himalayas"],
    answer: "Himalayas"
  },
  {
    question: "How many moons does the Earth have?",
    choices: ["Zero", "One", "Fifty", "Two hundred and fifty"],
    answer: "One"
   
    const startButton = document.querySelector('.start-button');
    const questionsSection = document.querySelector('.multiple-choice-questions');
    
    startButton.addEventListener('click', () => {
      questionsSection.classList.remove('hidden');
    });
  }   
];

var currentQuestion = 0;
var timeLeft = 60;
var timerInterval;
var userScore = 0;
var highScores = [];
var hasWon = false;

// The init function is called when the page loads
function init() {
  // Get stored scores from localStorage
  getWin();
  getlosses();
  getScore();
}

// Quiz starts when the start button is clicked
function startGame() {
  multipleChoiceQuestions.style.display = 'block';
  timer.textContent = timeLeft;
  startTimer();
  displayQuestions();
}

// The Quiz timer starts when the start button is clicked
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

// Check if the user's answer is correct or incorrect
function checkAnswer(event) {
  var selectedChoice = event.target.textContent;
  var currentQuestionData = questions[currentQuestion];
  if (selectedChoice === currentQuestionData.answer) {
    userScore += 10;
    correct.style.display = 'block';
    setTimeout(function() {
      correct.style.display = 'none';
    }, 1000);
  } else {
    timeLeft -= 10;
    incorrect.style.display = 'block';
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 1000);
  }
  currentQuestion++;
  if (currentQuestion === questions.length || timeLeft === 0) {
    endGame();
  } else {
    display

// The Questions are displayed when the #start-button is clicked
function displayQuestions() {
    var currentQuestionData = questions[currentQuestion];
    document.querySelector(".question").textContent = currentQuestionData.question;
    var choicesList = document.querySelector(".choices");
    choicesList.innerHTML = "";
    for (var i = 0; i < currentQuestionData.choices.length; i++) {
      var choiceElement = document.createElement("li");
      choiceElement.textContent = currentQuestionData.choices[i];
      choiceElement.classList.add("choice");
      choicesList.appendChild(choiceElement);
    }
  }

  startButton.addEventListener('click', function() {
    multipleChoiceQuestions.style.display = 'block';
    startGame();
  });
  