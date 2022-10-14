"use strict";
const galeria = document.querySelector(".galeria");
const button = document.querySelector(".button");
const buttonVoltar = document.querySelector(".button-voltar");

var arrayImg = ["./IMG/galeria1.jpg", "./IMG/galeria2.jpg",
                "./IMG/galeria3.jpg", "./IMG/galeria4.jpg",
                "./IMG/galeria5.jpg", "./IMG/galeria6.jpg",
                "./IMG/galeria7.jpg", "./IMG/galeria8.jpg",
                "./IMG/galeria9.jpg", "./IMG/galeria10.jpg",
                "./IMG/galeria11.jpg", "./IMG/galeria12.jpg",
                ];
galeria.style.gridTemplateColumns = `repeat(${arrayImg.length}, 1fr)`;

const agregarFotos = (img)=>{
    for(let i = 0; i<img.length; i++){
        let newImg = `<img class="foto" src="${arrayImg[i]}">`;
        galeria.innerHTML += newImg;
    }
}
agregarFotos(arrayImg);

const filhosElementos = galeria.children;
var contador = 0;
button.addEventListener("click", ()=>{
    filhosElementos[contador].classList.add("seguinte");
    filhosElementos[contador].classList.remove("voltar");
    contador++;

    buttonVoltar.style.display = `inline-block`;

    if(contador >= arrayImg.length-1){
        button.style.display = `none`;
    }
});

buttonVoltar.addEventListener("click", ()=>{
    if(contador <= arrayImg.length && contador >= 0){
        contador--;
        button.style.display = `inline-block`;

        filhosElementos[contador].classList.add("voltar");
        filhosElementos[contador].classList.remove("seguinte");

        if(contador == 0){
            buttonVoltar.style.display = `none`;
        }
    }
})