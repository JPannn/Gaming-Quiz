// Create a Quiz App using JavaScript, HTML and CSS
// using the following questions and answers with arrays, objects and functions
// Declare variables from the DOM by data attributes

// Header | Quiz Title
const headerContainer = document.querySelector('[data-header-container]');
// Image Container | Displays the image based on the users score and throughout the quiz
const imageContainer = document.getElementById("imageContainer");
// Question Information | Questions and Answers
const questionContainer = document.querySelector('[data-question-container]'); // Question Container | Displays the question and number
const questionNumber = document.querySelector('[data-question-number]'); // Tells user which question they are on
const questionText = document.querySelector('[data-question-text]'); // Displays the question text
// Answer Container | Displays the users Progress and answer buttons
const answerButtonsContainer = document.querySelector('[data-display-answers]');
const usersCurrentProgress = document.querySelector('[data-current-progress]'); // Returns a message to user based on score
// Control Button Container | Start, Next, Results
const controlButtonContainer = document.querySelector('[data-control-button-container]');
// Create Start Button append later into controlButtonContainer
const startButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.classList.add('controlButton');
controlButtonContainer.appendChild(startButton);
// Create Next Button append later into controlButtonContainer
const nextButton = document.createElement('button');
nextButton.innerText = 'Next';
nextButton.classList.add('controlButton');
nextButton.classList.add('hide');
// Create Results Button append later into controlButtonContainer
const resultsButton = document.createElement('button');
resultsButton.innerText = 'Results';
resultsButton.classList.add('controlButton');
resultsButton.classList.add('hide');
// Quiz Results | Displays the users score and image based on score
const finalResults = document.getElementById('finalResults');
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
    startButtonClicked();
    nextButtonClicked();

    // Start Button Clicked
    function startButtonClicked() {
        // create a button element and add it to the controlButtonContainer
        startButton.addEventListener('click', startButtonFunctionality);
    }
    // Start Button Functionality
    function startButtonFunctionality() {
        // Hide Start Button
        startButton.remove();
        // Remove headerContainer When beginning the Quiz
        headerContainer.remove();
        // Show Information needed for Quiz
        questionContainer.classList.remove('hide');
        // Show Question Number, Question Text, Answer Buttons and Image
        // Invoke functions
        // Append the Next Button to the controlButtonContainer
        controlButtonContainer.appendChild(nextButton);
        showQuestion();
        showAnswers();
        showImage();
        checkAnswer();
        updateQuestionNumber();
    }
    // Next Button Clicked
    function nextButtonClicked() {
        nextButton.addEventListener('click', nextButtonFunctionality);
    }
    // Next Button Functionality
    function nextButtonFunctionality() {
        resetState();
        showQuestion();
        showAnswers();
        showImage();
        checkAnswer();
        userScoreNumberToText();
        updateQuestionNumber();
        if(questionNumber.dataset.value == 10) {
            nextButton.remove();
            userScoreNumberToText();
            resultButtonClicked();
        }
    }
    // Shows Question if questionNumber is less than 10
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
    // Increments the question number and displays it to the user 
    function updateQuestionNumber() {
        // Increment the question number
        questionNumber.dataset.value++;
        // Display the question number
        questionNumber.innerText = `Question ${questionNumber.dataset.value}.`;
    }
    // Show Answer Choices from the Questtion in shuffledQuestions array
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
    // Checks if the answer is correct or incorrect
    function checkAnswer() {
        // only check answer if button clicked is in answer buttons container
        // Add event listener to answer buttons container
        answerButtonsContainer.addEventListener('click', function(e) {

            // Create an if statement to check if e.target dataset doesn't have correct or incorrect if not then return nothing
            if (!e.target.dataset.correct && !e.target.dataset.incorrect) {
                return;
            } else if (e.target.dataset.correct) {
                e.target.classList.add('correct');
                // Increment the user score
                userScore+=5;
                answerButtonsContainer.classList.add('disabled');
            } else if (e.target.dataset.incorrect) {
                e.target.classList.add('incorrect');
                answerButtonsContainer.classList.add('disabled');
            }
            // Show the next button if questionNumber.dataset.value is less than 10
            if (questionNumber.dataset.value != 10) {
                nextButton.classList.remove('hide');
            } else if(questionNumber.dataset.value == 10) {
                // Append the Results Button to the controlButtonContainer
                controlButtonContainer.appendChild(resultsButton);
                resultsButton.classList.remove('hide');
            }

        });
    }
    // Uses a Range of Numbers from userScore to return a message.
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
    //Reset Elements to Default State
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
    // Results Button Clicked
    function resultButtonClicked() {
        resultsButton.addEventListener('click', resultsButtonFunctionality);
    }
    // Results Button Functionality
    function resultsButtonFunctionality() {
        // Remove the answer buttons container
        answerButtonsContainer.innerText = '';
        answerButtonsContainer.classList.add('hide');
        answerButtonsContainer.classList.add('disabled');
        answerButtonsContainer.remove();
        usersCurrentProgress.remove();
        // Hide questionContainer
        questionContainer.innerText = '';
        questionContainer.classList.add('hide');
        // Remove results button
        resultsButton.remove();
        // Reset Image Container
        imageContainer.src = '';
        // Show results
        finalResults.classList.remove('hide');
        // Create a variable to hold the p element
        const pElement = document.createElement('p');
        // Create a new p element to tell the user to try again
        const pElement2 = document.createElement('p');
        pElement2.innerText = 'Refresh the page to try again!';
        // userScore gets put into a range of 3 different results; -100 - 0, 1 - 100, 101 - 200
        // use a switch statement to determine which result to display
        switch (true) {
            case userScore <= -50:
                // Bad Score
                pElement.innerText = 'You are a disgrace to the Mushroom Kingdom...';
                finalResults.append(pElement);
                // Show image
                imageContainer.src = quizScoreImages[0].badScoreImage;
                // Append pElement2 to finalResults
                finalResults.append(pElement2);
                break;
            case userScore >= -51 && userScore <= 40:
                // Good Score
                pElement.innerText = 'Mario would be proud of you!';
                finalResults.append(pElement);
                // Show image
                imageContainer.src = quizScoreImages[0].goodScoreImage;
                // Append pElement2 to finalResults
                finalResults.append(pElement2);
                break;
            case userScore >= 41:
                // Best Score
                pElement.innerText = 'You are a true Super Mario Fan!';
                finalResults.append(pElement);
                // Show image
                imageContainer.src = quizScoreImages[0].bestScoreImage;
                // Append pElement2 to finalResults
                finalResults.append(pElement2);
                break;
            default:
                // No Score
                pElement.innerText = 'Did you even take the quiz?';
                finalResults.append(pElement);
                // Show image
                imageContainer.src = quizScoreImages[0].noScoreImage;
                // Append pElement2 to finalResults
                finalResults.append(pElement2);
                break;
        }
    }
    // Show Image Throughout the Quiz
    function showImage(){
        // Display itterate through tenShuffledImages array and display each image in the image container onclick of start button or next button
        if (questionNumber.dataset.value != 10) {
            imageContainer.src = "";
            const tempImage = tenShuffledImages[questionNumber.dataset.value];
            imageContainer.src = tempImage;
            // set image size to 536 x 536
            imageContainer.style.width = '386px';
            imageContainer.style.height = '386px';
        }
    }
}