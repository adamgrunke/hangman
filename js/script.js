//Variable Declarations
var wordSolution ='test';   // empty string at begining. Using "test" during writing.
var letterGuess;
var btnRst;
var btnGuess;
var dispCorGuess;
var dispBadGuess;
var dispRemaining;
var wrongArr = [];
var corArr = [];
var wordArr = [];
var wordDisp = [];
var rnd;
var maxErrors = 5;

var wordList = [
    'apple', 
    'orange', 
    'bananas', 
    'apple', 
    'orange', 
    'bananas', 
    'test',
    'strawberries',
    'tacos',
    'pizza'];

// HTML Element References
btnRst = document.getElementById("reset");
btnGuess = document.getElementById("enter");
letterGuess = document.querySelector('[name="input"]');
dispSolution = document.getElementById('solution');
dispCorGuess = document.getElementById('correct');
dispBadGuess = document.getElementById('wrong');
dispRemaining = document.getElementById("error");

//Any additional functions

var reset = function(){
    corArr = [];
    wrongArr = [];
    wordDisp = [];
    letterGuess.value = '';
    dispCorGuess.textContent = "Correct: " + corArr.join(', ');
    dispBadGuess.textContent = "Wrong: " + wrongArr.join(', ');
    dispSolution.textContent = "Game: " + wordDisp.join(' ');

    getWord();
} 

var getWord = function(){
    // create random value between 0 and 9 to select from wordList array.
    rnd = Math.floor(Math.random()*10);
    wordSolution = wordList[rnd].toUpperCase();
    wordArr = wordSolution.split(''); 
    for (let i = 0; i < wordArr.length; i++){
        wordDisp[i] = '*';
    }
}

var checkSingleLetter = function(length){
    if (length > 1) {
        alert("Please enter single letters only");
        return letterGuess.value ='';
    }
    else {
        return letterGuess.value;
    }
};

var displayLetters = function(letter){ 
    for (let i = 0; i < wordDisp.length; i++){
        if (wordArr[i] === letter) {
            wordDisp[i] = letter;
        }
    }
    dispSolution.textContent = "Game: " + wordDisp.join(' ');
    //wordDisp.join(' ');
}

var guessCompare = function(letter){
    //console.log("guessCompare.."); //DELETE
    if (wordSolution.includes(letter)){
        //console.log("gsComp if..") //DELETE
        corArr.push(letter);
        dispCorGuess.textContent = "Correct: " + corArr.join(', ');
        displayLetters(letter);
        
    }
    else {
       //console.log("gsComp else.."); //DELETE
        wrongArr.push(letter);
        dispBadGuess.textContent = "Wrong: " + wrongArr.join(', ');
        dispRemaining.textContent = "Guesses Remaining: " + (maxErrors - wrongArr.length);
    }
};
var newTextValue = function(){
    //console.log("newTextValue .."); //DELETE
    if (checkSingleLetter(letterGuess.value.length)){
        guessCompare(letterGuess.value.toUpperCase());
    };
    letterGuess.value = '';
    };

var gameStatus = function(){
    if (!(maxErrors - wrongArr.length)){
        dispRemaining.textContent = "Guesses Remaining: " + 0;
        alert("Game Over! Try again!");
    } else if (wordDisp.includes("*")) {
            console.log("keep playing");
    }
    else { 
        alert("You win!");
        alert("Play again?");
    }
};

var init = function(){
    reset();
};

var mainGame = function(){
    newTextValue();
    gameStatus();
};

init();
// ********************************************

btnGuess.addEventListener("click", mainGame);

//https://stackoverflow.com/questions/14542062/eventlistener-enter-key
// I found this solution for using carriage return to enter a value.
letterGuess.addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    if (key === 13) { 
        mainGame();

    }
});

btnRst.addEventListener("click", reset);



