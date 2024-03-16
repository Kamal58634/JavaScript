let randomNumber = Math.floor(Math.random()*100);

const guessField   = document.querySelector(".guessField");
const guessSubmit  = document.querySelector(".guessSubmit");

const guesses      = document.querySelector(".guesses")  ;
const lastResult   = document.querySelector(".lastResult");
const lowOrHi      = document.querySelector(".lowOrHi")  ;

const list         = document.querySelector(".list");
createLiToList()
function createLiToList(){
    const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
    for(city of cities){
        let town=city.toLowerCase();
        town=town.replace(town[0],town[0].toUpperCase());
        let newLi=document.createElement('li');
        newLi.textContent=town;
        list.appendChild(newLi);
    }

}
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




function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="Start New Game";
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}

function resetGame(){
    guessCount=1;
    const resultParas=document.querySelectorAll(".resultParas p");
    for(const resultPara of resultParas){
        resultPara.textContent="";
    }
    lastResult.style.backgroundColor="white"
    
    resetButton.parentNode.removeChild(resetButton);
    // guessField.parentNode.style.backgroundColor='red';
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value="";
    guessField.focus();
    let randomNumber = Math.floor(Math.random()*100);



}