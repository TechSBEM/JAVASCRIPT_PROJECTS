'use strict';

/* // Selecting the text of a selector and changing it
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = '🏆Congratulations '
console.log(document.querySelector(".message").textContent);


// Selecting the value of a selector and changing it
document.querySelector(".score").textContent = 50;
console.log(document.querySelector(".score").textContent);
document.querySelector(".guess").value = 50;
 */

// -------HANDLING CLICK EVENT ------
// We use the ".check" selector because we want it to perform a function
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
// textContent does not affect the data type of an element

let score = 20;
let highScore =0;

// defining a function foor display Number
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
    
}



// -----FUNCTION FOR THE CHECK BUTTOM------
const checkBox =function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      "⛔That's an invalid input";
  } else if (guess === secreteNumber) {
        if (score > highScore) {
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }

    displayMessage('🏆Congratulations') 
    /* background-color: #60b347; */
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.backgroundColor = '30rem';
    document.querySelector('.number').textContent = secreteNumber;

  }else if(guess !== secreteNumber){

    if (score > 1) {
        displayMessage(guess > secreteNumber? "📈Number is too high" : '📉Number is too loo')
        // document.querySelector('.message').textContent =guess > secreteNumber? "📈Number is too high" : '📉Number is too loo';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = ' You Lost The Game';
        document.querySelector('.score').textContent = 0;
      }
  }
  
}

// -----WORKING ON THE CLICK HANDLER------
document.querySelector('.check').addEventListener('click', checkBox );
    
// ------RESETTING THE BUTTOM------
const reset =  function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...') ;
  const guess = Number((document.querySelector('.guess').value = ''));
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.backgroundColor = '15rem';
}



document.querySelector('.again').addEventListener('click', reset);


// ----Using the Enter key to check the buttom-----
document.addEventListener("keydown", function (e) {
  console.log(e);
  if(e.key==="Enter" && document.querySelector(".check")){
    checkBox()
  }

})



// ----Using the Escape key to check the Again buttom-----
document.addEventListener("keydown", function (e) {
  console.log(e);
  if(e.key==="Escape" && document.querySelector(".again")){
    reset()
  }

})



