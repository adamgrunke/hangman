//Variable Declarations
var wordSolution ='test';   // empty string at begining. Using "test" during writing.
var wordArr = [];
var letterGuess;
var guesses = [];  
var wrongGuesses = []
var btnRst;
var displayGuesses;
// HTML Element References
btnRst = document.getElementById("reset");
btnGuess = document.getElementById("enter");
letterGuess = document.querySelector('[name="input"]')
displayGuesses = document.getElementById("guesses")
// Create all event listeners
// btnRst.addEventListener("click", function(){
//     if (btnRst.classList = "reset") {
//         btnRst.classList.remove('reset');
//         btnRst.classList.add("startgame");
//         console.log(btnRst.textContent)
//         btnRst.textContent = "Start Game!";
//         console.log(btnRst.textContent)
//     }
//     else {
//         btnRst.classList.remove("startgame");
//         btnRst.classList.add('reset');
//         btnRst.textContent = "Restart Game?"
//     }
// })

//Any additional functions
var startGame = function(){
    reset();
    getWord();

}
var getWord = function(){
    // Initial version will use this hard coded word 
    // Use split to create an array of the wordSolution string
    wordArr = wordSolution.split('');
    console.log(wordArr + wordArr.length);
}

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
        guessCompare(letterGuess.value);
        guesses.push(letterGuess.value)
        displayGuesses.textContent = guesses.join(', ');
    };
    letterGuess.value = '';
})

var guessCompare = function(letter){
    if (wordSolution.toUpperCase().includes(letter.toUpperCase())){
        console.log("good guess!");
    }
    else {
        console.log(letter.toUpperCase() + " is not in the word")
    }


}

var reset = function(){
    // initialize all counts
    // randomize selection for word selection array
    // get new word
    // clear text boxes

}

//wordSolution = getWord();
//console.log(wordSolution);


