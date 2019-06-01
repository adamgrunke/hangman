//Variable Declarations
var wordSolution ='test';   // empty string at begining. Using "test" during writing.
var letterGuess;
var wrongArr = [];
var corArr = [];
var btnRst;
var dispCorGuess;
var dispBadGuess;
// HTML Element References
btnRst = document.getElementById("reset");
btnGuess = document.getElementById("enter");
letterGuess = document.querySelector('[name="input"]');
dispCorGuess = document.getElementById('correct');
dispBadGuess = document.getElementById('wrong');

//Any additional functions

var checkSingleLetter = function(length){
    if (length > 1){
        alert("Please enter single letters only");
        return letterGuess.value ='';
    }
    else{
        return letterGuess.value;
    }
};

btnGuess.addEventListener("click", function(){
    if (checkSingleLetter(letterGuess.value.length)){
        guessCompare(letterGuess.value.toUpperCase());
    };
    letterGuess.value = '';
})

var guessCompare = function(letter){
    if (wordSolution.includes(letter)){
        console.log("good guess!");
        corArr.push(letter);
        console.log(corArr);
        dispCorGuess.textContent = "Correct: " + corArr.join(', ');
        
    }
    else {
        console.log(letter + " is not in the word");
        wrongArr.push(letter);
        console.log(wrongArr);
        dispBadGuess.textContent = "Wrong: " + wrongArr.join(', ');
    }


}

wordSolution = wordSolution.toUpperCase();
//console.log(wordSolution);


