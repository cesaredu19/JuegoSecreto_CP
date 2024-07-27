
let intentos=1;
let listaNumerosSorteados=[];
let numeroMaximo=10;
let numeroSecreto= 0;
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function VerificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    //Conversión de string a int(numero)
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
   let numeroGenerado= Math.floor(Math.random()*10)+1;
   //Si ya sorteamos todos los números
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.length == numeroMaximo){
     asignarTextoElemento('p','Ya se sortearon todos los números posibles');
   }else{
        // Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
                //principio de recursividad: se llama nuevamente a la función 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
   }
}

function limpiarCaja(){
   let valorCaja= document.querySelector('#valorUsuario').value='';
}

function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','indica ún numero del 1 al 10');
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