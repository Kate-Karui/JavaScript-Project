
const questions = [
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
	"What is the name of the main character in the Uncharted series?",
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

const answers = [
	"Ganondorf, Zant, Demise",
	"Sora, Steve, Pyra & Mythra",
	"Source, Frostbite, Unreal Engine",
	"Minecraft, Fortnite, Tetris",
	"Donkey Kong, Super Mario Bros, Mario Kart",
	"Playing Cards, Books, Chess",
	"Covenant, Flood, Prometheans",
	"Punch Out, Kid Icarus, Worldrunner",
	"Hyrule, Termina, Koholint",
	"Sephiroth, Kefka, Kuja",
	"Dead Space, Resident Evil, Silent Hill",
	"Lara Croft, Nathan Drake, Ezio Auditore",
	"Sims, Sime, Simo",
	"Witcher, Dragon Age, Mass Effect",
	"Borderlands, Destiny, Warframe",
	"Kratos, Hires, Zeus",
	"Roblox, Minecraft, Terraria",
	"Nathan Drake, Gerald Gardener, Booker DeWitt",
	"Steam, GOG, Epic Games Store",
	"Bethesda, Bioware, CD Projekt Red",
	"Pink, Green, Blue",
	"Pong, Space Invaders, Pac-Man",
	"World of Warcraft, Everquest, Runescape",
	"JumpMan, RunMan, Moustache",
	"Microsoft, Apple, IBM",
	"Rad Mobile, Pole Position, Out Run",
	"Architecture Designs, Graphic Design, Interior Design",
	"Temple Of Time, Temple Of Light, Temple Of Courage",
	"Tom Nook, Isabelle, K.K. Slider",
	"Flash Liquidising Ultra Dousing Device, Flowing Liquidising Ultimate Destruction Device, Flying Liquid Unleashing Drenching Device",
	"A Hat In Time, Celeste, Hollow Knight",
	"Sunflower Orphanage, Morning Glory Orphanage, Daisy Orphanage",
	"Modding, Speedrunning, Famous Creators",
	"Mouse, Rat, Beaver",
	"Tower Defense, RPG, Turn-Based Strategy",
	"Jiro, Hoxton, Chains",
	"Shibuya, Akihabara, Kyoto",
	"Toreador March, Pop Goes The Weasel, London Bridge Is Falling Down",
	"Sotaro Komaki, Kora Bishi, Masaru Sera"
];

let score = 0;
let prevQuestionIndex = -1;
let remainingQuestions = questions.slice();
let wrongGuesses = 0;
let AllowInput = true;

function getRandomQuestion() {
	if (remainingQuestions.length === 0) {
		remainingQuestions = questions.slice();
	}
	let index = Math.floor(Math.random() * remainingQuestions.length);
	let question = remainingQuestions[index];
	remainingQuestions.splice(index, 1);
	return question;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function questionArea() {
	AllowInput = true;

	let question = getRandomQuestion();
	document.getElementsByTagName('h1')[0].innerHTML = question;
	let splitAnswers = answers[questions.indexOf(question)].split(',');
	shuffle(splitAnswers);
	let correctAnswer = splitAnswers[0];
	document.getElementById('choice1').value = correctAnswer;
	document.getElementById('choice2').value = splitAnswers[1];
	document.getElementById('choice3').value = splitAnswers[2];
}

function checkGameStatus() {
	if (score == 10) {
		alert("You win!");
		location.reload();
	}
	if (wrongGuesses == 20 || score == 0) {
		alert("You lose!");
		location.reload();
	}

	if (AllowInput) {
		let userAnswer = selectedChoice.value.toLowerCase();
		let correctAnswer = answers[questions.indexOf(document.getElementsByTagName('h1')[0].innerHTML)].toLowerCase().split(',')[0];
		let isCorrect = userAnswer === correctAnswer;
		if (isCorrect) {
			score++;
			showImage("check.jpg", "Correct!");
		} else {
			wrongGuesses++;
			if (score > 0) {
				score--;
			}
			showImage("cross.jpg", "Wrong!");
		}
		checkGameStatus();
		document.getElementById("score").innerHTML = "Score: " + score;

		AllowInput = false;
		setTimeout(questionArea, 1000);
	}
}
function showImage(imageSrc, altText) {
	var img = document.createElement("img");
	img.src = "assets/images/" + imageSrc;
	img.alt = altText;
	var src = document.getElementById("header");
	src.appendChild(img);
	setTimeout(function () {
		document.getElementById('choice0').addEventListener('click', function () {
			checkAnswer(document.getElementById(`choice${Math.floor(Math.random() * 3) + 1}`));
		});
	}, 1000);
}

questionArea();
const choices = [choice1, choice2, choice3];
choices.forEach((choice) => {
	choice.addEventListener('click', () => {
		checkAnswer(choice);
	});
});
document.getElementById('choice0').addEventListener('click', () => {
	checkAnswer(choices[Math.floor(Math.random() * 3)]);
});

document.getElementById('submit').addEventListener('click', () => {
	let userAnswer = document.getElementById('input').value.toLowerCase();
	let correctAnswer = answers[questions.indexOf(document.getElementsByTagName('h1')[0].innerHTML)].toLowerCase().split(',')[0];
	let isCorrect = userAnswer === correctAnswer;
	if (isCorrect) {
		score++;
		showImage("check.jpg", "Correct!");
	} else {
		wrongGuesses++;
		if (score > 0) {
			score--;
		}
		showImage("cross.jpg", "Wrong!");
	}
	checkGameStatus();
	document.getElementById("score").innerHTML = "Score: " + score;
	setTimeout(questionArea, 1000);
});

document.getElementById("score").innerHTML = "Score: " + score;