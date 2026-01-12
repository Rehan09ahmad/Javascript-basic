let marks  = [70, 80, 91, 84, 76, 99, 95, 53, 94, 66, ];

let PassMarks =marks.filter((mark, val)=>{

    return mark > 88;  
})

console.log(PassMarks)