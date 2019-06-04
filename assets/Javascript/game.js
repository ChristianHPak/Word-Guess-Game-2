// delcare character variables
var letters = 0;
var lettersGuessed = [];
var wins = 0;
var guessesRemaining = 10;
var correctblanks = [];

//making a splashpage, use .show and .hide in an ifelse boolean statement

// character variables
var characters = ['bowser', 'waluigi', 'koopalings', 'birdo', 'rosalina', 'toad', 'yoshi']

var ranCharacter = characters[Math.floor(Math.random() * characters.length)];
console.log(ranCharacter)

function reset(){
    guessesRemaining = 10;
    lettersGuessed = [];
    var ranCharacter = characters[Math.floor(Math.random() * characters.length)];
    var lettersofword = ranCharacter.split("");
    blanks = lettersofword.length;
    for (var i = 0; i < blanks; i++) {
        correctblanks.push("_ ");
    }
    $("#lettersguessed").text(lettersGuessed);
    $("#guessesremaining").text(guessesRemaining);
    $("#currentword").append(correctblanks);
}
reset()

function addLetter(str, index, char){
    str = correctblanks.substr(0, index) + char + correctblanks.substr(index + 1)
    console.log(correctblanks)
}

document.onkeyup = function (event){
    var userPress = event.key.toLowerCase();

    var lettersinword = false;

    for (var i = 0; i < blanks; i++) {
        if (ranCharacter[i] == userPress) {
            lettersinword = true;
        }
    }

    // if true, the letter will remove blanks and replace
    if (lettersinword) { 
        for (var i = 0; i < blanks; i++) {
            if (ranCharacter[i] == userPress) {
                correctblanks = userPress;
                addLetter();
            }
        }
        // the guess will go down and the guessed letter will be outputted
    } else {
        guessesremaining--;
        $("#lettersguessed").append(userPress + " ")
    }
}
alert("Press Enter To Start")
