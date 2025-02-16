let numeroSecreto;
let intentos;
let listaNumeros = [];
let numeroVeces = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${ intentos === 1 ? "intento" : "intentos" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");   
    }else if (numeroDeUsuario > numeroSecreto)
        {asignarTextoElemento("p", "Estas por encima del numero secreto");
        }else {
        asignarTextoElemento("p", "Estas por debajo del numero correcto")
        intentos++;
        limpiarCaja("valorUsuario");
        }   
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroVeces)+1;
    console.log(numeroGenerado);
    console.log(listaNumeros);
    if(listaNumeros.includes (numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }

}
function limpiarCaja(variable){
    document.getElementById(variable).value = '';
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroVeces}`);
    numeroSecreto=generarNumeroSecreto();
    console.log(numeroSecreto)
    intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function reiniciarJuego(){
    limpiarCaja("valorUsuario");
    condicionesIniciales();
}
condicionesIniciales();


