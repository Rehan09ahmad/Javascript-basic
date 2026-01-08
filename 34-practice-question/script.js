// callback function
let number = [48, 88, 93, 54, 29];

number.forEach((num)=>{
    console.log(num * num)

});

// callback function
{
    let number = [48, 88, 93, 54, 29];

    number.forEach(function multiplay(num){
        console.log(num *num);

    })
}
// callback function
{
    let number = [48, 88, 93, 54, 29];
    let calculate = (num) =>{
        console.log(num * num);
    }

    number.forEach(calculate);
}