let numeroRandom = Math.floor((Math.random() * 100) + 1)

console.log(numeroRandom)


const juegoAdivinanza = (numeroUsuario) => {

    if(isNaN(numeroUsuario)){
        alert("Ingrese algo que sea un numero")
    }else{
        if(numeroUsuario === numeroRandom){
            alert("¡Ganaste un millon de coder poins!")
            return true
        }else if(numeroUsuario < numeroRandom){
            alert("Su numero es mas pequeño que el numero a adivinar")
            return false
        }else{
            alert("Su numero es mayor al que debe adivinar")
            return false
        }
    }
}

let comprobarQueEsUnNumero = (valor) => {
    if(isNaN(valor)){
        return false
    }else{
        return true
    }
}

let core = () => {
    let game = Number(prompt("¡Bienvenido a nuestra sala de juegos!\n 1-Adivinar con vidas\n 2-Adivinar con intentos"))

    let numeroONo = !comprobarQueEsUnNumero(game)

    while(numeroONo){
        alert("Eso no es un numero")

        game = Number(prompt("¡Bienvenido a nuestra sala de juegos!\n 1-Adivinar con vidas\n 2-Adivinar con intentos"))

        numeroONo = !comprobarQueEsUnNumero(game)
    }

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
                    let resultado = juegoAdivinanza(numeroUsuario)

                    if(resultado){
                        break
                    }else{
                        alert("Te quedan " + (vidas - contadorFor) + " vidas")
                    }
                }

                if(contadorFor > vidas){
                    alert("Perdiste, mas suerte la próxima")
                }else{
                    alert("Te quedaron " + (vidas - contadorFor) + " vidas.")
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

                    bandera = !juegoAdivinanza(numeroUsuario)

                    if(bandera){
                        alert("Vas " + contadorWhile + " intentos")
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
}

core()