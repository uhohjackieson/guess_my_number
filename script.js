'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score');

// document.querySelector('.guess').value = 23;

// number between 1-20
const number = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
// this changes the text context of the number to the secret number
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  //   if (guess != number) {
  //     let new_score = score - 1;
  //     document.querySelector('.score').textContent = new_score;
  //   }

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🥲';
    // when player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct!🎉';
    // when guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});
