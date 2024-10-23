let numeroRandom = Math.floor((Math.random() * 100) + 1)

console.log(numeroRandom)



// if(isNaN(numeroUsuario)){
//     alert("Ingrese algo que sea un numero")
// }else{
//     if(numeroUsuario === numeroRandom){
//         alert("¡Ganaste un millon de coder poins!")
//     }else if(numeroUsuario < numeroRandom){
//         alert("Su numero es mas pequeño que el numero a adivinar")
//     }else{
//         alert("Su numero es mayor al que debe adivinar")
//     }
// }

let game = Number(prompt("¡Bienvenido a nuestra sala de juegos!\n 1-Adivinar con vidas\n 2-Adivinar con intentos"))

let numeroUsuario
let banderaGame = true
while(banderaGame){
    switch(game){
        case 1:
            //For (vidas)
            let vidas = Number(prompt("¿Cuantas vidas quiere tener?"))

            let contadorFor = 0

            for (let i = 0; i < vidas; i++) {
                contadorFor++

                numeroUsuario = Number(prompt("¿Que numero estoy pensando?"))

                if(isNaN(numeroUsuario)){
                    alert("Ingrese algo que sea un numero")
                }else{
                    if(numeroUsuario === numeroRandom){
                        alert("¡Ganaste un millon de coder poins!")
                        break
                    }else if(numeroUsuario < numeroRandom){
                        alert("Su numero es mas pequeño que el numero a adivinar")
                        alert("Te quedan " + (vidas - contadorFor) + " vidas")
                    }else{
                        alert("Su numero es mayor al que debe adivinar")
                        alert("Te quedan " + (vidas - contadorFor) + " vidas")
                    }
                }
            }

            if(contadorFor > vidas){
                alert("Perdiste, mas suerte la próxima")
            }else{
                alert("Te quedar " + (vidas - contadorFor) + " vidas.")
            }

            banderaGame = confirm("¿Quiere seguir jugando?")
            break
        case 2:
            //While (Intentos)
            let bandera = true

            let contadorWhile = 0

            while(bandera){
                contadorWhile++

                numeroUsuario = Number(prompt("¿Que numero estoy pensando?"))

                if(isNaN(numeroUsuario)){
                    alert("Ingrese algo que sea un numero")
                }else{
                    if(numeroUsuario === numeroRandom){
                        alert("¡Ganaste un millon de coder poins!")
                        bandera = false
                    }else if(numeroUsuario < numeroRandom){
                        alert("Su numero es mas pequeño que el numero a adivinar")
                        alert("Este es tu intento numero: " + contadorWhile)
                    }else{
                        alert("Su numero es mayor al que debe adivinar")
                        alert("Este es tu intento numero: " + contadorWhile)
                    }
                }
            }

            alert("Ganase con " + contadorWhile + " intentos")


            banderaGame = confirm("¿Quiere seguir jugando?")
            break
        default:
            alert("No tenemos ese juego")
            banderaGame = confirm("¿Quiere seguir jugando?")
            break
    }

    if(banderaGame){
        game = Number(prompt("¡Bienvenido a nuestra sala de juegos!\n 1-Adivinar con vidas\n 2-Adivinar con intentos"))
        numeroRandom = Math.floor((Math.random() * 100) + 1)
    }
}





