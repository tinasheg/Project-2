/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
//--------------------------------
// VARIABLES
//--------------------------------
// Get references to page elements
var canvas = document.getElementById("canvas");
var wordToGuess = document.getElementById("word-to-guess");
var lettersGuessed = document.getElementById("letters-guessed");
var selectLang = document.querySelector(".lang");

// test dictionary
//var dictionary = ["cat", "dog"];

// variable to hold chosen word index
//var chosenWordIndex;

// score variables
var guessesLeft;

//empty array to hold each letter of chosen word
var guessList = [];

// empty array to hold guessed letters
var guessed = [];

// # of times letter was added to guessList
var count = 0;

var done;
var currentPart = 10;

//--------------------------------
// FUNCTIONS
//--------------------------------

function displayWord(word) {
  // var word = dictionary[Math.floor(Math.random() * dictionary.length)];
  // console.log("chosen word is: ", word);

  // //saves index of choosen word
  // chosenWordIndex = dictionary.indexOf(word);

  //create _ for each letter in chosen word & write to DOM
  for (var i = 0; i < word.length; i++) {
    guessList.push(" _ ");
  }
  wordToGuess.innerHTML = guessList.join(" ");
  //return word;
}

// reset game
function resetGame() {
  //resets variables
  guessList = [];
  guessed = [];
  count = 0;

  //print values on screen
  lettersGuessed.innerHTML = "Letters Guessed: " + guessed;
}

function gameOver() {
  alert("Game Over");
}

// function to draw hangman
function draw(part) {
  --currentPart;
  console.log("draw part: ", part);
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FFFFFF";
    switch (part) {
      case 1:
        ctx.moveTo(120, 120);
        ctx.lineTo(130, 130); //right leg
        ctx.stroke();
        return true;
      case 2:
        ctx.moveTo(120, 120);
        ctx.lineTo(110, 130); //left leg
        ctx.stroke();
        break;
      case 3:
        ctx.moveTo(120, 100);
        ctx.lineTo(130, 110); //right arm
        ctx.stroke();
        break;
      case 4:
        ctx.moveTo(120, 100);
        ctx.lineTo(110, 110); //left arm
        ctx.stroke();
        break;
      case 5:
        ctx.moveTo(120, 90);
        ctx.lineTo(120, 120); //body
        ctx.stroke();
        break;
      case 6:
        ctx.moveTo(130, 80);
        ctx.arc(120, 80, 10, 0, 2 * Math.PI); //head
        ctx.stroke();
        break;
      case 7:
        ctx.moveTo(120, 50);
        ctx.lineTo(120, 70); //rafter cont.
        ctx.stroke();
        break;
      case 8:
        ctx.moveTo(70, 50);
        ctx.lineTo(120, 50); //rafter
        ctx.stroke();
        break;
      case 9:
        ctx.moveTo(70, 150);
        ctx.lineTo(70, 50); //mast
        ctx.stroke();
        break;
      case 10:
        ctx.moveTo(150, 150);
        ctx.lineTo(50, 150); //base
        ctx.stroke();
        break;
    }
  }
}

//--------------------------------
// MAIN PROCESS
//--------------------------------

//starts the game
resetGame();
var originalWord = $("#word-to-guess")
  .data("original")
  .toLowerCase();
console.log("word from db = ", originalWord);

//updates selected language everytime a 'change' is registered & posts to game api
selectLang.addEventListener("change", event => {
  const result = document.querySelector(".result");
  const lang = event.target.value;
  //result.textContent = "Language selected: " + lang;
  console.log("selected language = ", lang);
});

// reads & sets secretWord from db
var secretWord = $("#word-to-guess")
  .data("guess")
  .toLowerCase();
console.log("tranalsted word =", secretWord);

//show secretWord to DOM
displayWord(secretWord);

guessesLeft = secretWord.length + 10;
console.log("total number of guesses in this round = ", guessesLeft);

//listens for submit-guess button press
$("#submit-guess").on("click", function(event) {
  event.preventDefault();
  var letter = $("#letter-guessed")
    .val()
    .trim();
  console.log("letter guessed: ", letter);

  //clear input field
  $("#letter-guessed").val("");

  //validation, checks that user input was only 1 character and not a number
  var valid = true;
  var regex = /^[a-zA-Z]+$/;
  if (letter.length !== 1 || !letter.match(regex)) {
    valid = false;
    alert("guess must be only 1 letter, no special characters.");
  } else {
    guessed.push(letter);
    lettersGuessed.innerHTML = "Letters Guessed: " + "<br />" + guessed;

    //subtract 1 from guessesLeft
    --guessesLeft;
    console.log("guessesLeft =", guessesLeft);
  }

  //check to see if gussed letter is in secret word
  var inSecretWord = false;
  for (var index = 0; index < secretWord.length; index++) {
    if (secretWord[index] === letter) {
      //console.log(letter, " is the ", index + 1, " letter in the secret word");
      guessList[index] = letter;
      count++;
      inSecretWord = true;
    }
  }
  if (inSecretWord === false) {
    done = draw(currentPart);
    if (guessesLeft === 0 || done) {
      alert("You Lose");
      location.reload();
    }
  } else if (count === secretWord.length) {
    alert("You Win");
    location.reload();
  }
  //prints updated guesslist to screen
  wordToGuess.innerHTML = guessList.join(" ");
});
