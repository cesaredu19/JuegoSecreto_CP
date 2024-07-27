
let numeroSecreto= generarNumeroSecreto();

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function VerificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    //Conversión de string a int(numero)
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroSecreto === numeroDeUsuario);
    //console.log nos permite mostrar el valor del parametro en la consola
    return;
}

function generarNumeroSecreto(){
   return Math.floor(Math.random()*10)+1;
}


asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','indica ún numero del 1 al 100');
