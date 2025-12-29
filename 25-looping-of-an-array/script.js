// looping of an array
{
    // for loop 
let numbers = [10, 20, 30, 40, 50, 60]

for(let num = 0; num < numbers.length; num++){
    console.log("index:",numbers[num])   // Index ya arr[i] console.log karte hain.
}

}

{
    // for of loop 
    let hero = ["rehan", "ali", "wijdan", "saad", "sami", "maaz"];

    for(let name of hero ){
        console.log("Name :", name.toUpperCase()); // Direct value console.log karte hain.   {to us uppar case }
        
    }
}

{
    //  do while loop
    let city = ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sialkot", "Bahawalpur"];
     let i = 0;

do {
  console.log("City Name :",city[i]);
  i++;
} while (i < city.length); // for loop and do…while can produce the same output, but do…while executes at least once

}