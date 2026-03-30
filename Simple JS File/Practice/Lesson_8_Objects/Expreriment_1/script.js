const randomNumber = Math.random();
const result = randomNumber < 0.5 ? 'heads' : 'tails';
let guess = '';

function playGame(value){
    guess = value;
    if (guess === result){
        score.win+=1;
        console.log('You Win !');
        localStorage.setItem('score',JSON.stringify(score));
    } else{
        score.losses+=1;
        console.log('You lose !');
        localStorage.setItem('score',JSON.stringify(score));
    }
    console.log(score);
}
score = {
    win: 0,
    losses:0
}