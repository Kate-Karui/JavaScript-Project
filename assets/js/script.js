let questions = [
    "Who is the main antagonist of The Legend Of Zelda series?",
    "Who's the last character to be added in Super Smash Brothers Ultimate?",
    "Where are you from?",
    "What is your favorite color?",
    "What are your hobbies?"
];


let answers = [
    "Ganon",
    "Sora",
    "Your country name",
    "Your color name",
    "Your hobbies"
];

let score = 0;
let prevQuestionIndex = -1;
function getRandomQuestion() {
    let index = Math.floor(Math.random() * questions.length);
    while (index === prevQuestionIndex) {
        index = Math.floor(Math.random() * questions.length);
    }
    prevQuestionIndex = index;
    return questions[index];
}

function questionArea() {

    question = getRandomQuestion();

    document.getElementsByTagName('h1')[0].innerHTML = question;
    console.log('Test!');

}



questionArea();


const quizContainer = document.getElementById('questionarea');
const resultsContainer = document.getElementById('scorearea');
const submitButton = document.getElementById('submit');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');

function checkAnswer() {
    let userAnswer = inputElement.value.toLowerCase();
    let correctAnswer = answers[questions.indexOf(question)].toLowerCase();
    if (userAnswer.includes(correctAnswer)) {
        score++;
        alert("Correct!");
    } else {
        if (score > 0) {
            score--;
        }
        alert("Wrong!");
    }
    questionArea();
    inputElement.value = "";
    scoreElement.innerHTML = score;
}
submitButton.addEventListener("click", checkAnswer);


