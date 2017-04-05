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
  ['f', 'r', 'e', 'd', 'd', 'y'],
  ['j', 'a', 's', 'o', 'n'],
  ['c', 'a', 'n', 'd', 'y', 'm', 'a', 'n'],
  ['m', 'i', 'c', 'h', 'a', 'e', 'l']
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
  //console.log('secretWord = ', secretWord, 'letter = ', letter);
  if (inArray(secretWord, letter)) {
    //console.log("true");
    //add to guessWord
    //this needs to be looped?
    var i = secretWord.indexOf(letter);
    guessWord.splice(i, 0, letter);
  }
  else {
    badLetters.push(letter);
    message = 'Try again.';
  }
  // if ($(secretWord).inArray(letter)) {
  //   var idx = secretWord.indexOf(letter);
  //   var char = secretWord[idx];
  //   secretWord.forEach(function(char, idx)) {
  //   guessWord.splice(idx, 0, letter);
  //   (secretWord.forEach(function(char, idx) {
  //     if ( char === letter ) guessWord[idx] = char;
  //   });
  //   message = 'Well done!';
  //   console.log('xyz');
  //   } else {
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

//this is working
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

//is the letter variable in global messing this up?
function renderKeyboard() {
  alphabet.forEach(function(letter) {
    var letterEl = document.getElementById(letter);
    var className = (badLetters.includes(letter) || guessWord.includes(letter)) ? 'disabled' : '';
    $(letterEl).addClass(className);
  });
}

initialize();
