'use strict';
// set a boolean. when true display all of the answers and a bit more about me in the about me paragraph
var questionsAnswered = false

// let's add a dom listener to make sure the content is loaded before running any scripts
document.addEventListener("DOMContentLoaded", function() {

  // grab the button in the dom and activate the prompts when it's clicked.
  document.getElementById("start").addEventListener("click", start)

})


// function that capitalizes every first letter of a string.
const firstLetterCap = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// start the game!
function start(){
  // let's get to know each other just a little.
  var playerName = prompt('But first, I\'d like to know your name. What is your name?')
  while(playerName === ''){
    playerName = prompt('You didn\'t enter a name. Please enter one. First name is just fine.')
  }
  if(firstLetterCap(playerName) === 'Paolo'){
    console.log('Whoa! What a coincedence, that\'s also my name!');
    alert('Whoa! What a coincedence, that\'s also my name!');
  } else {
    console.log('Hi, ' + firstLetterCap(playerName) + '. Great to meet you! My name is Paolo!')
    alert('Hi, ' + firstLetterCap(playerName) + '. Great to meet you! My name is Paolo!')
  }
  
  // now, the first question
  var q1 = prompt('Do you think I like to play golf or play football? Type Yes for Golf or No for football')
  while(q1.toLowerCase() !== 'yes' && q1.toLowerCase() !== 'no'){
    q1 = prompt('Please enter just Yes for golf or No for football.')
  }
  if(q1.toLowerCase() === 'yes') {
    console.log('That\'s right! On my spare time I love to play golf!')
    alert('That\'s right! On my spare time I love to play golf!')
  } else {
    console.log('Unfortunately, I\'m not quite skilled enough to play football. But I LOVE to watch it!')
    alert('Unfortunately, I\'m not quite skilled enough to play football. But I LOVE to watch it!')   
  }

  
}
  

