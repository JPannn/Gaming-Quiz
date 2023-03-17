// Create a Quiz App using JavaScript, HTML and CSS
// using the following questions and answers with arrays, objects and functions

// Declare variables from the DOM by data attributes

// Quiz Information | Questions and Answers
// questionNumber tells user which question they are on
const questionNumber = document.querySelector('[data-question-number]');
questionNumber.dataset = 0;
// questionText displays the question
const questionText = document.querySelector('[data-question-text]');
questionText.dataset = "";
// Answer Buttons
const answerButtons = document.querySelectorAll('[data-answer-button]');
answerButtons.dataset = "";
// Quiz Controls | Start, Next, Results, Restart
const startButton = document.querySelector('[data-start-button]');
const nextButton = document.querySelector('[data-next-button]');
const results = document.querySelector('[data-get-results]');
const restartButton = document.querySelector('[data-restart-button]');
// Questions and Answers for the Quiz
const quizQuestions = [
    questions = {
        question: "What game did Mario first appear in?",
        answers: [
            {text: "Super Mario Bros.", correct: false},
            {text: "Donkey Kong", correct: true},
            {text: "Game & Watch", correct: false},
            {text: "", correct: false}
        ],
        question: "Nicknamed King Koopa, who is the arch nemesis of Mario?",
        answers: [
            {text: "Bowser", correct: true},
            {text: "Wario", correct: false},
            {text: "Donkey Kong", correct: false},
            {text: "Diddy Kong", correct: false}
        ]
    }
];


// Start Quiz Function

function generateQuiz(quizQuestions, answers) {

}