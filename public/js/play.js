//--------------------------------
// VARIABLES
//--------------------------------
// Get references to page elements
var canvas = document.getElementById("canvas");
var wordToGuess = document.getElementById("word-to-guess");
var lettersGuessed = document.getElementById("letters-guessed");

// test dictionary
var dictionary = ["cat", "dog"];

// variable to hold chosen word index
var chosenWordIndex;

// score variables
var guessesLeft = 10;

//empty array to hold each letter of chosen word
var guessList = [];

// empty array to hold guessed letters
var guessed = [];

// # of times letter was added to guessList
var count = 0;

var done;
//--------------------------------
// FUNCTIONS
//--------------------------------
//function to choose random word from dictionary
function chooseWord() {
  const word = dictionary[Math.floor(Math.random() * dictionary.length)];
  console.log("chosen word is: ", word);

  //saves index of choosen word
  chosenWordIndex = dictionary.indexOf(word);

  //create _ for each letter in chosen word & write to DOM
  for (let index = 0; index < word.length; index++) {
    guessList.push(" _ ");
  }
  wordToGuess.innerHTML = guessList.join(" ");
  return word;
}

// reset game
function resetGame() {
  //resets variables
  guessesLeft = 4;
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
  console.log("draw part: ", part);
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    switch (part) {
      case 0:
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.stroke();
        return (done = true);
      case 1:
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        ctx.stroke();
        return (done = false);
      case 2:
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        ctx.stroke();
        return (done = false);
      case 3:
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();
        return (done = false);
    }
  }
}

//--------------------------------
// MAIN PROCESS
//--------------------------------

//starts the game
resetGame();
var secretWord = chooseWord();

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
  }

  //check to see if gussed letter is in secret word
  var inSecretWord = false;
  for (let index = 0; index < secretWord.length; index++) {
    if (secretWord[index] === letter) {
      //console.log(letter, " is the ", index + 1, " letter in the secret word");
      guessList[index] = letter;
      count++;
      inSecretWord = true;
    }
  }
  if (guessesLeft <= 4 && inSecretWord === false) {
    done = draw(guessesLeft + count);
    if (done) {
      gameOver();
    }
  } else if (count === secretWord.length) {
    alert("You Win");
  }
  //prints updated guesslist to screen
  wordToGuess.innerHTML = guessList.join(" ");
});
