'use strict';
// global variables
var userAnswers = []; // define an empty array. when this array has all 5 answers the play button will disappear and a play again button will appear.
var questions = [
  'Do you think I like to play golf or play football? Type Yes for Golf or No for football',
  'Would you think I\'m a homebody type of person or do I seem like the type who likes to travel? Yes for homebody and No for Traveller.',
  'Do you think I\'m an only child?',
  'Do you think I\'m married?',
  'Do you think I love coding/programming?'
];
var answers = [
  ['yes', 'y'],
  ['no', 'n'],
  ['no', 'n'],
  ['yes', 'y'],
  ['yes', 'y'],
  34
];
var alertAnswers = [
  ['That\'s right! On my spare time I love to play golf!', 'Unfortunately, I\'m not quite skilled enough to play football. But I LOVE to watch it!'],
  ['That\'s right! I was bitten with the travel bug at a young age.', 'As much as I love my home, I prefer to travel.'],
  ['Correct! I\'m one of three. The last one to be precise.', 'I\'ve always wondered what it\'d be like to be an only child.'],
  ['Correct! I\'ve been married for almost 7 years now.', 'That is incorrect. I\'ve been married for almost 7 years now.'],
  ['Absolutely!', 'I\'ve always been passionate about coding. I\'m ecstatic about the journey ahead!'],
  'That\'s right! I\'m 34 years young!'
];
var result = document.getElementById('result');
var startButton = document.getElementById('start');
var playAgain = document.getElementById('playAgain');
var correctAnswersCount = 0;
var numberOfGuesses = 0;
var limitOfGuesses = 4;
var questionSevenGuessLimit = 5;

// let's add a dom listener to make sure the content is loaded before running any scripts
document.addEventListener('DOMContentLoaded', function() {

  // grab the button in the dom and activate the prompts when it's clicked.
  document.getElementById('start').addEventListener('click', start);

});

///////////////////////////// HELPER FUNCTIONS /////////////////////////////

// start the game!
function start(){
  // let's get to know each other just a little.
  var playerName = prompt('But first, I\'d like to know your name. What is your name?');
  while(playerName === ''){
    playerName = prompt('You didn\'t enter a name. Please enter one. First name is just fine.');
  }
  if(firstLetterCap(playerName) === 'Paolo'){
    console.log('Whoa! What a coincedence, that\'s also my name!');
    alert('Whoa! What a coincedence, that\'s also my name!');
  } else {
    console.log('Hi, ' + firstLetterCap(playerName) + '. Great to meet you! My name is Paolo!');
    alert('Hi, ' + firstLetterCap(playerName) + '. Great to meet you! My name is Paolo!');
  }

  // now, the first 5 questions
  for(let i = 0; i < questions.length; i++) {
    var promptAnswer = prompt(questions[i]);
    while(promptAnswer.toLowerCase() !== 'yes' && promptAnswer.toLowerCase() !== 'y' && promptAnswer.toLowerCase() !== 'no' && promptAnswer.toLowerCase() !== 'n'){
      promptAnswer = prompt('Please enter just Yes or No.');
    }
    if(promptAnswer === answers[i][0] || promptAnswer === answers[i][1]){
      alert(alertAnswers[i][0]);
      correctAnswersCount += 1;
      userAnswers.push(promptAnswer);
    } else {
      alert(alertAnswers[i][1]);
      userAnswers.push(promptAnswer);
    }
  }
  // 6th question
  var q6 = prompt('How old do you think I am?');
  while(isNaN(q6)){
    q6 = prompt('Please enter a number.');
  }
  while (q6 !== answers[5] && numberOfGuesses < limitOfGuesses ) {
    if (q6 > answers[5]) {
      q6 = prompt('You\'ve guessed too high! Keep guessing!');
    } else if(q6 < answers[5]){
      q6 = prompt('You\'ve guessed too low! Keep guessing!');
    } else {
      alert(alertAnswers[5]);
      correctAnswersCount++;
      userAnswers.push(q6);
      break;
    }
    numberOfGuesses++;
    console.log(numberOfGuesses);
  }
  if(numberOfGuesses === limitOfGuesses){
    alert('That\'s alright. That was a tough question. Let\'s move on.');
  }

  // onto question 7
  var q7 = prompt('Can you guess a company that I\'ve worked for?');
  var q7Answers = ['google', 'microsoft', 'amazon'];
  numberOfGuesses = 0; // zero out the number of guesses from question 6
  if(q7Answers.indexOf(q7.toLowerCase()) > -1 && numberOfGuesses < questionSevenGuessLimit){
    alert('That\'s Correct! I\'ve worked at all of these companies ' + q7Answers.join(', ') + ' before.');
    correctAnswersCount++;
    userAnswers.push(q7);
  } else {
    numberOfGuesses++;
    q7 = prompt('Good guess, but try again.');
  }

  if(correctAnswersCount === 7){
    alert('Awesome job ' + firstLetterCap(playerName) + '! You got all 7 questions correct!');
  } else {
    alert('Well ' + firstLetterCap(playerName) + ', you got ' + correctAnswersCount + ' answers out of 7 correct. Better luck next time.');
  }
  console.log('you\'re correct answer count is', correctAnswersCount);
  gameEnd();
  console.log(userAnswers);
}

// display a quick summary of myself in the paragraph and hide the play button
function gameEnd() {
  result.innerHTML = 'Thanks for playing my game! Once again, my name is Paolo. On my spare time I love to golf. Having said that, I\'ve been married for almost 7 years now and most of my time these days is just spent with my wife and newborn. Being one of 3 siblings, I\'m hoping to have a big family myself. I love to travel! I\'ve been on both sides of the pond and I\'m currently trying to work on visiting all of Southeast Asia. My love and passion for coding has led me to the apprenticeship program at Amazon. I\'m super excited about this opportunity and being able to build things that\'ll help make people\'s lives easier!';
  startButton.style.display = 'none';
  playAgain.style.display = 'block';
  playAgain.addEventListener('click', restart);
  document.getElementById('topTen').classList.toggle('hideTen');
  document.getElementById('previousCompanies').classList.toggle('hideTen');
}

// restart the game. show the start button and reset the paragraph text
function restart() {
  result.innerHTML = 'Rather than just the usual paragraph where I tell you a little about me, how about we play a game? I promise it\'ll be fun!';
  startButton.style.display = 'block';
  playAgain.style.display = 'none';
  userAnswers = [];
  document.getElementById('topTen').classList.add('hideTen');
  document.getElementById('previousCompanies').classList.add('hideTen');
}

// function that capitalizes every first letter of a string.
const firstLetterCap = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
