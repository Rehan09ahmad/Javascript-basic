// simpal methos map
{
    let nums = [10, 20, 30, 40, 50];

nums.map((val)=>{
    console.log(val + 5) // add 5 with every index 
})
}

// add newarray in map 

{
    let nums = [5, 10, 15, 20, 25];

    let NewArr = nums.map((val)=>{
        return val * 2; //  multiplay 2 with every index  
    })
    console.log(NewArr)
}


// filter array 
{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let EvenNumber = numbers.filter((val) =>{
        return val % 2 === 0;
    });
    console.log(EvenNumber)
}

// filter array Students Marks 

let marks = [44, 59 , 40, 70, 90, 60];

let passMarks = marks.filter((val)=>{
    return val > 44;
});

console.log(passMarks)

{
// reduce array methods 

let arr = [1, 2, 3, 4, 5];

let newarray = arr.reduce((total, val)=> {
    return total + val;
});

console.log(newarray)

}

{
// finde out larg number through reduce 

let arr = [70, 80, 91, 84, 76, 99, 95, 53, 94, 66, ];

let PassMarks =arr.reduce((result, val)=>{

    return result > val ? result : val;  
})

console.log(PassMarks)
}