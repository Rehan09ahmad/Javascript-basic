// Question 2 guessing number


let gameNum = 20;
let userNum =prompt("Guess the game number");
while(userNum != gameNum){
    userNum=prompt("you enter the wrong number again. Guess again ");

}
console.log("congratulation you gues the right number");