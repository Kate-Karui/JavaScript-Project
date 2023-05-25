let questions = [
    "Who is the main antagonist in The Legend Of Zelda series?",
    "Who's the last character to be added in Super Smash Brothers Ultimate?",
    "What is the game engine made for Half Life 2 called?",
    "What's the highest grossing game?",
    "What's Mario's first apperance?",
	"Nintendo began as a company selling which products?",
];


let answers = [
    "Ganon",
    "Sora",
    "Source",
    "Minecraft",
    "Donkey Kong",
	"Playing Cards"
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
}

function showImage(imageSrc, altText) {
	var img = document.createElement("img");
	img.src = imageSrc;
	img.alt = altText;
	var src = document.getElementById("header");
    src.appendChild(img);
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
 showImage("assets/images/check.jpg", "Checkmark");
		score++;
        alert("Correct!");
    } else {
        if (score > 0) {
            score--;
        }
		showImage("assets/images/cross.jpg", "Cross mark");
        let capitalizedAnswer = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
        alert("Wrong! The correct answer is " + capitalizedAnswer);
    }
    questionArea();
    inputElement.value = "";
    scoreElement.innerHTML = score;

}

inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
submitButton.addEventListener("click", checkAnswer);


