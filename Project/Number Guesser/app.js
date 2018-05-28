/**
 * Game functions
 * 1. Player must guess a number between a min and max.
 * 2. Player gets a certain amount of guesses.
 * 3. Notify player of guesses remaining.
 * 4. Notify player of correct answer if loose.
 * 5. Let the player choose to play again.  
 */

 let min=7,
     max=20,
     winningNum =  getRandomNumber(max, min);
     guessesLeft = 3 ;


// UI Elements

 const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play again evert listner
game.addEventListener ('mousedown', function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }

}) ;

// Listen for the guess

guessBtn.addEventListener('click', function(){
   var guess = parseInt(guessInput.value);
   console.log(guess);

   if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Please enter the number between ${min} and  ${max}`,'red' );
   }

   //check if won
   if(guess === winningNum){
        //Gameover - won 
        gameOver(true, `${winningNum} is correct, You Win`);
   }else{

       guessesLeft -= 1;

       if(guessesLeft === 0 ){
           //Gameover- 
           //disable the input
       gameOver(false ,`Game Over, you lost the correct number is ${winningNum}`);

       }else{
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
           setMessage(`${guess} is not correct, only ${guessesLeft} guesses left`,'red');
       }
   }
});


function setMessage(msg , color){
    message.style.color = color
    message.textContent = msg;
}


 function gameOver(won, msg){

    won === true ? color = 'green' : color  = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

 }  

 function getRandomNumber(max, min){

    //console.log(Math.floor(Math.random()*(max-min+1)+min));

    return Math.floor(Math.random()*(max-min+1)+min);

 }
