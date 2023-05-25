let questions = [
    "Who is the main antagonist in The Legend Of Zelda series?",
    "Who's the last character to be added in Super Smash Brothers Ultimate?",
    "What is the game engine made for Half Life 2 called?",
    "What's the highest grossing game?",
    "What's Mario's first apperance?",
	"Nintendo began as a company selling which products?",
	"What is the name of the alien race that invades Earth in Halo?",
	"What game is Little Mac from?",
	"What is the name of the kingdom where the Legend of Zelda series is set?",
	"What is the name of the main villain in the Final Fantasy VII game?",
	"What is the name of the sci-fi horror game series that features a weapon called the Plasma Cutter?",
	"What is the name of the main character in the Tomb Raider series?",
	"What video game series features a fictional language called Simlish?",
	"What video game series is based on novels by Polish author Andrzej Sapkowski?",
	"What video game series features a character named Claptrap, a sarcastic robot that assists the player?",
	"What is the name of the main character in the God of War series?",
	"What is the name of the gaming platform that allows players to create and play games made by other users?",
	"What is the name of the main character in the “Uncharted” series?",
	"What is the name of the gaming platform that allows players to buy and play games on PC and Mac?",
	"What is the name of the game developer that created the Fallout, The Elder Scrolls, and Starfield series?",
	"What is Pearl’s signature color in Splatoon 2?",
	"What was the first commercially successful video game?",
	"Blizzard Entertainment is most well known for what video game franchise?",
	"In the original arcade version of Donkey Kong, what was the name of the character that would later be known as Mario?",
	"Who released the first flight simulator game?",
	"What game did the character Sonic first appear in?",
	"What was the original intent of the Sims?",
	"In The Legend of Zelda Ocarina of Time, where is the Master Sword kept?",
	"Who's the one you work for in the Animal Crossing series?",
	"In Super Mario Sunshine, what does FLUDD stand for?",
	"What game is heavily inspired by the Super Mario Series where you play as a little girl with a fancy hat?",
	"In Yakuza, What is the name of the orphanage in which Kiryu, Nishikiyama, Yumi, and others were raised?",
	"How did Friday Night Funkin' become so popular?",
	"As what animal do you play as in Ghost Of A Tale?",
	"What game genre is the BTD series?",
	"Which character in PayDay2 can only speak Japanese?",
	"What's the starting location in Jet Set Radio?",
	"In the first Five Night's At Freddy's game, what song gets played when you run out of power?",
	"In Yakuza, who teaches Kiryu his famous Tiger Drop technique?"
	
];


let answers = [
    "Ganon",
    "Sora",
    "Source",
    "Minecraft",
    "Donkey Kong",
	"Playing Cards",
	"Covenant",
	"Punch Out",
	"Hyrule",
	"Sephiroth",
	"Dead Space",
	"Lara Croft",
	"Sims",
	"Witcher",
	"Borderlands",
	"Kratos",
	"Roblox",
	"Nathan Drake",
	"Steam",
	"Bethesda",
	"Pink",
	"Pong",
	"World of Warcraft",
	"Jump Man",
	"Microsoft",
	"Rad Mobile",
	"Architecture Designs",
	"Temple Of Time",
	"Tom Nook",
	"Flash Liquidising Ultra Dousing Device",
	"A Hat In Time",
	"Sunflower Orphanage",
	"Modding",
	"Mouse",
	"Tower Defense",
	"Jiro",
	"Shibuya",
	"Toreador March",
	"Sotaro Komaki"
	
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
const submitButton = document.getElementById('submit');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');

function checkGameStatus() {
  if (score == 10) {
    alert("You win!");
    location.reload();
  }
  if (score == 0) {
    alert("You lose!");
    location.reload();
  }
}


function checkAnswer() {
    let userAnswer = inputElement.value.toLowerCase();
    let correctAnswer = answers[questions.indexOf(question)].toLowerCase();
    if (userAnswer.includes(correctAnswer)) {
 showImage("assets/images/check.jpg", "Checkmark");
		score++;
		answers.splice(questions.indexOf(question), 1);
		questions.splice(questions.indexOf(question), 1);
        alert("Correct!");
    } else {
        if (score > 0) {
            score--;
        }
		showImage("assets/images/cross.jpg", "Cross mark");
		answers.splice(questions.indexOf(question), 1);
		questions.splice(questions.indexOf(question), 1);
        let capitalizedAnswer = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
        alert("Wrong! The correct answer is " + capitalizedAnswer);
    }
    questionArea();
    inputElement.value = "";
    scoreElement.innerHTML = score;
  checkGameStatus();

}

inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
submitButton.addEventListener("click", checkAnswer);


