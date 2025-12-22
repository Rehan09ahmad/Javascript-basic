//  string 
{
    let string = "Rehan Ahmad" // dot use ;

for(let R of string ){
    console.log("R =", R)
}
}
// =================== [Array frits name] ==========================
{
    let fruits = ["apple", "Banana", "Mango"]

    for (let items of fruits){
        console.log("items =", items)
    }
}
// ===============[tottal  price array  ]==============================
{
    let num = [290, 220, 130, 240];
    let sum = 0;

    for (let n of num){

        sum += n;
    }
    console.log(sum)
}

// ==================[Even number print ]================================
{
    let nums = [1, 2, 3, 4, 5, 6, 7, 8];

    for (let n of nums ){
        if(n % 2 === 0){
            console.log(n);
        }
    }
}