// let numeroFavProf = prompt("¿Cual es el numero favorito del profe?")


// if(6 == numeroFavProf){
//     alert("Adivinaste!")
// }else if (12 == numeroFavProf){
//     alert("Ese es el numero que menos le gusta al profe")
// }else{
//     alert("No adivinaste")
// }

// let menu = Number(prompt("Perrito con Chaucha Store:\n 1-perrito\n 2-chaucha\n 3-sandia"))

// switch(menu) {
//     case 1:
//         alert("usted compro perrito")
//         break;
//     case 2:
//         alert("usted compro chaucha")
//         break;
//     case 3:
//         alert("usted compro sandia")
//         break;
//     default:
//         alert("Esta opcion no existe")
//         break;
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let numeroFavProf = prompt("¿Cual es el numero favorito del profe?")

// while(6 != numeroFavProf){
//     if(12 == numeroFavProf){
//         alert("Ese es el numero que menos le gusta al profe")
//         numeroFavProf = prompt("¿Cual es el numero favorito del profe?")
//     }else{
//         alert("No adivinaste")
//         numeroFavProf = prompt("¿Cual es el numero favorito del profe?")
//     }
// }

// alert("¡Adivinaste!")

// do{
//     alert("Funcione igual")
// }while(false)

//Bandera

let bandera = true

while(bandera){

    //Mucho código
    bandera = confirm("¿Quiere seguir dando vueltas?")
    //Mucho código

}

//Centinela
let nombre = prompt("¿Cual es el nombre del gato del profe?")

while(!(nombre === "Rengar")){
    nombre = prompt("¿Cual es el nombre del gato del profe?")
}

//Contador

let contador = 0

while(contador <= 5){
    console.log(contador)
    contador++
}

