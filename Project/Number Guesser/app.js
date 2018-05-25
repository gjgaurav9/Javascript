/**
 * Game functions
 * 1. Player must guess a number between a min and max.
 * 2. Player gets a certain amount of guesses.
 * 3. Notify player of guesses remaining.
 * 4. Notify player of correct answer if loose.
 * 5. Let the player choose to play again.  
 */

 let min=1,
     max=10,
     winningNum = 2;
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
        //disable the input
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct, you Won`,'green');
   }else{

       guessesLeft -= 1;

       if(guessesLeft === 0 ){
           //Gameover- 
           //disable the input
        guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        setMessage(`Game Over, you lost the correct number is ${winningNum}`,'red');

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


 