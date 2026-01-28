// let button = document.getElementById("button");

// button.style.color = "white";
// button.style.background = "black";

// let Btn = document.querySelector("#Btn");

Btn.onclick = () => {
    console.log("Btn was click ");
};

let button = document.querySelector("button");

button.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);

}