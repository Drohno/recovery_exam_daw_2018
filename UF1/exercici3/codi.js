function inici() {

    Date.prototype.toDateInputValue = (function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    });

    var datepicker = document.getElementById('data');

    datepicker.value = new Date().toDateInputValue();

    document.getElementById('boto').addEventListener('click', () => {
        var dia = 'Diumenge';
        var fecha = new Date(Date.parse(datepicker.value));
        
        switch(parseInt(fecha.getDay())){
            default: dia = 'Diumenge'; break;
            case 1: dia = 'Dilluns'; break;
            case 2: dia = 'Dimarts'; break;
            case 3: dia = 'Dimecres'; break;
            case 4: dia = 'Dijous'; break;
            case 5: dia = 'Divendres'; break;
            case 6: dia = 'Dissabte'; break;
        }
        document.getElementById('resultat').innerHTML = dia;
    });
}

window.onload = inici();