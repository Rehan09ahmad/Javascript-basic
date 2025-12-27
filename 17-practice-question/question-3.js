let secritNumber = Math.floor(Math.random()* 10)+ 1;
let guess ;
let attempts = 0;
while (guess !== secritNumber){
    guess = Number (prompt("Guess a number between 1 and 10"));
    if (guess >secritNumber){
        alert("Too High!")
    }
    else if (guess <secritNumber){
        console.log ("Too low")
    }else{
        alert ("🎉 congratulation! you guess the corret number ");
    }
}