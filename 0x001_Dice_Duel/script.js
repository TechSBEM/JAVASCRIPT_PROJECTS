'use strict';


const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const curentScore0EL = document.getElementById("current--0");
const curentScore1EL = document.getElementById("current--1");

//-----DEFINNING BUTTONS-----
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



let score ,activePlayer, currentScore, playing;


/* Function for the starting conditions */
const start = function () {
    /* variable for storing current score in an array */
    score = [0,0];

    activePlayer=0;
    currentScore =0;
    playing= true;
   


    score0EL.textContent = 0;
    score1EL.textContent = 0;
    curentScore0EL.textContent=0;
    curentScore1EL.textContent=0;

    diceEl.classList.add('hidden');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active')

}

/* Calling the starting condition function */
console.log(start())
start();



/* Creating a function for switching players */
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent =0;
    /* Assigning tenary score to "0" */
    currentScore=0;
    /* Using tenary operator to change active players */
    activePlayer= activePlayer === 0? 1: 0;
    document.getElementById(`current--${activePlayer}`).textContent =currentScore;

    /* USing the toggle method checks if the class is there or not. It add the class if not there and remove it if present */
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");

}

// --EVENT HANDLER TO THE DICE BOTTOM----
btnRoll.addEventListener('click', function () {
    /* Adding a state variable to it. THis checks whether you are still playing or not */
    if (playing) {
          /* Generate a random roll */
  const dice = Math.trunc(Math.random() * 6) + 1;

  /* Display dice roll */
  diceEl.classList.remove('hidden');
  // adding the "src" attribute of image to the labled dice images
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    /* Summing up the current score with the dice number */
    currentScore +=dice;
    /* Getting the active player dynamically */
    document.getElementById(`current--${activePlayer}`).textContent =currentScore;
} else {
    /* Switching players using an already created function */
    switchPlayer();
  }
} 
}
);


    


// -----WORKING WITH THE HOLD BUTTON----

btnHold.addEventListener("click", function(){

    if (playing){ 

        // 1.ADD CURRENT SCORE TO ACTIVE PLAYER'S CORE
        score[activePlayer] +=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer]

        // CHECK IF PLAYER'S SCORE is>=100 
        if(score[activePlayer] >=20) {
            playing= false;
            diceEl.classList.add('hidden'); 
            // FINISH THE GAME
            /* Changing color to indicate the winner */
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 

        } else {

            // SWITCH TO THE NECT PLAYER
            switchPlayer();
        }

    }
});



// ----RESETTING THE GAME---
btnNew.addEventListener("click", start)