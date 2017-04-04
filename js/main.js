/*--- Hangman - Project 1 - WDI-DT-44-LB ---*/

/*--- variables ---*/
var secretWord;
var guessWord;
var badLetters;
var message;
var player1;
var player2;

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
   'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// cache dom elements
var messageEl = document.getElementById('message');

/*--- event listeners ---*/
document.querySelector('button').addEventListener('click', startNewGame);
document.getElementById('enter').addEventListener('click', handleEnter);
document.getElementById('keyboard-table').addEventListener('click', handleLetterChoice);

/*--- functions ---*/
function initialize() {
  message = 'Hey, want to play Hangman?';
  secretWord = [];
  guessWord = [];
  badLetters = [];
  currentPlayer = player1;
  render();
}

/*this will reset board/start new game*/
function startNewGame() {
  message = 'Awesome!';
  getSecretWord();
  render();
  console.log('New Game!')
}

function getSecretWord() {
  message = 'Spell out a word for your opponent to guess. Click enter when done.';
}

function handleLetterChoice(event) {
  var letter = event.target.textContent;
  if (currentPlayer === player1) {
    secretWord.push(letter);
  } else if (currentPlayer === player2) {
    goodOrBad(letter);
  } else return;
  console.log(letter);
  console.log(secretWord);
  render();
}

/*use Enter click from Player1 to:
get word/array length
use that to append word row & fill with *
make object with letter:index number pairing?
*/

function goodOrBad(x) {
  //if good append to guessWord
  //if bad append to badLetters

    //if in secretWord, change innerHTML to reveal
      //message to 'Good one!'
    //if not in secretWord
      //change innerHTML of corresponding keyboard letter to grey or cross-out
      //flip image with corresponding message of increasing doom
        //final image - you're dead and have head fall off

  //take letter, find in secretWord
    //if in secretWord, change innerHTML to reveal
      //message to 'Good one!'
    //if not in secretWord
      //change innerHTML of corresponding keyboard letter to grey or cross-out
      //flip image with corresponding message of increasing doom
        //final image - you're dead and have head fall off
}

function handleEnter() {
  if (currentPlayer === player1) {
    renderSecretWord(secretWord);
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    render ();
  }
  //if player 1 true pass secretWord on to renderSecretWord
  //if player 2 true pass variable from function goodOrBad to renderLetterChoice
  render();
  console.log('Enter!')
}

function render() {
  messageEl.textContent = message;
  renderGallows();
  renderSecretWord();
  renderLetterChoice();
}

function renderGallows() {

}

function renderSecretWord() {
  var swl = secretWord.length;
  var newWordCell = document.createElement('td');
  var wordCell = newWordCell.appendChild('*');
  var wordRow = document.getElementById('word-row');
  for (var idx = 0, idx < swl, idx++) {
    wordRow.appendChild(wordCell);
  }
  currentPlayer = player2;
}

function renderLetterChoice() {
/*  alphabet.forEach(function(letter) {
    // select the letter dom
    var letterEl = document.getElementById(letter);
    var class = (badLetters.includes(letter) || guessWord.includes(letter)) ? 'disable-letter' : '';
    letterEl.addClass(class);
  });
*/}

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
DONE: 1. Initialize state (blank canvas).
2. Render board - gallows
3. Define variables
    a. secretWord - Word submitted
    b. Players
        -player1 - enters the word or phrase to be guessed by Player 2
        -player2 - guesses the word or phrase entered by Player 1
    c. letterEntered - letter(s) submitted
4. Event listeners (letter submit, reset game).
    a. Handling letter submit.
    b. Handling entire phrase submit (win/lose?).
5. letterEntered is 'read'
    a. must be in alphabet
    b. check against secretWord
        i. If letterEntered is in secretWord then append guessWord
          corresponding to correct index (ie if letter 'a' is at
          index 0 of secretWord and letterEntered is 'a', letterEntered
           must be dropped into guessWord at index 0)
        ii. If letterEntered is not in secretWord then:
            1. use innerHTML to reveal different gallows div
            2. drop letterEntered into player2Wrong, no specific order
            ** these two functions do not need to be asynchronous
8. Remove letterEntered from alphabet
9. Determine win or death (state of game).
    a. secretWord === guessWord = win
    b. gallows === full = loss
    c. render
    d. else next letterEntered
10. Handling reset game.
*/
initialize();


