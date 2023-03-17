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
        question: "What game did Mario first appear in?", // 1
        answers: [
            {text: "Super Mario Bros.", correct: false},
            {text: "Donkey Kong", correct: true},
            {text: "Game & Watch", correct: false},
            {text: "", correct: false}
        ],
        question: "Nicknamed King Koopa, who is the arch nemesis of Mario?",// 2
        answers: [
            {text: "Bowser", correct: true},
            {text: "Wario", correct: false},
            {text: "Donkey Kong", correct: false},
            {text: "Diddy Kong", correct: false}
        ],
        question: "What is the name of the princess that Mario must save?", // 3
        answers: [
            {text: "Peach", correct: true},
            {text: "Daisy", correct: false},
            {text: "Rosalina", correct: false},
            {text: "Toadstool", correct: false}
        ],
        question: "What is the name of the mushroom that gives Mario super powers?", // 4
        answers: [
            {text: "Super Mushroom", correct: true},
            {text: "Mega Mushroom", correct: false},
            {text: "Ultra Mushroom", correct: false},
            {text: "Mushroom", correct: false}
        ],
        question: "What is the name of the turtle that helps Mario in his adventures?", // 5
        answers: [
            {text: "Toad", correct: false},
            {text: "Yoshi", correct: true},
            {text: "Koopa", correct: false},
            {text: "Goomba", correct: false}
        ],
        question: "What is the name of the castle that Bowser lives in?", // 6
        answers: [
            {text: "Bowser's Castle", correct: true},
            {text: "Bowser's Fortress", correct: false},
            {text: "Bowser's Keep", correct: false},
            {text: "Bowser's Tower", correct: false}
        ],
        question: "What is the name of the game that Mario and Luigi first appeared in?", // 7
        answers: [
            {text: "Super Mario Bros.", correct: false},
            {text: "Donkey Kong", correct: false},
            {text: "Game & Watch", correct: false},
            {text: "Mario Bros.", correct: true}
        ],
        question: "Mario was named after a real estate developer, what was his name?", // 8
        answers: [
            {text: "Mario Abdi", correct: false},
            {text: "Mario Mine", correct: false},
            {text: "Anne T.Kwayted", correct: false},
            {text: "Mario Segale", correct: true}
        ],
        question: "Which of the following is NOT a profession Mario has accepted?", // 9
        answers: [
            {text: "Plumber", correct: false},
            {text: "Firefighter", correct: false},
            {text: "Doctor", correct: false},
            {text: "Graphic Designer", correct: true}
        ],
        question: "Mario was known as what before the American release of Donkey Kong?", // 10
        answers: [
            {text: "Jumpman", correct: true},
            {text: "Sonic", correct: false},
            {text: "Plumber", correct: false},
            {text: "Papa Smurf", correct: false}
        ]
    }
];

// initialize the quiz
generateQuiz(quizQuestions);


// Start Quiz Function

function generateQuiz(quizQuestions) {
    startButton();
    // nextButton();

    function startButton() {
        // Display the first question number and question along with answers, once the start button is clicked.
        document.querySelector('[data-start-button]').addEventListener('click', () => {
            questionNumber.dataset++;
            for(let questions in quizQuestions) {
                questionText.dataset = questions.question[0];
                answerButtons.dataset = questions.answers[{...text}];
            }
        });
    }
    // function nextButton(){
    //     // Display the next question number and question along with answers, once the next button is clicked.
    //     questionNumber.dataset++;
    //     questionText.dataset = quizQuestions[1].question;
    //     answerButtons.dataset = quizQuestions[1].answers;
    // }
}

// startButton.addEventListener('click', () => {
//     questionNumber.dataset++;
//         for(let questions in quizQuestions) {
//             questionText.dataset = quizQuestions[questions].question[0];

//             answerButtons.dataset = quizQuestions[questions].answers[0].text;
//         }
//     });