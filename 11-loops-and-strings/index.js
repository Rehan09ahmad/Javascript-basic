for( let i = 1; i <= 7; i++){
    if(i == 5) //Immediately stops the loop, even if the condition is still true.
        break; 
            console.log(i)
        
    
}

for(let i = 1; i <= 10; i++){
    if (i == 3)   //Skips the current iteration and moves to the next iteration of the loop.
        continue
    console.log(i)
}