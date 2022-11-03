const tijera = 3
const papel = 2
const piedra = 1
//let eleccionPc = 0
//let eleccionJugador = 0
let triunfos = 0
let empate = 0
let perdidas = 0


function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function combate(eleccionPc,eleccionJugador){
    let resultadoCombate = ""
    if(eleccionPc == eleccionJugador){
        resultadoCombate =  "Empate"
    }else if(eleccionPc == piedra && eleccionJugador == papel){
        resultadoCombate = "Jugador gana"
    }else if(eleccionPc == papel && eleccionJugador == tijera){
        resultadoCombate = "Jugador gana"
    }else if(eleccionPc == tijera && eleccionJugador == piedra){
        resultadoCombate =  "Jugador gana"
    } else {
        resultadoCombate = "PC gana"
    }
    return resultadoCombate;
}
function eleccion(jugada){
    let resultado = "";
    if(jugada == piedra){
        resultado = "Piedra 🥌";
    }else if(jugada == papel){
        resultado = "Papel 📄"
    }else if(jugada == tijera){
        resultado = "Tijera ✂"
    }else {
        resultado = "Error"
    }
    return resultado;
}
while(triunfos < 3 && perdidas < 3){

    let eleccionJugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("Jugador elige " + eleccion(eleccionJugador))

    let eleccionPc = aleatorio(1,3);
    //alert("PC elige " + eleccion(eleccionPc))

   let resultadoDelCombate = combate(eleccionJugador,eleccionPc)

    if(resultadoDelCombate === "Jugador gana"){
        triunfos = triunfos + 1
    }else if(resultadoDelCombate == "Empate"){
        empate = empate + 1
    }else{
        perdidas = perdidas + 1
    }
}
//alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. Empates " + empate + " veces")


