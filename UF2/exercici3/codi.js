var llibre = {
    id_llibre: null,
    titol: null,
    any: null,
    infoAny: function () {
        window.alert(this.any);
    }
};

var llibres = [];

function nou() {
    var titol = prompt('¿Títol del llibre?', 'Sense nombre');
    var any = prompt('Any del llibre?', 'dd/MM/yyyy');
    llibre.id_llibre = llibres.length;
    llibre.titol = titol;
    llibre.any = any;
    llibres.push(llibre);
    document.getElementById('llistat').innerHTML += '<br>' + llibre.id_llibre + ' ' + llibre.titol + ' ' + llibre.any + '<br>';
}

function mostra_any() {
    var id = prompt('ID llibre que vols saber l\'any', 0);
    id = parseInt(id);
    if(isNaN(id)){
        window.alert('Input no vàlid');
    }else{
        try{
            llibres[id].infoAny();
        }catch(err){
            window.alert('Llibre no disponible');
        }
    }
}