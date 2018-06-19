function inici() {

    document.getElementById('link1').addEventListener('click', () => {
        var respuesta = confirm('¿Ets major de 12 anys?');
        if (respuesta) {
            window.location.href = "https://www.starwars.com/films/solo";
        } else {
            window.location.href = "https://www.chiquipedia.com/peliculas-infantiles";
        }
    });

    document.getElementById('link2').addEventListener('click', () => {
        var respuesta = confirm('¿Ets major de 12 anys?');
        if (respuesta) {
            window.open('https://www.youtube.com/watch?v=PnJRSXhcZDw', 'targetWindow', 'toolbar=no,location = no,status = no, menubar = no,scrollbars = yes,resizable = no,width = 500px,height = 500px ');
        } else {
            window.alert('No pots accedir al trailer per ser menor de 12 anys');
        }
    });

}

window.onload = inici();