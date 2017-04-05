/*--- Hangman - Project 1 - WDI-DT-44-LB ---*/

/*--- variables ---*/
var secretWord;
var guessWord;
var badLetters;
var message;
var letter;

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
   'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var words = [
  ['s', 'e', 'c', 'r', 'e', 't'],
  ['m', 'u', 'r', 'd', 'e', 'r'],
  ['k', 'i', 'l', 'l', 'e', 'r']
];

// cache dom elements
var messageEl = document.getElementById('message');

/*--- event listeners ---*/
document.querySelector('button').addEventListener('click', initialize);
document.getElementById('keyboard-table').addEventListener('click', handleLetterChoice);

/*--- functions ---*/
function initialize() {
  message = 'Hi! Want to play? Start guessing letters';
  secretWord = words[Math.floor(Math.random() * words.length)];
  guessWord = [];
  badLetters = [];
  render();
  console.log(secretWord);
}

function handleLetterChoice(event) {
  letter = event.target.textContent;
  // use jQuery to add class & disappear letter - NOT WORKING
  $('#letter').addClass('disabled').removeClass('keyboard-cell');
  console.log('secretWord = ', secretWord, 'letter = ', letter);
  // if ($(secretWord).inArray(letter)) {
  //   ///var idx = secretWord.indexOf(letter);
  //   //var char = secretWord[idx];
  //   //secretWord.forEach(function(char, idx)) {
  //   ///guessWord.splice(idx, 0, letter);
  //   //(secretWord.forEach(function(char, idx) {
  //   //  if ( char === letter ) guessWord[idx] = char;
  //   //});
  //   message = 'Well done!';
  //   console.log('xyz');
  //   } else {
  //     badLetters.push(letter);
  //     message = 'Try again.';
  //   }
  checkWin();
  console.log(letter);
  console.log(guessWord);
  console.log(badLetters);
}

function inArray(array, letter) {
  var lowerCaseLetter = letter.toLowerCase();
  var idx = array.indexOf(lowerCaseLetter);
  if (idx === -1) {
    return false;
  } else {
    return true;
  }
}

function checkWin() {
  if (secretWord.join('') === guessWord.join('')) {
    message = 'You won!';
    document.getElementById("image").innerHTML="<img src='images/Win.png' />";
    //disable keyboard keep start game
  } else if (badLetters.length > 6) {
    message = 'You lost.';
    document.getElementById("image").innerHTML="<img src='images/Lose.png' />";
    //disable keyboard
  } else return;
}

function render() {
  messageEl.textContent = message;
  renderGallows();
  renderSecretWord();
  renderKeyboard();
}

function renderGallows() {
  var l = badLetters.length;
  if (l > 0) {
    var imagePath = ("<img src='images/" + l + ".png' />");
    document.getElementById('image').innerHTML=imagePath;
  }
}

function renderSecretWord() {
  $('word-row').text(letter)
  var sw = document.getElementById('word-row');
}

function renderKeyboard() {
  //if not in secretWord
    //change innerHTML of corresponding keyboard letter to grey or cross-out
    //flip image with corresponding message of increasing doom
      //final image - you're dead and have head fall off

  alphabet.forEach(function(letter) {
    // select the letter dom
    var letterEl = document.getElementById(letter);
    var className = (badLetters.includes(letter) || guessWord.includes(letter)) ? 'disable-letter' : '';
    $(letterEl).addClass(className);
  });
}

initialize();

/*
function letterAlreadyUsed(letter) {
  //check guessWord & badLetters
  return false;
}

function goodOrBad() {
  //use ternary here
  var isw = secretWord.indexOf(letter);
  if (secretWord.includes(letter) === true) {
    renderKeyboard(letter);
  } else if (secretWord.includes(letter) === false) {
      badLetters.push(letter);
      renderBadLetter(letter);
    }
    else return;
    console.log(badLetters);
}
*/

  //do I need this if removing letter
  //if (letterAlreadyUsed(letter)) return;
  // check if in secretWord, if so add to gueesWord

