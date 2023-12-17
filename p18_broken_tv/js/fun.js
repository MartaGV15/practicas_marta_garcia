const images = [
    "img/nightmare.jpeg",
    "img/novia.jpeg",
    "img/avatar.avif",
    "img/castillo.webp",
    "img/gollum.webp",
    "img/wars.webp",
    "img/chihiro.jpeg",
    "img/hogwarts.webp",
]

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');

const tvImg = document.querySelector('#tvImg');

const btnOnOff = document.querySelector('.button_on-off');

btn1.addEventListener('click',cambiarCanal);
btn2.addEventListener('click',cambiarCanal);
btn3.addEventListener('click',cambiarCanal);
btn4.addEventListener('click',cambiarCanal);
btn5.addEventListener('click',cambiarCanal);
btn6.addEventListener('click',cambiarCanal);
btn7.addEventListener('click',cambiarCanal);
btn8.addEventListener('click',cambiarCanal);

btnOnOff.addEventListener('click', apagarTele)

function cambiarCanal(){
    tvImg.src = images[this.dataset.number]
}

function apagarTele(){
    tvImg.classList.toggle('turn-off');
}