1 < 2 ? console.log("Verdadero") : console.log("Falso")
let darkMode = true

const nodo = `
    <div class="${darkMode ? "dark": ""}">
    </div>
`

console.log(nodo)

const nodo2 = `
    <div class="${darkMode && "dark"}">
    </div>
`

console.log(nodo2)


console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // False

console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false


// const usuario = null

// console.log( usuario.nombre || "El usuario no existe" )
// // Error: "No se pueden leer propiedades de NULL"

// console.log( usuario?.nombre ?? "El usuario no existe")
// "El usuario no existe"


const usuario = {
    nombre: "John Doe",
    edad: 32
}

// let nombre = usuario.nombre
// let edad = usuario.edad

const {nombre : nombreDeJohn, edad} = usuario

console.log(nombreDeJohn, edad)

const ditto = {
    nombre: "ditto",
    id_pokemon_miapihermosa: 23
}

const {id_pokemon_miapihermosa: id} = ditto

console.log(id)

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]


const [, , nombreDelTercero] = nombres

console.log(nombreDelTercero)


console.log(...nombres)

const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
    ...usuario1
}

console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@doe.com"
}

console.log(usuario3)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

function sumar(...numeros) {
    console.log(numeros.reduce((acc, el)=> {
        return acc + el
    },0))
}

sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5, 10, 15, 30, 5, 10, 15, 30, 5, 10, 15, 30, 5) // [ 10, 15, 30, 5 ]