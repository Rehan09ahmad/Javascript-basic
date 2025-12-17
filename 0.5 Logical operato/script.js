// Logical operator 
console.log("                Logocal AND && ")
{
    let a = 10;
    let b = 5;

    let condi1 = a > b; //true 
    let condi2 = a ===5; // false 
    console.log( "condi1 && condi2 ",  condi1 && condi2 ) // Answer is false 
}

{
    let a = 10;
    let b = 5;

    let condi1 = a > b ; // true 
    let condi2 = a ===10; // true
    console.log("condi1 && condi2", condi1 && condi2) //true
}

console.log("               Logical OR ||")
{
     let a = 10;
    let b = 5;

    let condi1 = a > b ; // true 
    let condi2 = a ===5; // false
    console.log("condi1 && condi2", condi1 || condi2) //true
}

{
     let a = 10;
    let b = 5;

    let condi1 = a < b ; // false
    let condi2 = a ===5; // false
    console.log("condi1 && condi2", condi1 || condi2) //false 
}

console.log ("               Logical NOT !")
{
    let a = 10;
    let b = 5;

    
    console.log("!(a === 10)", !(a ===10)) //true   but the answer is false 
}

{
    let a = 10;
    let b = 5;

    
    console.log("!( 10 > 5)", !(a !==10)) //false    but the answer is true 
}