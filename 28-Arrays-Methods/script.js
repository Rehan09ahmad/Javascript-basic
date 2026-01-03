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
