const API_PRIMERA_GEN = "https://pokeapi.co/api/v2/pokemon?limit=151"
const API_UN_POKEMON = "https://pokeapi.co/api/v2/pokemon/"
let Equipo = JSON.parse(localStorage.getItem("pokemon-equipo")) || []

const FormularioPokemon = document.getElementById("formulario_pokemon")
const PokemonList = document.getElementById("pokemon_list")
const EquipoDOM = document.getElementById("equipo")

FormularioPokemon.addEventListener("submit", async (event)=>{
    event.preventDefault()
    const response = await fetch(API_UN_POKEMON + event.target[0].value)
    const data = await response.json()

    // fetch(API_UN_POKEMON + event.target[0].value)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })

    PokemonList.innerHTML = ""
    pintarUnPokemonEnPantalla(data)
    agregadoraDeEventos()
})

function pintarUnPokemonEnPantalla(pokemon){
    PokemonList.innerHTML += `
        <div class="pokemon-card">
            <div class="titulo">
                <h2 class="nombre">${pokemon.name}</h2>
                <h2 class="numero">${pokemon.id}</h2>
            </div>
            <div class="imagen" >
                <img src="${pokemon.sprites.front_default}" alt="">
            </div>
            <p>${pokemon.abilities[0].ability.name}</p><p>${pokemon?.abilities[1]?.ability.name || ""}</p>
            <button class="botonAgregar">Agregar</button>
        </div>
    `
}

function pintarUnPokemonEnEquipo(pokemon){
    EquipoDOM.innerHTML += `
        <div class="pokemon-card">
            <div class="titulo">
                <h2 class="nombre">${pokemon.name}</h2>
                <h2 class="numero">${pokemon.id}</h2>
            </div>
            <div class="imagen" >
                <img src="${pokemon.sprites.front_default}" alt="">
            </div>
            <p>${pokemon.abilities[0].ability.name}</p><p>${pokemon?.abilities[1]?.ability.name || ""}</p>
            <button class="botonEliminar">X</button>
        </div>
    `
}

function agregadoraDeEventos(){
    const botones = document.getElementsByClassName("botonAgregar")
    const botonesArray = Array.from(botones)

    botonesArray.forEach(el => {
        el.addEventListener("click", (event) => {
            Equipo.push(event.target.parentElement.children[0].children[1].innerText)
            console.log("Funciono")
            actualizarEquipo()
        })
    })
}

async function agregadoraDeEventosX(){
    const botones = document.getElementsByClassName("botonEliminar")
    const botonesArray = Array.from(botones)
    console.log(botonesArray)
    botonesArray.forEach(el => {
        el.addEventListener("click", async (event) => {
            Equipo = Equipo.filter(el => el != event.target.parentElement.children[0].children[1].innerText)
            await actualizarEquipo()
        })
    })
}

async function actualizarEquipo(){
        EquipoDOM.innerHTML = ""
        Equipo.forEach(async (el) => {
            const response = await fetch(API_UN_POKEMON + el)
            const data = await response.json()
            pintarUnPokemonEnEquipo(data)
            agregadoraDeEventosX()
        })
        localStorage.setItem("pokemon-equipo", JSON.stringify(Equipo))
}

document.addEventListener("DOMContentLoaded", async () => {
    try{
        const response = await fetch(API_PRIMERA_GEN)

        if(!response.ok){
            throw new Error("La respuesta fue negativa")
        }

        const data = await response.json()

        const pokemonDetails = await Promise.all(data.results.map(async(el) => (await fetch(el.url)).json()))

        pokemonDetails.forEach(pokemon => {
            pintarUnPokemonEnPantalla(pokemon)
        })

        agregadoraDeEventos()
        actualizarEquipo()
    }catch(error){
        console.error(error)
    }

})