let divs = document.querySelectorAll(".box");

let box = 1
for (div of divs ){
    div.innerText = `New uniq value ${box}`;
    div++
}