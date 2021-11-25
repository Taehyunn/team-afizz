

//Pig Dice Game Rules
//- If the player rolls a 1, they score nothing and it becomes the next player's turn.
//- If the player rolls any other number, it is added to their turn total and the player's turn continues.
//- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
//- The first player to score 100 or more points wins.



console.log('hhhi')


let pigDice = 0
let userPoint = 0


//주사위 굴릴 경우 랜덤 숫자
function randomNum(min,max){
 var rdNum = Math.floor(Math.random()*(max-min+1)) + min;
 return rdNum;
}

randomNum(1,6)


