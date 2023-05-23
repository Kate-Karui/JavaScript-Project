let questions = [
    'Who is the main antagonist of The Legend Of Zelda series?',
    "Who's the last character to be added in Super Smash Brothers Ultimate?",
    'Where are you from?',
    'What is your favorite color?',
    'What are your hobbies?'
];

function getRandomQuestion() {
    let index = Math.floor(Math.random() * questions.length);

    return questions[index];
}

function questionArea() {

    question = getRandomQuestion();

    document.getElementsByTagName('h1')[0].innerHTML = question;
    console.log('Hi!');

}



questionArea();