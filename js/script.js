//Variable Declarations
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
var wordSolution;
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
var guessCountInput;
var btnShowSolution;
var ltrBlock;

// HTML Element References
btnRst = document.getElementById("reset");
btnGuess = document.getElementById("enter");
letterGuess = document.querySelector('[name="input"]');
solution = document.getElementById('solution');
dispCorGuess = document.getElementById('correct');
dispBadGuess = document.getElementById('wrong');
dispRemaining = document.getElementById("error");
guessCountInput = document.querySelector('[type="number"]');
btnShowSolution = document.getElementById("showsolution");

//Any additional functions

var reset = function(){
    corArr = [];
    wrongArr = [];
    //wordDisp = [];
    letterGuess.value = '';
    dispCorGuess.textContent = "Correct: " + corArr.join(', ');
    dispBadGuess.textContent = "Wrong: " + wrongArr.join(', ');
    dispRemaining.textContent = "Guesses Remaining: " + maxErrors;
    getWord();
    //solution.textContent = "Guess the word!      " + wordDisp.join(' ');
    deleteBlocks();
    createBlocks();
    //fillLtrBlanks();
    //letterDisp();
};

// var fillBlanks = function(){ // DELETE
//    //***** */
//    wordArr.forEach(function(){
//         wordDisp.push('*');
//     });
//     //***** DELETE this section  */
// };

var createBlocks = function(){
   wordArr.forEach(function(element, i){
        let ltrElement = document.createElement('div');
        ltrElement.setAttribute('data-id', i);
        ltrElement.setAttribute('class', 'letters');
        ltrElement.textContent = '*';
        document.getElementById("ltrs").appendChild(ltrElement);
   });
};

var deleteBlocks = function(){
    let element = document.getElementById("ltrs");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };
};


// var fillLtrBlanks = function(){
// //     wordArr.forEach(function(element, i){
// //         let ltrElement = document.getElementsByClassName('letters');
// //         ltrElement[i].textContent = '*';
// //    });

//    for (let i = 0; i < wordArr.length; i++){
//        let ltr = document.getElementsByClassName('letters');
//        ltr[i].textContent = '*';
//    }
// };

var fillLtrBlocks = function(){
    wordArr.forEach(function(element, i){
        let ltrElement = document.getElementsByClassName('letters')
        ltrElement[i].textContent = wordArr[i];
   });
};


var getWord = function(){
    // create random value between 0 and 9 to select from wordList array.
    rnd = Math.floor(Math.random()*10);
    wordSolution = wordList[rnd].toUpperCase();
    wordArr = wordSolution.split(''); 
    //fillBlanks();
    //fillLtrBlanks();
};

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
    for (let i = 0; i < wordArr.length; i++){
        if (wordArr[i] === letter) {
            let ltrElement = document.getElementsByClassName('letters');
            ltrElement[i].textContent = wordArr[i];
            
            // wordDisp[i] = letter; // DELETE 
        }
    }
    //solution.textContent = "Guess the word!  " + wordDisp.join(' ');
};

var guessCompare = function(letter){
    if (wordSolution.includes(letter)){
        corArr.push(letter);
        dispCorGuess.textContent = "Correct: " + corArr.join(', ');
        displayLetters(letter);
        
    }
    else {
        wrongArr.push(letter);
        dispBadGuess.textContent = "Wrong: " + wrongArr.join(', ');
        dispRemaining.textContent = "Guesses Remaining: " + (maxErrors - wrongArr.length);
    }
};

var newTextValue = function(){
    if (checkSingleLetter(letterGuess.value.length)){
        guessCompare(letterGuess.value.toUpperCase());
    };
    letterGuess.value = '';
};

var winCheck = function(){
    let flag = 0;
    wordArr.forEach(function(e,i){
        let ltr = document.getElementsByClassName('letters');
        if (ltr[i].textContent === '*'){
            flag++;
        }});
        
        console.log('flag count = ' + flag);
        if (flag > 0){
            console.log("there is an *");
            return false;
        }
        else {
            console.log("no * found");
            return true;
        };
};

var gameStatus = function(){
    // if (!(maxErrors - wrongArr.length)){
    //     dispRemaining.textContent = "Guesses Remaining: " + 0;
    //     alert("Game Over! Try again!");
    //     } else if (wordDisp.includes("*")) {
    //         console.log("keep playing");
    //     }
    //     else { 
    //         alert("You win!");
    //     }
    
    if (!(maxErrors - wrongArr.length)){
        dispRemaining.textContent = "Guesses Remaining: " + 0;
        alert("Game Over! Try again!");
        }
        else if (winCheck()){
            alert("You WIN!!!!");
        }
        else {
            console.log("test01");
        }







};

var mainGame = function(){
    newTextValue();
    gameStatus();
};

var showSolution = function(){
    //solution.textContent = "Guess the word!      " + wordArr.join(' ');

    wordArr.forEach(function(e,i){
        let ltrElement = document.getElementsByClassName('letters');
        ltrElement[i].textContent = wordArr[i];
    })

}

reset(); // Initializes game

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
btnShowSolution.addEventListener("click", showSolution);
