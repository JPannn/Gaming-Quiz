// Create a Quiz App using JavaScript, HTML and CSS
// using the following questions and answers with arrays, objects and functions
// Declare variables from the DOM by data attributes

// Quiz Information | Questions and Answers
const questionNumber = document.querySelector('[data-question-number]'); // questionNumber tells user which question they are on
const questionText = document.querySelector('[data-question-text]'); // questionText displays the question
const displayAnswer = document.querySelector('[data-display-answer]'); // checkAnswer checks if the answer is correct or not
// Answer Buttons
const answerButtons = document.querySelectorAll('[data-answer-button]');
// Quiz Controls | Start, Next, Results, Restart
const startButton = document.querySelector('[data-start-button]');
const nextButton = document.querySelector('[data-next-button]');
const results = document.querySelector('[data-get-results]');
const restartButton = document.querySelector('[data-restart-button]');
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
            {text: "Mushroom", correct: false}
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

// initialize the quiz
generateQuiz();
// Start Quiz Function

function generateQuiz() {

    startButtonFunctionality();
    nextButtonFunctionality();
    function startButtonFunctionality() {
        // Display the first question number and question along with answers, once the start button is clicked.
        startButton.addEventListener('click', () => {
            // Hide the start button
            startButton.classList.add('hide');
            // Display the first question number and question along with answers
            questionNumber.innerText = 1;
            questionText.innerText = quizQuestions[0].question;
            answerButtons.forEach((button, index) => {
                button.innerText = quizQuestions[0].answers[index].text;
            });
            // Check if the answer is correct or not
            correctIncorrect();
        });
    }

    function correctIncorrect() {
        // check answer button for correct or incorrect after questionAnswers is displayed
        answerButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // enable the answer button
                button.disabled = false;
                if(quizQuestions[0].answers[index].correct !== true) {
                    displayAnswer.innerText = "Incorrect!";
                } else {
                    displayAnswer.innerText = "Correct!";
                    // disable all answer buttons after correct answer is selected
                    answerButtons.forEach((button) => button.disabled = true);
                    // unhide the next button
                    nextButton.classList.remove('hide');
                }
            });
        });
    }

    function nextButtonFunctionality() {
        // Display the next question number and question along with answers, once the next button is clicked.
    }

}

// Coding, Gaming, Running, Reading, Music, Watching Youtube to study and enjoy