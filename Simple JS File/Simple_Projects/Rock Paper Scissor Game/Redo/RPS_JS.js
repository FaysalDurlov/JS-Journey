let scores = JSON.parse(localStorage.getItem("score")) || {"wins":0,"loses":0,"ties":0};

// Save score to Storage !
function SaveScoreToLocalStore() {
    localStorage.setItem("score",JSON.stringify(scores));
}

function resetScore(){
    scores["wins"] = 0;
    scores["loses"] = 0;
    scores["ties"] = 0
    SaveScoreToLocalStore();
    document.querySelector(".js_scores").innerHTML = `Wins: ${scores["wins"]}, Lost: ${scores["loses"]}, Ties: ${scores["ties"]}`;
}

function updateScores(result){
    if(result==="Win"){
        scores["wins"] +=1;
    } else if(result==="Lose"){
        scores["loses"]+=1
    }else if(result==="Tie"){
        scores["ties"]+=1;
    }
    document.querySelector(".js_result").innerHTML = `${result}`;
    document.querySelector(".js_scores").innerHTML = `Wins: ${scores["wins"]}, Lost: ${scores["loses"]}, Ties: ${scores["ties"]}`;
    SaveScoreToLocalStore();
}

function computerMove(){
    let randomNumber = Math.random();
    if(randomNumber>=0 && randomNumber<1/3){
        return "rock";
    }else if(randomNumber>=1/3 && randomNumber<2/3){
        return "paper";
    }else if(randomNumber>2/3 && randomNumber<=1){
        return "scissors";
    }
}

function playGame(playerMove){
    let ComputerMove = computerMove();
    let result = "";
     if(playerMove==='scissors'){
        if(ComputerMove==='rock'){
            result = 'Lose';
        } else if(ComputerMove==='paper'){
            result = 'Win';
        } else if(ComputerMove ==='scissors'){
            result = 'Tie';
        }
    } else if(playerMove ==='paper'){
        if(ComputerMove==='rock'){
            result = 'Win';
        } else if(ComputerMove==='paper'){
            result = 'Tie';
        } else if(ComputerMove ==='scissors'){
            result = 'Lose';
        }
    } else if(playerMove ==='rock'){
        if(ComputerMove==='rock'){
            result = 'Tie';
        } else if(ComputerMove==='paper'){
            result = 'Lose';
        } else if(ComputerMove ==='scissors'){
            result = 'Win';
        }   
    }
    updateScores(result)
    document.querySelector(".js_moves").innerHTML = `You <img src="../images/${playerMove}-emoji.png" alt="" class="move-icon"><img src="../images/${ComputerMove}-emoji.png" alt="" class="move-icon">Computer`;
}
