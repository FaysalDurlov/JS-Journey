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
    document.querySelector('.js_moves').innerHTML=`Computer = ${ComputerMove}. Player = ${playerMove}.`;
    document.querySelector('.js_scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}