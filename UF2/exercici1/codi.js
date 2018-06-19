function inici() {

    document.write('Text de l’exercici 1 de l’examen d’M6.');
    document.body.innerHTML += '<br><button id="botoColor">canviar de color</button>';
    document.body.innerHTML += '<br><button id="botoColor">restsablir color</button>'

}

window.onload = inici();