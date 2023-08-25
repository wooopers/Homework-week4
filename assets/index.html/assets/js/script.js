document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.start-button');
  const instructionsSection = document.querySelector('#instructions');
  const questionsSection = document.querySelector('.multiple-choice-questions');
  const questionContainer = document.querySelector('#multiple-choice-questions');
  const winMessage = document.querySelector('.win');
  const loseMessage = document.querySelector('.lose');
  const resetButton = document.querySelector('.reset-button');
  const timerCount = document.querySelector('.timer-count');
  const timerSection = document.querySelector('.timer');

  const questionPaths = [
    '/html/question1.html', // Path to your question HTML files
    '/html/question2.html',
    '/html/question3.html',
    '/html/question4.html',
    '/html/results.html',
    // Add more paths as needed
  ];
  let currentQuestion = 0;

  function loadQuestion() {
    if (currentQuestion < questionPaths.length) {
      fetch(questionPaths[currentQuestion])
        .then(response => response.text())
        .then(data => {
          questionContainer.innerHTML = data;
          bindQuestionEventListeners();
        });
    } else {
      endGame();
    }
  }

  function nextQuestion() {
    currentQuestion++;
    loadQuestion();
  }

  function startQuiz() {
    startButton.style.display = 'none';
    instructionsSection.style.display = 'none';
    questionsSection.classList.remove('hidden');
    loadQuestion(); // Load the first question
  }

  function checkAnswer(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
      winMessage.style.display = 'block';
    } else {
      loseMessage.style.display = 'block';
    }

    setTimeout(() => {
      winMessage.style.display = 'none';
      loseMessage.style.display = 'none';
      nextQuestion();
    }, 1000);
  }

  function endGame() {
    questionsSection.style.display = 'none';
    resetButton.style.display = 'block';
  }

  function bindQuestionEventListeners() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        const selectedChoice = choice.textContent.trim();
        const currentQuestionData = questions[currentQuestion];
        checkAnswer(selectedChoice, currentQuestionData.answer);
      });
    });
  }

  startButton.addEventListener('click', startQuiz);
  resetButton.addEventListener('click', () => {
    resetButton.style.display = 'none';
    startButton.style.display = 'block';
    instructionsSection.style.display = 'block';
    currentQuestion = 0; // Reset currentQuestion to 0
    questionContainer.innerHTML = ''; // Clear the question container
  });

});

