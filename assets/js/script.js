// JavaScript in script.js
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.start-button');
  const instructionsSection = document.querySelector('.instructions');
  const questionsSection = document.querySelector('.multiple-choice-questions');
  const questionElement = document.querySelector('.question');
  const choicesList = document.querySelector('.choices');
  const winMessage = document.querySelector('.win');
  const loseMessage = document.querySelector('.lose');
  const resetButton = document.querySelector('.reset-button');
  const timerCount = document.querySelector('.timer-count');
  const timerSection = document.querySelector('.timer');

  let currentQuestion = -1;

  const questions = [
    // Array of questions the user will be asked after clicking the start button
    {
      question: "What mountain range is located in the Eastern United States?",
      choices: ["Appalachian Mountains", "Rocky Mountains", "Mount Kilimanjaro", "Sierra Nevada Mountains"],
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
    }
  ];

  function startQuiz() {
    console.log('startQuiz function is called!');
    startButton.style.display = 'none';
    instructionsSection.style.display = 'none';
    questionsSection.classList.remove('hidden');
    nextQuestion();
  }

  function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      const currentQuestionData = questions[currentQuestion];
      questionElement.textContent = currentQuestionData.question;
      choicesList.innerHTML = '';

      currentQuestionData.choices.forEach((choice) => {
        const choiceElement = document.createElement('li');
        choiceElement.textContent = choice;
        choiceElement.classList.add('choice');
        choiceElement.addEventListener('click', () => checkAnswer(choice, currentQuestionData.answer));
        choicesList.appendChild(choiceElement);
      });
    } else {
      endGame();
    }
  }

  function checkAnswer(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
      winMessage.style.display = 'block'; // Display win message
    } else {
      loseMessage.style.display = 'block'; // Display lose message
    }

    setTimeout(() => {
      winMessage.style.display = 'none';
      loseMessage.style.display = 'none';
      nextQuestion();
    }, 1000);
  }

  function endGame() {
    questionsSection.style.display = 'none'; // Hide questions section
    resetButton.style.display = 'block'; // Display reset button
  }

  startButton.addEventListener('click', startQuiz);

  // Add an event listener to the reset button to restart the quiz
  resetButton.addEventListener('click', () => {
    resetButton.style.display = 'none';
    startButton.style.display = 'block';
    instructionsSection.style.display = 'block';
    currentQuestion = -1;
  });
});
