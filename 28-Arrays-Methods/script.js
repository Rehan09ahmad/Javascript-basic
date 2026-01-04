// Arrays PUSH () Methods

let friends = ["Ali", "Saad", "Khayam","Ahamd"];

   friends.push("Rehan", "Junaid")
console.log(friends)  // to add some name at last 

// ====================================

//Arrays PoP Method 

let fruit = ["Apple", "Banana", "oringe", "Graps"];

console.log(fruit)
let deleteItem = fruit.pop();
console.log(fruit)
console.log("Deleted ?",deleteItem) // to deleted last name of array 

// =========================

// Arrays toString Method 

let names = ["Riaz", "Rehan", "Haris", "Rameez"];

console.log(names.toString()) // array convert to string 

// ================================

// arrays method concat

let group1 = ["Rehan", "Ahamd", "Ali"];
let group2 = ["Junaid", "Hamza"];
let group3 = ["saad", "Khayam", "Maaz"];

let Addmen = group1.concat(group2, group3);
console.log(Addmen)

// ======================================


// arrays method Unshift 

let name = ["Rehan", "Ahamd", "Ali"];
name.unshift("saad")
console.log(name)  //it work same like push but it add to start

//=======================================================


// arrays methods shift 

let Name = ["haris", "Rameez", "Rehan", "Rizwan"];

let hero = Name.shift()
console.log("deleted",hero) //it work same like pop but it delete to start

// =========================================================

// arrays method slice 


let heros = ["sharukh khan", "salman khan", "imran khan", "ameer khan"];

console.log(heros.slice())   //returns a piece of arrays 
console.log(heros.slice(0))   // slice (startindx,    endindx)
console.log(heros.slice(1))
console.log(heros.slice(2))
console.log(heros.slice(3))
console.log(heros.slice(1,3)) // it print onlye thos index which you targeted    slice(1,3)  1 and 2 print and the 3rd one not printed

// =========================================================

// {splice Method}


// splice() array ko beech se change karta hai.
// Is se hum:
// item remove kar sakte hain
// item add kar sakte hain
// remove + add dono ek sath kar sakte hain



console.log("======================================================")
let arr = [ 1, 2, 103, 4, 5, 6, 7, 8, 9, 10,];
arr.splice(2, 1, 3) //  replace
console.log(arr, "3 is replace");

console.log("========================================================")

let arr1 = ["rehan", "ahmad", "ali"];
arr1.splice(1,0, "khan") // add 
console.log(arr1, "khan added") // 

console.log("===========================================================")

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr2.splice(3,3)
console.log(arr2, "remove 4,5,6") // remove 

