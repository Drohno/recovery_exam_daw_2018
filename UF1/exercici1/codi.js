function inici() {

    var numero = document.getElementById('numero').value;
    try{
        numero = parseInt(numero);
    }catch(err){
        window.alert('No has introduït un número');
    }
    if (isNaN(numero)) {
        window.alert('No has introduït un número');
    } else {

        var resultado = '<table><tr><th>' + numero + '</th></tr>';

        for (var i = 0; i < 10; i++) {
            resultado += '<tr>'+ numero + 'x' + i + '=' + numero * i + '</tr>';
        }

        resultado += '</table>';

        document.getElementById('resultat').innerHTML = resultado;
    }
}