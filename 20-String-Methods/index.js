// lower case 
let Name = " Rehan Ahamd";
console.log(Name.toLowerCase())

{
    // uppar case 
    let Name = "Rehan Ahamd";
    console.log(Name.toUpperCase())
}

{
    // remove whitespace 

    let Name  = "      Rehan   Ahmad                 ";
    console.log(Name.trim())   //trim() is a JavaScript string method that removes extra spaces from the start and end of a string.
}

{
    // slice 
    let name = " Rehan Ahmad";
    console.log(name.slice(0,8))  // slice() is a JavaScript string method that extracts a part of a string and returns it as a new string, without changing the original string.
}

{ 
    // concat 
    let FirstName = "Rehan";
    let SecondName = "Ahmad";

    let result = FirstName.concat( SecondName);
    console.log("My Name is ", result)  // concat() is a JavaScript string method used to join two or more strings and return a new string.
}

{
    // Replace 
    let str = "Hello";
    console.log(str.replace("H", "M")); //replace() is a JavaScript string method that replaces a specified part of a string with another value and returns a new string.
}

{
    // charAt 
    let str = "Ilovejs";
    console.log(str.charAt(1)); // charAt() is a JavaScript string method that returns the character at a specified index in a string.
}