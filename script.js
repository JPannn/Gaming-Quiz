// Create a Quiz App using JavaScript, HTML and CSS
// using the following questions and answers with arrays, objects and functions
// Declare variables from the DOM by data attributes

// Quiz Information | Questions and Answers
const quizInfo = document.querySelector('[data-quiz-info]'); // quizInfo displays the quiz information
const questionNumber = document.querySelector('[data-question-number]'); // Tells user which question they are on
const questionText = document.querySelector('[data-question-text]'); // Displays the question text
const usersCurrentProgress = document.querySelector('[data-current-progress]'); // Returns a message to user based on score
const imageContainer = document.getElementById("imageContainer");
// Answer Buttons Container | Displays the answer buttons
const answerButtonsContainer = document.querySelector('[data-display-answers]');
// Quiz Controls | Start, Next, Results, Restart
const startButton = document.querySelector('[data-start-button]');
const nextButton = document.querySelector('[data-next-button]');
const resultsButton = document.querySelector('[data-results-button]');
const userResults = document.querySelector('[data-user-results]');
const restartButton = document.querySelector('[data-restart-button]');
// Current Array Index
questionNumber.dataset.value = 0;
// User Score
let userScore = -100;

// Array of Questions and Answers for the Quiz
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
// Array of Images for the Quiz
const quizScoreImages = [
    // create key-value pairs of images based on the users score
    {
        badScoreImage : "/Mario_Based_On_Score/Sad_Mario.jpg",
        goodScoreImage : "/Mario_Based_On_Score/Good_Mario.jpg",
        bestScoreImage : "/Mario_Based_On_Score/Best_Mario.jpg",
        noScoreImage : "/Mario_Based_On_Score/No_Mario.jpg"
    }

];
// Array of 10 images to display to the user as they progress through the quiz
const tenImagesArray = [
    "/Random_Mario_Franchise_Photos/MarioPhoto.jpeg",
    "/Random_Mario_Franchise_Photos/MarioPhoto2.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto3.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto4.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto5.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto6.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto7.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto8.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto9.jpg",
    "/Random_Mario_Franchise_Photos/MarioPhoto10.jpg"
];

// Quiz Logic | Shuffles the Questions but not the Answers
const shuffledQuestions = quizQuestions.sort(() => Math.random() - .5);
// Shuffle tenImagesArray to display to the user as they progress through the quiz
const tenShuffledImages = tenImagesArray.sort(() => Math.random() - .5);

// Start Quiz
generateQuiz();

function generateQuiz() {
    // Invoke functions
    startButtonFunctionality();
    nextButtonFunctionality();

    // Start Button Functionality
    function startButtonFunctionality() {
        startButton.addEventListener('click', function() {
            // Hide Start Button
            startButton.classList.add('hide');
            // Show Information needed for Quiz
            quizInfo.classList.remove('hide');
            // Show Question Number, Question Text, Answer Buttons and Image
            showQuestion();
            showAnswers();
            showImage();
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
                } else if (e.target.dataset.incorrect) {
                    e.target.classList.add('incorrect');
                }
                // disable the answer buttons container
                answerButtonsContainer.classList.add('disabled');
                // Show the next button if questionNumber.dataset.value is less than 10
                if (questionNumber.dataset.value != 10) {
                    nextButton.classList.remove('hide');
                }
            });
    }

    function userScoreNumberToText() {
        // displayScore.innerText based on userScore
        usersCurrentProgress.classList.remove('hide');
        switch (true) {
            case userScore <= -50:
                // Low Score
                usersCurrentProgress.innerText = 'You\'re Doing Okay...';
                break;
            case userScore >= -51 && userScore <= 40:
                // Okay Score
                usersCurrentProgress.innerText = 'Great, Keep Going!';
                break;
            case userScore >= 41:
                // High Score
                usersCurrentProgress.innerText = 'Amazing, You\'re a Superstar!';
                break;
            default:
                usersCurrentProgress.innerText = '...';
                break;
        }
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
        // Reset src of image to empty string
        imageContainer.src = '';
        // reset userCurrentProgress
        usersCurrentProgress.innerText = '';
        // hide Next Button
        nextButton.classList.add('hide');
    }

    function nextButtonFunctionality() { 
        nextButton.addEventListener('click', () => {
            resetState();
            showQuestion();
            showAnswers();
            showImage();
            checkAnswer();
            userScoreNumberToText();
            updateQuestionNumber();
            if(questionNumber.dataset.value == 10) {
                nextButton.classList.add('hide');
                resultsButton.classList.remove('hide');
                userScoreNumberToText();
                resultsButtonFunctionality();
            }
        });
    }

    function resultsButtonFunctionality() {
        resultsButton.addEventListener('click', () => {
            // remove answer buttons container
            answerButtonsContainer.innerText = '';
            answerButtonsContainer.classList.add('hide');
            // Hide quiz info
            quizInfo.classList.add('hide');
            // Hide next button
            nextButton.classList.add('hide');
            // Hide results button
            resultsButton.classList.add('hide');
            // Hide display score
            // Reset Image Container
            imageContainer.src = '';
            usersCurrentProgress.classList.add('hide');
            // Show results
            userResults.classList.remove('hide');
            // userScore gets put into a range of 3 different results; -100 - 0, 1 - 100, 101 - 200
            // use a switch statement to determine which result to display
            switch (true) {
                case userScore <= -50:
                    // Bad Score
                    userResults.innerText = 'You are a disgrace to the Mushroom Kingdom';
                    // Show image
                    imageContainer.src = quizScoreImages[0].badScoreImage;
                    break;
                case userScore >= -51 && userScore <= 40:
                    // Good Score
                    userResults.innerText = 'Mario would be proud of you';
                    // Show image
                    imageContainer.src = quizScoreImages[0].goodScoreImage;
                    break;
                case userScore >= 41:
                    // Best Score
                    userResults.innerText = 'You are a true Super Mario Fan';
                    // Show image
                    imageContainer.src = quizScoreImages[0].bestScoreImage;
                    break;
                default:
                    // No Score
                    userResults.innerText = 'Did you even take the quiz?';
                    // Show image
                    imageContainer.src = quizScoreImages[0].noScoreImage;
                    break;
            }
            showImage(userScore);
        });
    }

    function showImage(){
        // Display itterate through tenShuffledImages array and display each image in the image container onclick of start button or next button
        if (questionNumber.dataset.value != 10) {
            imageContainer.src = "";
            const tempImage = tenShuffledImages[questionNumber.dataset.value];
            imageContainer.src = tempImage;
        }
    }
}