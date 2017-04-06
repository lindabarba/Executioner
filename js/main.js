/*--- Hangman - Project 1 - WDI-DT-44-LB ---*/

/*--- variables ---*/
var secretWord;
var guessWord;
var badLetters;
var message;
var letter;
var gameStatus;

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
   'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var words = [
  ['f', 'r', 'e', 'd', 'd', 'y'],
  ['j', 'a', 's', 'o', 'n'],
  ['c', 'a', 'n', 'd', 'y', 'm', 'a', 'n'],
  ['m', 'i', 'c', 'h', 'a', 'e', 'l']
];

// cache dom elements
var messageEl = document.getElementById('message');
var guessWordEl = document.getElementById('guess-word');

/*--- event listeners ---*/
document.querySelector('button').addEventListener('click', initialize);
document.getElementById('keyboard-table').addEventListener('click', handleLetterChoice);

/*--- functions ---*/
function initialize() {
  message = 'Hi! Want to play? Start guessing letters';
  secretWord = words[Math.floor(Math.random() * words.length)];
  guessWord = [];
  secretWord.forEach(function(char, idx) {
    guessWord.push(char === ' ' ?  ' ' : '*');
  });
  $('#keyboard-row td').removeClass('disabled');
  badLetters = [];
  render();
  console.log(secretWord);
}

function handleLetterChoice(event) {
  letter = event.target.textContent.toLowerCase();
  event.target.className = 'disabled';
  if (secretWord.includes(letter)) {
    replaceStars();
  } else {
    badLetters.push(letter);
    message = 'Try again!';
  }
  if (secretWord.join('') === guessWord.join('')) {
    message = 'You Win!';
  } else if (badLetters.length === 7) {
    message = 'You Lose!';
  }
  render();
}

function replaceStars() {
  secretWord.forEach(function(char, idx) {
    if (char === letter) guessWord[idx] = char;
  });
}

function render() {
  messageEl.textContent = message;
  renderGallows();
  guessWordEl.textContent = guessWord.join('');
  document.getElementById('keyboard-row').style.display = badLetters.length === 7 ? 'none' : '';
}

//get this to one line with jQuery & use string interpolation for image path
//add image for win screen and start screen
function renderGallows() {
  var l = badLetters.length;
  if (l > 0 && l < 7) {
    var imagePath = ("<img src='images/" + l + ".png' />");
    document.getElementById('image').innerHTML=imagePath;
  }
}

////else (secretWord.join('') === guessWord.join('')) {
  //   var imagePath = ("<img src='images/Win.png' />");
  //   document.getElementById('image').innerHTML=imagePath;
  // } else {
  //   var imagePath = ("<img src='images/Start.png' />");
  //   document.getElementById('image').innerHTML=imagePath;
  // }

initialize();
