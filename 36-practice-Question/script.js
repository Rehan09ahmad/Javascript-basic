let arr = [70, 80, 91, 84, 76, 99, 95, 53, 94, 66, ];

let PassMarks =arr.reduce((result, val)=>{

    return result > val ? result : val;  
})

console.log(PassMarks)