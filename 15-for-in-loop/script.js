{
    let person = {name: "Rehan Ahamd", age:22, city:"Peshawar"};
for(let key in person ){
    console.log("key =",key, ":",person [key]);

}

}


//====================================

{
let fruits = ["Bpple", "Apple", "Mango", "Orange", "Graps", "Pineapple", "Strabarry"];

for (let i in fruits ){
    console.log("index ", + i, " = ", + fruits , [i]);
}
}

// =========================[Dinamic Object ]=====================================
let score = {Math: 90, English: 87, science: 97};
for (let subject in score ){
    console.log(subject + " : ", + score [subject]);
}



