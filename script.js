'use strict';
// Handling a click event 

let secretNumber = Math.trunc(Math.random()* 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
})



// Event Handler on Guess button
document.querySelector('.check').addEventListener('click', function() {
  const guess = document.querySelector('.guess').value;
// No Player input
  if (!guess) { 
      document.querySelector('.message').textContent = 'Please select a Number!';
  } 
//   Guess is correct
  else if (guess == secretNumber){
    document.querySelector('.message').textContent = 'Correct Number!'; 
    document.querySelector('body').style.backgroundColor = '#ab8ee5';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}  
// When guess is wrong
else if (guess !== secretNumber){
    if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Your guess is too high!' : 'Your guess is too low!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You have lost the game!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#D43B30';}
}

// Guess is too high
/*
  else if (guess > secretNumber) {
      if (score > 1) {
    document.querySelector('.message').textContent = 'Your guess is too high!';
    score--;
    document.querySelector('.score').textContent = score;
} else {
    document.querySelector('.message').textContent = 'You have lost the game!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#D43B30';}
} 
// Guess is too low
  else if (guess < secretNumber) {
    if (score > 1){
    document.querySelector('.message').textContent = 'Your guess is too low!';
    score--;
    document.querySelector('.score').textContent = score;
} else {
    document.querySelector('.message').textContent = 'You have lost the game!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#D43B30';}
}*/
});



