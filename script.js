// Create a Quiz App using JavaScript, HTML and CSS
// using the following questions and answers with arrays, objects and functions
// Declare variables from the DOM by data attributes

// Quiz Information | Questions and Answers
const quizInfo = document.querySelector('[data-quiz-info]'); // quizInfo displays the quiz information
const questionNumber = document.querySelector('[data-question-number]'); // questionNumber tells user which question they are on
const questionText = document.querySelector('[data-question-text]'); // questionText displays the question text
const displayScore = document.querySelector('[data-display-score]'); // userScore displays the user's score
// Answer Buttons Container | Displays the answer buttons
const answerButtonsContainer = document.querySelector('[data-display-answer]');
// let answerButtons = document.querySelectorAll('[data-answer-button]');
// Quiz Controls | Start, Next, Results, Restart
const startButton = document.querySelector('[data-start-button]');
const nextButton = document.querySelector('[data-next-button]');
const resultsButton = document.querySelector('[data-results-button]');
const results = document.querySelector('[data-get-results]');
const restartButton = document.querySelector('[data-restart-button]');
// Current Array Index
questionNumber.dataset.value = 0;
// User Score
let userScore = -100;

// Questions and Answers for the Quiz
const quizQuestions = [
    // create key-value pairs for each question and answer from the quizQuestions array
    {
        question: "What game did Mario first appear in?",
        answers: [
            {text: "Super Mario Bros.", correct: false},
            {text: "Donkey Kong", correct: true},
            {text: "Game & Watch", correct: false},
            {text: "Metroid", correct: false}
        ]
    },

    {
        question: "Nicknamed King Koopa, who is the arch nemesis of Mario?",
        answers: [
            {text: "Bowser", correct: true},
            {text: "Wario", correct: false},
            {text: "Donkey Kong", correct: false},
            {text: "Diddy Kong", correct: false}
        ]
    },
    {
        question: "What is the name of the princess that Mario must save?",
        answers: [
            {text: "Peach", correct: true},
            {text: "Daisy", correct: false},
            {text: "Rosalina", correct: false},
            {text: "Toadstool", correct: false}
        ]
    },
    {
        question: "What is the name of the mushroom that gives Mario super powers?",
        answers: [
            {text: "Super Mushroom", correct: true},
            {text: "Mega Mushroom", correct: false},
            {text: "Ultra Mushroom", correct: false},
            {text: "Giga Mushroom", correct: false}
        ]
    },
    {
        question: "What is the name of the turtle that helps Mario in his adventures?",
        answers: [
            {text: "Toad", correct: false},
            {text: "Yoshi", correct: true},
            {text: "Koopa", correct: false},
            {text: "Goomba", correct: false}
        ]
    },
    {
        question: "What is the name of the castle that Bowser lives in?",
        answers: [
            {text: "Bowser's Castle", correct: true},
            {text: "Bowser's Fortress", correct: false},
            {text: "Bowser's Keep", correct: false},
            {text: "Bowser's Tower", correct: false}
        ]
    },
    {
        question: "What is the name of the game that Mario and Luigi first appeared in?",
        answers: [
            {text: "Super Mario Bros.", correct: false},
            {text: "Donkey Kong", correct: false},
            {text: "Game & Watch", correct: false},
            {text: "Mario Bros.", correct: true}
        ]
    },
    {
        question: "Mario was named after a real estate developer, what was his name?",
        answers: [
            {text: "Mario Abdi", correct: false},
            {text: "Mario Mine", correct: false},
            {text: "Anne T.Kwayted", correct: false},
            {text: "Mario Segale", correct: true}
        ]
    },
    {
        question: "Which of the following is NOT a profession Mario has accepted?",
        answers: [
            {text: "Plumber", correct: false},
            {text: "Firefighter", correct: false},
            {text: "Doctor", correct: false},
            {text: "Graphic Designer", correct: true}
        ]
    },
    {
        question: "Mario was known as what before the American release of Donkey Kong?",
        answers: [
            {text: "Jumpman", correct: true},
            {text: "Sonic", correct: false},
            {text: "Plumber", correct: false},
            {text: "Papa Smurf", correct: false}
        ]
    }
];
// Quiz Logic | Shuffles the Questions but not the Answers
const shuffledQuestions = quizQuestions.sort(() => Math.random() - .5);
// Start Quiz
generateQuiz();

