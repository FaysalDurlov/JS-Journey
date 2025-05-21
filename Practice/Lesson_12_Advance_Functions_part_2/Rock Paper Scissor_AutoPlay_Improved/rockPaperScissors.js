score = JSON.parse(localStorage.getItem('score'));

// localStorage.setItem('score',JSON.stringify(score))
function updateScores(value){
    if(value ==='Win'){
        score.wins+=1;
    }else if(value ==='Lose'){
        score.loses+=1;
    }else if(value ==='Tie'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score))
}
function resetScore(){
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.setItem('score',JSON.stringify(score))
    document.querySelector('.js_scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

let isAutoplaying = false;
let IntervalId;

function AutoPlay(){
    if(!isAutoplaying){
        IntervalId = setInterval(()=> {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoplaying = true;
    } else{
        clearInterval(IntervalId);
        isAutoplaying = false;
    }
}

document.querySelector('.js_rockButton').addEventListener('click',()=>{
    playGame('Rock');
});
document.querySelector('.js_paperButton').addEventListener('click',()=>{
    playGame('Paper');
});
document.querySelector('.js_scissorsButton').addEventListener('click',()=>{
    playGame('Scissors');
});
document.querySelector('.js_resetButton').addEventListener('click',()=>{
    let waringOutput = document.querySelector('.js_waring_sign');
    if(waringOutput.innerText===''){
        waringOutput.innerHTML=`<p>Are you sure you want to reset the score?</p>
    <button class="WaringButtons js_YesButton">Yes</button>
    <button class="WaringButtons js_NoButton">No</button>`;
        document.querySelector('.js_YesButton').addEventListener('click',()=>{
            resetScore();
            waringOutput.innerHTML = '';
        });
        document.querySelector('.js_NoButton').addEventListener('click',()=>{
            waringOutput.innerHTML = '';
        });
    }
});
document.querySelector('.js_AutoPlayButton').addEventListener('click',()=>{
    let buttonsats = document.querySelector('.js_AutoPlayButton');
    if(buttonsats.innerText ==='Auto Play'){
        buttonsats.innerHTML = 'Stop Playing';
    }else{
        buttonsats.innerHTML='Auto Play';
    }
    AutoPlay();
});

document.body.addEventListener('keydown',(event)=>{
    let waringOutput = document.querySelector('.js_waring_sign');
    if(event.key ==='r'){
        playGame('Rock');
    }else if(event.key ==='p'){
        playGame('Paper');
    }else if(event.key ==='s'){
        playGame('Scissors');
    }else if(event.key==='a'){
        let buttonsats = document.querySelector('.js_AutoPlayButton');
        if(buttonsats.innerText ==='Auto Play'){
            buttonsats.innerHTML = 'Stop Playing';
        }else{
            buttonsats.innerHTML='Auto Play';
        }
        AutoPlay();
    }else if(event.key==='Backspace'){
        if(waringOutput.innerText===''){
            waringOutput.innerHTML=`<p>Are you sure you want to reset the score?</p>
        <button class="WaringButtons js_YesButton">Yes</button>
        <button class="WaringButtons js_NoButton">No</button>`;
            document.querySelector('.js_YesButton').addEventListener('click',()=>{
                resetScore();
                waringOutput.innerHTML = '';
            });
            document.querySelector('.js_NoButton').addEventListener('click',()=>{
                waringOutput.innerHTML = '';
            });
        }
    }else if(event.key==='y'){
        resetScore();
        waringOutput.innerHTML = '';
    }else if(event.key==='n'){
        waringOutput.innerHTML = '';
    }
});





function pickComputerMove(){
    let randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'Rock';
    } else if (randomNumber >=1/3 && randomNumber<2/3){
        computerMove = 'Paper';
    } else if(randomNumber >=2/3 && randomNumber<1){
        computerMove = 'Scissors';
    }
    return computerMove;
}
function playGame(playerMove){
    let ComputerMove = pickComputerMove();
    let result ='';
    if(playerMove==='Scissors'){
        if(ComputerMove==='Rock'){
            result = 'Lose';
        } else if(ComputerMove==='Paper'){
            result = 'Win';
        } else if(ComputerMove ==='Scissors'){
            result = 'Tie';
        }
    } else if(playerMove ==='Paper'){
        if(ComputerMove==='Rock'){
            result = 'Win';
        } else if(ComputerMove==='Paper'){
            result = 'Tie';
        } else if(ComputerMove ==='Scissors'){
            result = 'Lose';
        }
    } else if(playerMove ==='Rock'){
        if(ComputerMove==='Rock'){
            result = 'Tie';
        } else if(ComputerMove==='Paper'){
            result = 'Lose';
        } else if(ComputerMove ==='Scissors'){
            result = 'Win';
        }   
    }
    updateScores(result);

    document.querySelector('.js_result').innerHTML= `${result}`;
    document.querySelector('.js_moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
        <img src="images/${ComputerMove}-emoji.png" alt="" class="move-icon">Computer`;
    document.querySelector('.js_scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}