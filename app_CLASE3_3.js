let numeroSecreto= generarNumeroSecreto();
let intentos=1;
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function VerificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    //Conversión de string a int(numero)
    console.log(intentos);
   if(numeroDeUsuario===numeroSecreto){
      asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)? 'vez':'veces'}`);
      //Uso de template string
      document.getElementById('reiniciar').removeAttribute('disabled');
      // Habilitamos la interacción con el botón de 'Nuevo Juego' cuando se culmine el juego actual
   }
   else{
      //El usuario no acertó
      if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
      }
      else{
        asignarTextoElemento('p','El número secreto es mayor');
      }
      intentos++;
      limpiarCaja();
   }  
    //console.log nos permite mostrar el valor del parametro en la consola
    return;
}

function generarNumeroSecreto(){
   return Math.floor(Math.random()*10)+1;
}

function limpiarCaja(){
   let valorCaja= document.querySelector('#valorUsuario').value='';
}

function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','indica ún numero del 1 al 100');
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}

function ReiniciarJuego(){
    //Limpiamos caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Deshabilitar el número de intentos
    CondicionesIniciales(),
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

CondicionesIniciales();