function generateQuiz(){
    // Invoke functions
    startButtonFunctionality();
    nextButtonFunctionality();
    // restartButtonFunctionality();

    // Start Button Functionality
    function startButtonFunctionality() {
        startButton.addEventListener('click', function() {
            // Hide Start Button
            startButton.classList.add('hide');
            // Show Buttons needed for Quiz
            nextButton.classList.remove('hide');
            // Show Information needed for Quiz
            quizInfo.classList.remove('hide');
            // Show Question Number, Question Text and Answer Buttons 
            showQuestion();
            showAnswers();
            checkAnswer();
            updateQuestionNumber();
        })

    }

    function showQuestion() {
        if (questionNumber.dataset.value != 10) {
            // Display the question text
            questionText.innerText = shuffledQuestions[questionNumber.dataset.value].question;
        } else {
            //Hide question number
            questionNumber.classList.add('hide');
            //Hide question text
            questionText.classList.add('hide');
        }
    }

    function updateQuestionNumber() {
        // Increment the question number
        questionNumber.dataset.value++;
        // Display the question number
        questionNumber.innerText = `Question ${questionNumber.dataset.value}.`;
    }

    function showAnswers() {
                // Loop through the answers array and create the answer buttons to display
                Array.from(shuffledQuestions[questionNumber.dataset.value].answers).forEach(answer => {
                    // Create answer button
                    const tempButton = document.createElement('button');
                    // Add class to answer button
                    tempButton.classList.add('answerContainer');
                    // Add text to answer button
                    tempButton.innerText = answer.text;
                    // Add answer button to answer buttons container
                    answerButtonsContainer.append(tempButton);
                    // if answer is correct add 'correct' class to button else add 'incorrect' class
                    if (answer.correct == true) {
                        tempButton.dataset.correct = answer.correct;
                    } else if (answer.correct == false){
                        tempButton.dataset.incorrect = answer.correct;
                    }
                });
    }

    function checkAnswer() {
        // only check answer if button clicked is in answer buttons container
        // Add event listener to answer buttons container
        answerButtonsContainer.addEventListener('click', function(e) {
            // If the correct answer add 'correct' class to button else add 'incorrect' class
                if (e.target.dataset.correct) {
                    e.target.classList.add('correct');
                    // Increment the user score
                    userScore+=5;
                    // Display the user score
                    displayScore.innerText = `userScore: ${userScore}`;
                } else if (e.target.dataset.incorrect) {
                    e.target.classList.add('incorrect');
                }
                // disable the answer buttons container
                answerButtonsContainer.classList.add('disabled');
            });
    }
    function resetState() {
        //clear the answer buttons container
        answerButtonsContainer.innerText = '';
        //remove 'disabled' class from answer buttons container
        answerButtonsContainer.classList.remove('disabled');
        //remove 'correct' class from answer buttons
        Array.from(answerButtonsContainer.children).forEach(button => {
            button.classList.remove('correct');
        });
        //remove 'incorrect' class from answer buttons
        Array.from(answerButtonsContainer.children).forEach(button => {
            button.classList.remove('incorrect');
        });


    }

    function nextButtonFunctionality() {
        nextButton.addEventListener('click', () => {
            resetState();
            showQuestion();
            showAnswers();
            checkAnswer();
            updateQuestionNumber();
            if(questionNumber.dataset.value == 10) {
                nextButton.classList.add('hide');
                resultsButton.classList.remove('hide');
                resultsButtonFunctionality();
            }
        });
    }

    function resultsButtonFunctionality() {
        resultsButton.addEventListener('click', () => {
            console.log(userScore);
            // remove answer buttons container
            answerButtonsContainer.innerText = '';
            answerButtonsContainer.classList.add('hide');
            // Hide quiz info
            quizInfo.classList.add('hide');
            // Show results
            results.classList.remove('hide');
            // userScore gets put into a range of 3 different results; -100 - 0, 1 - 100, 101 - 200
            // use a switch statement to determine which result to display
            switch (true) {
                case userScore <= 0:
                    // Low Score
                    results.innerText = 'You are a disgrace to the Mushroom Kingdom';
                    break;
                case userScore >= 1 && userScore <= 100:
                    // Okay Score
                    results.innerText = 'Mario would be proud of you';
                    break;
                case userScore >= 101 && userScore <= 200:
                    // High Score
                    results.innerText = 'You are a true Super Mario Fan';
                    break;
                default:
                    results.innerText = 'Did you even take the quiz?';
                    break;
            }
        });
    }
}