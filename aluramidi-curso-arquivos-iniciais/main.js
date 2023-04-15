const listTecla = document.querySelectorAll('.tecla');

function tocaSom (ElementoAudio){
    document.querySelector(ElementoAudio).play();
}

for(i = 0; i < listTecla.length;i++){
    const tecla = listTecla[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => { tocaSom(idAudio); }
}