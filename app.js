'use strict';
// global variables
var answers = []
var result = document.getElementById('result')
var startButton = document.getElementById('start')
var playAgain = document.getElementById('playAgain')

// let's add a dom listener to make sure the content is loaded before running any scripts
document.addEventListener("DOMContentLoaded", function() {

  // grab the button in the dom and activate the prompts when it's clicked.
  document.getElementById("start").addEventListener("click", start)

})

///////////////////////////// HELPER FUNCTIONS /////////////////////////////

// start the game!
function start(){
  // define an empty array. when this array has all 5 answers the play button will disappear
  // and a play again button will appear.
  
  // let's get to know each other just a little.
  var playerName = prompt('But first, I\'d like to know your name. What is your name?')
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
  
  // now, the questions
  var q1 = prompt('Do you think I like to play golf or play football? Type Yes for Golf or No for football')
  while(q1.toLowerCase() != 'yes' && q1.toLowerCase() != 'y' && q1.toLowerCase() != 'no' && q1.toLowerCase() != 'n'){
    q1 = prompt('Please enter just Yes for golf or No for football.');
  }
  if(q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
    console.log('Question 1 answer is', q1, 'and is correct.');
    alert('That\'s right! On my spare time I love to play golf!');
    answers.push(q1);
  } else {
    console.log('Question 1 answer is', q1, 'and is incorrect.');
    alert('Unfortunately, I\'m not quite skilled enough to play football. But I LOVE to watch it!')
    answers.push(q1);
  }

  var q2 = prompt('Would you think I\'m a homebody type of person or do I seem like the type who likes to travel? Yes for homebody and No for Traveller.')
  while(q2.toLowerCase() != 'yes' && q2.toLowerCase() != 'y' && q2.toLowerCase() != 'no' && q2.toLowerCase() != 'n'){
    q2 = prompt('Please enter just Yes for homebody or No for traveller.');
  }
   if(q2.toLowerCase() === 'no' || q2.toLowerCase() === 'n') {
    console.log('Question 2 answer is', q2, 'and is correct.');
    alert('That\'s right! I was bitten with the travel bug at a young age.');
    answers.push(q2);
  } else {
    console.log('Question 2 answer is', q2, 'and is incorrect.');
    alert('As much as I love my home, I prefer to travel.');
    answers.push(q2);
  }

  var q3 = prompt('Do you think I\'m an only child?')
  while(q3.toLowerCase() != 'yes' && q3.toLowerCase() != 'y' && q3.toLowerCase() != 'no' && q3.toLowerCase() != 'n'){
    q3 = prompt('Please enter just Yes or No.');
  }
  if(q3.toLowerCase() === 'no' || q3.toLowerCase() === 'n') {
    console.log('Question 3 answer is', q3, 'and is correct.');
    alert('Correct! I\'m one of three. The last one to be precise.');
    answers.push(q3);
  } else {
    console.log('Question 3 answer is', q3, 'and is incorrect.');
    alert('I\'ve always wondered what it\'d be like to be an only child.');
    answers.push(q3);
  }

  var q4 = prompt('Do you think I\'m married?')
  while(q4.toLowerCase() != 'yes' && q4.toLowerCase() != 'y' && q4.toLowerCase() != 'no' && q4.toLowerCase() != 'n'){
    q4 = prompt('Please enter just Yes or No.');
  }
  if(q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
    console.log('Question 4 answer is', q4, 'and is correct.');
    alert('Correct! I\'ve been married for almost 7 years now.');
    answers.push(q4);
  } else {
    console.log('Question 4 answer is', q4, 'and is incorrect.');
    alert('That is incorrect. I\'ve been married for almost 7 years now.');
    answers.push(q4);
  }

  var q5 = prompt('Do you think I love coding/programming?')
  while(q5.toLowerCase() != 'yes' && q5.toLowerCase() != 'y' && q5.toLowerCase() != 'no' && q5.toLowerCase() != 'n'){
    q5 = prompt('Please enter just Yes or No.');
  }
  if(q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y') {
    console.log('Question 5 answer is', q5, 'and is correct.');
    alert('Absolutely!');
    answers.push(q5);
  } else {
    console.log('Question 5 answer is', q5, 'and is incorrect.');
    alert('I\'ve always been passionate about coding. I\'m ecstatic about the journey ahead!');
    answers.push(q5);
  }

gameEnd();
  
}

// display a quick summary of myself in the paragraph and hide the play button
function gameEnd() {
  if(answers.length === 5){
    result.innerHTML = 'Thanks for playing my game! Once again, my name is Paolo. On my spare time I love to golf. Having said that, I\'ve been married for almost 7 years now and most of my time these days is just spent with my wife and newborn. Being one of 3 siblings, I\'m hoping to have a big family myself. I love to travel! I\'ve been on both sides of the pond and I\'m currently trying to work on visiting all of Southeast Asia. My love and passion for coding has led me to the apprenticeship program at Amazon. I\'m super excited about this opportunity and being able to build things that\'ll help make people\'s lives easier!';
    startButton.style.display = 'none';
    playAgain.style.display = 'block';
  }
} 

// restart the game. show the start button and reset the paragraph text
function restart() {
  result.innerHTML = 'Rather than just the usual paragraph where I tell you a little about me, how about we play a game? I promise it\'ll be fun!';
  startButton.style.display = 'block';
  playAgain.style.display = 'none';
  answers = []
}

// function that capitalizes every first letter of a string.
const firstLetterCap = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
