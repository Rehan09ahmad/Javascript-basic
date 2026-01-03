// for of loop

{
    let items =[250, 645, 300, 900, 50];

let i = 0;
for(let val of items){
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`)
    i++
};

}
// for loop

{
   let item = [250, 645, 300, 900, 50];

   for (let i = 0; i < item.length; i++) {
   let offer = item[i] / 10;
   item[i] -= offer;
   }
   console.log(item)
}


// for loop
{
    let item = [ 500, 600, 200, 800, 300, 100];

    for(let i = 0; i < item.length; i++){
        let offer = item[i] / 10;
        item[i] -= offer ;
    }
    console.log(item)
}


// for of loop
{
    let item = [ 100, 200, 300, 400, 500, 600];

    let i = 0;
    for(let val of item){
        let offer = val / 10;
        item[i] = item[i] - offer;
        console.log(`vale after offer ${item[i]}`)
        i++
    }
    
}
