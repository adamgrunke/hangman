//Variable Declarations
var wordSolution ='apple';   // empty string at begining. Using "test" during writing.
var letterGuess;
var btnRst;
var dispCorGuess;
var dispBadGuess;
var wrongArr = [];
var corArr = [];
var wordArr = [];
var wordDisp = [];

// HTML Element References
btnRst = document.getElementById("reset");
btnGuess = document.getElementById("enter");
letterGuess = document.querySelector('[name="input"]');
dispSolution = document.getElementById('solution');
dispCorGuess = document.getElementById('correct');
dispBadGuess = document.getElementById('wrong');

//Any additional functions

wordArr = wordSolution.toUpperCase().split('');
//wordDisp = wordArr;
for (let i = 0; i < wordArr.length; i++){
    wordDisp[i] = '*';
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
        else {
            console.log("should never get this message!")
        }
    }
    dispSolution.textContent = "Game: " + wordDisp.join(' ');
    //wordDisp.join(' ');
}

var guessCompare = function(letter){
    if (wordSolution.includes(letter)){
        corArr.push(letter);
        dispCorGuess.textContent = "Correct: " + corArr.join(', ');
        displayLetters(letter);
        
    }
    else {
        wrongArr.push(letter);
        dispBadGuess.textContent = "Wrong: " + wrongArr.join(', ');
    }
};

btnGuess.addEventListener("click", function(){
    if (checkSingleLetter(letterGuess.value.length)){
        guessCompare(letterGuess.value.toUpperCase());
    };
    letterGuess.value = '';
});

wordSolution = wordSolution.toUpperCase();


