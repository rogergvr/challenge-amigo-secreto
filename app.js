// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresCandidatos = [];
let listaCandidatos = document.getElementById('listaAmigos');

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value;
    //console.log(nuevoAmigo);
    if (nuevoAmigo == ""){
        alert('Por favor, ingrese un nombre válido');
    } else {
        nombresCandidatos.push(nuevoAmigo);
        //console.log(nombresCandidatos);
        //limpiarTexto();
        solicitaNuevoNombre();
        actualizarListaAmigos();
    }
    return;
}

function actualizarListaAmigos() {
    let elementoLista = document.createElement("li");
    listaCandidatos.innerHTML = "";
//    console.log('Limpia Lista HTML');
//    console.log(listaCandidatos);
    
    for (let index = 0; index < nombresCandidatos.length; index++) {
        //console.log(nombresCandidatos[index]);
        //console.log(index);       
        elementoLista.textContent = nombresCandidatos[index];
        listaCandidatos.appendChild(elementoLista);
        //console.log(listaCandidatos);       
        elementoLista = document.createElement("li");
    }
       
    return;
}

function sortearAmigo() {

    if (validarAmigos()){
        let indiceAmigo = Math.floor(Math.random()*nombresCandidatos.length);
        console.log(indiceAmigo);
        let elementoAmigo = document.createElement("li");
        listaCandidatos.innerHTML = "";
        elementoAmigo.textContent = nombresCandidatos[indiceAmigo];
        listaCandidatos.appendChild(elementoAmigo);
    }
    return;
}

function validarAmigos() {
    console.log(nombresCandidatos);
    if (nombresCandidatos.length == 0) {
        alert('Aún no ha agregado amigos a la lista');
        return false;
    } else {
        return true;
    }
}
/*
function actualizarListaAmigos(nuevoAmigo) {
    let elementoLista = document.createElement("li");
    elementoLista.textContent = nuevoAmigo
    listaCandidatos.appendChild(elementoLista);
    console.log(listaCandidatos);
    return;
}
*/

function limpiarTexto(){
    document.getElementById('amigo').value='';
    return;
}

function solicitaNuevoNombre(){
    document.getElementById('amigo').value='';
    document.getElementById('amigo').setAttribute('placeholder', 'Ingresa un nuevo nombre');
    return;
}
