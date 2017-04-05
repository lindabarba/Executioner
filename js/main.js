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
  ['f', 'r', 'e', 'd', 'y'],
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

function inArray(array, letter) {
  var lowerCaseLetter = letter.toLowerCase();
  var idx = array.indexOf(lowerCaseLetter);
  if (idx === -1) {
    return false;
  } else {
    return true;
  }
}

function handleLetterChoice(event) {
  letter = event.target.textContent;
  var idx = secretWord.indexOf(letter);
  if (inArray(secretWord, letter)) {
    guessWord.splice(idx, 0, letter);
  } else {
    badLetters.push(letter);
    message = 'Try again.';
    }
/*
  var char = secretWord[idx];
    secretWord.forEach(function(char, idx) {
      if ( char === letter ) guessWord[idx] = char; {
        guessWord.splice(idx, 0, letter);
*/
    checkWin();
    render();
    console.log(letter);
    console.log(guessWord);
    console.log(badLetters);
}

function checkWin() {
  var win = (secretWord.join('') === guessWord.join(''));
  var lose = (badLetters.length > 6);
  if (win === true) {
    message = 'You won!';
    document.getElementById("image").innerHTML="<img src='images/Win.png' />";
    //need true/false win logic
  } else if (lose === true) {
    message = 'You lost.';
    document.getElementById("image").innerHTML="<img src='images/Lose.png' />";
    //need true/false win logic
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
  if (l > 0 && l < 7) {
    var imagePath = ("<img src='images/" + l + ".png' />");
    document.getElementById('image').innerHTML=imagePath;
  }
}

function renderSecretWord() {
  //display secretWord.length *
  if (guessWord.length > 0) {
    var displaySecretWord = (secretWord.join(''));
    $('#word-row').text(displaySecretWord);
  } else if (guessWord.length > 0 && secretWord.length > guessWord.length) {
      $('#word-row').text('FIXME');
  } else $('#word-row').text('*');
}

//this is working
function renderKeyboard() {
  $('#keyboard-row').removeClass('disabled');
  alphabet.forEach(function(letter) {
    var letterEl = document.getElementById(letter);
    var className = (badLetters.includes(letter) || guessWord.includes(letter)) ? 'disabled' : '';
    $(letterEl).addClass(className);
  });
  if (badLetters.length > 6 || (guessWord.length === secretWord.length)) {
    $('#keyboard-row').addClass('disabled');
  } else return;/*if () {
    $('#keyboard-row').removeClass('disabled');
  }*/
  //  console.log("game over");
  //}
}

initialize();
