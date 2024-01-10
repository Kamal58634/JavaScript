let randomNumber = Math.floor(Math.random()*100);

const guessField   = document.querySelector(".guessField");
const guessSubmit  = document.querySelector(".guessSubmit");

const guesses      = document.querySelector(".guesses")  ;
const lastResult   = document.querySelector(".lastResult");
const lowOrHi      = document.querySelector(".lowOrHi")  ;

let guessCount=1;
let resetButton;

guessSubmit.addEventListener('click',guessCheck);

function guessCheck(){
            const userGuess= Number(guessField.value);
            
            if(guessCount === 1){
                guesses.textContent="Previous guess:"
            }
            guesses.textContent=`${guesses.textContent} ${userGuess}`

            if(userGuess===randomNumber){
                lastResult.textContent="Congratulation !!!!!!!!";
                lastResult.style.backgroundColor="green";
                lowOrHi.textContent='';
                setGameOver();
            }else if(guessCount===10){
                lastResult.textContent="Game Over !!!!!!!!";
                lastResult.style.backgroundColor="red";
                lowOrHi.textContent='';
                setGameOver();

            }else{
                lastResult.textContent="wrong !!!!!!!!";
                lastResult.style.backgroundColor="red";
                if(userGuess< randomNumber){
                    lowOrHi.textContent='Your guess less then the random!!!';
                }else{
                    lowOrHi.textContent='Your guess greater then the random!!!';
                }
                guessCount +=1;
                guessField.value='';
                guessField.focus();

                
            }

            // console.log(typeof userGuess);
            // alert("I am a placeholder");
}




        // console.log(randomNumber);