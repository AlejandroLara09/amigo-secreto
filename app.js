// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigo = [];



function nombreAmigos(){
    let ingresoAmigo = document.getElementById("amigo");
    let nombreAmigo = ingresoAmigo.value;
    
    console.log(nombreAmigo);

    if (nombreAmigo === "") {
//entregar un aviso en caso de  no ingresar datos
    alert("Debes digitar un nombre");
    return;
    }
    amigo.push(nombreAmigo); //permite ingreso de nombres a la lista
   ingresoAmigo.value = "";
   registroDeAmigos();

}

function registroDeAmigos(){
 let listaAmigos = document.getElementById("listaAmigos");
 listaAmigos.innerHTML="";
 

 for(let i = 0; i <amigo.length; i++){

    let item = document.createElement("li");
    item.textContent = amigo[i];
    listaAmigos.appendChild(item);
}
 
}
//funcion sorteo
function sortearAmigo() {
    if (amigo.length === 0) { //cantidad minima de ingreso
    alert("No hay suficientes amigos para sortear");
    return;
    }
    let amigoElegido = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= `El amigo secreto elegido es : ${amigoElegido}`;
//permite limpiar la lista
    let limpiarRegistro = document.getElementById("listaAmigos");
    limpiarRegistro.innerHTML="";
}





