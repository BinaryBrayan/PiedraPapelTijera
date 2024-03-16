function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada){
    resultado=''
    if(jugada==1){
        resultado='Piedra 🪨'
    }else if(jugada==2){
        resultado='Papel 🧻'
    }else if(jugada==3){
        resultado='Tijera ✂️'
    }else{
        resultado='Opcion no valida'
    }
    return resultado
}
//hacer el while
//se declaran las variables en cero
let jugador=0
let pc=0
triunfos=0
derrotas=0
while(triunfos<3 && derrotas<3){
    //en cada bucle se asigna un valor a pc y otro a jugador
    pc=aleatorio(1,3)
    jugador=prompt('Elige: 1 para piedra, 2 papel, 3 tijera')

    alert('Elegiste: '+eleccion(jugador))
    alert('PC elije: '+eleccion(pc))
    
    if(pc==jugador){
        alert('empate')
    }else if(jugador==1 && pc==3){
        alert('ganaste')
        triunfos+=1
    }else if(jugador==2 && pc==1){
        alert('ganaste')
        triunfos+=1
    }else if(jugador==3 && pc==2){
        alert('ganaste')
        triunfos+=1
    }else{
        alert('perdiste contra una maquina  ')
        derrotas+=1
    }
}

alert('Ganaste '+triunfos+' veces.Perdiste '+derrotas+' veces.')