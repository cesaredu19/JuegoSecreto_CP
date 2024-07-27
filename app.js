let titulo = document.querySelector('h1');
titulo.innerHTML='Juego del número secreto';
// Document Object Model: nos permite la interacción entre 
//Java Script y HTML para editar o usar métodos a los objetos que se 
//muestran en HTML 
let parrafo=document.querySelector('p');
parrafo.innerHTML='Indica un número del 1 al 10';

function intentoDeUsuario(){
    alert('Click desde el botón');
}