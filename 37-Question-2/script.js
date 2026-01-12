let n = prompt("Enter your Number");

let arr=[ ];

for(let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr)

let sum = arr.reduce((sum, pre) => {
    return sum + pre;
});

console.log(sum)

let factriol = arr.reduce((sum, pre) => {
    return sum * pre;
});

console.log(factriol)
