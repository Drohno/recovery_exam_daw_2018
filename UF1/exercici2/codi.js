var colors = ["blau", "groc", "vermell", "verd", "rosa"]; 

function inici(){

    document.getElementById('boto').addEventListener('click', () => {
        var color = document.getElementById('color').value;
        color = color.toLowerCase();
        var i = 0, trobat = false;
        while(i<colors.length && !trobat){
            if(colors[i] == color){
                trobat = true;
            }
            i++;
        }
        if(trobat){
            document.getElementById('resultat').innerHTML = 'Color ' + color + ' trobat !!';
        }else{
            document.getElementById('resultat').innerHTML = 'Color ' + color + ' no trobat. Prova una altra vegada !!';
        }
        
    });
}

window.onload=inici;

