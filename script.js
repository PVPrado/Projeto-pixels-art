let corpo;
corpo = document.querySelector('body');

let paletaCores;

paletaCores = document.querySelectorAll(".color");
paletaCores[0].style.backgroundColor = ("black");
paletaCores[1].style.backgroundColor = ("red");
paletaCores[2].style.backgroundColor = ("green");
paletaCores[3].style.backgroundColor = ("blue");

let pixels = document.querySelectorAll(".pixel");

let quadro = document.querySelector("#pixel-board");

for(let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].addEventListener("click", selecCor);
}

function selecCor(event) {
    const select = document.querySelector(".selected");
    select.classList.remove("selected");
    event.target.classList.add("selected");
}

for(let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener("click", colorirPixel);
}

function colorirPixel(event) {
    const select = document.querySelector(".selected")
    event.target.style.backgroundColor = select.style.backgroundColor;
}

let btn = document.querySelector("#clear-board")
btn.addEventListener("click", limpar);
function limpar() {
     for(let i = 0; i < pixels.length; i += 1) {
         pixels[i].style.backgroundColor = "white";
     }
 }