/*--- Hangman - Project 1 - WDI-DT-44-LB ---*/

/*--- variables ---*/
player1Word = []; // input/word or phrase submitted by Player 1
letterEntered = []; // input/letters, word, or phrase submitted by Player 2
player2Word = []; // cummulatively holds value of 'correct' lettersEntered
badLetters = []; // cummulatively holds value of 'incorrect' lettersEntered
alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
   'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
gallows = []; //not sure if this is necessary; to hold value of divs to flip

/*--- event listeners ---*/
document.querySelector('button').addEventListener('click', click);

/*--- functions ---*/
function click(event) {
  console.log("hello");
}

/*
function click(e) {
  var id = e.target.id;
  if (!id) {return} // prevent adding extra element at the end of hte array
  var value = 0;
  if (currentPlayer === player1) {
    value = 1;
  } else {
    value = -1;
  }
  array[id] = value;
  renderTable(e.target.id);
  winCondition();
  if (checkTie()) {
    console.log('tie')
  }
}
*/

/*pseudocode
Start with blank slate to allow for 7 guesses (noose, head, body, 2 arms, 2 legs):
1. Initialize state (blank canvas).
2. Render board - gallows
3. Define variables
    a. player1Word - Word submitted
    b. Players
        -player1 - enters the word or phrase to be guessed by Player 2
        -player2 - guesses the word or phrase entered by Player 1
    c. letterEntered - letter(s) submitted
4. Event listeners (letter submit, reset game).
    a. Handling letter submit.
    b. Handling entire phrase submit (win/lose?).
5. letterEntered is 'read'
    a. must be in alphabet
    b. check against player1Word
        i. If letterEntered is in player1Word then append player2Word
          corresponding to correct index (ie if letter 'a' is at
          index 0 of player1Word and letterEntered is 'a', letterEntered
           must be dropped into player2Word at index 0)
        ii. If letterEntered is not in player1Word then:
            1. use innerHTML to reveal different gallows div
            2. drop letterEntered into player2Wrong, no specific order
            ** these two functions do not need to be asynchronous
8. Remove letterEntered from alphabet
9. Determine win or death (state of game).
    a. player1Word === player2Word = win
    b. gallows === full = loss
    c. render
    d. else next letterEntered
10. Handling reset game.
*/
//start();


