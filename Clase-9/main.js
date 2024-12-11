document.getElementById("icono-carrito").addEventListener("click", ()=>{
    document.getElementById("carrito-contenedor").classList.toggle("on")
})
document.getElementById("boton-cerrar").addEventListener("click", ()=>{
    document.getElementById("carrito-contenedor").classList.toggle("on")
})

let Carrito = JSON.parse(localStorage.getItem("carrito")) || []

const Productos = document.getElementById("productos")
const CarritoDOM = document.getElementById("carrito")
const BotonComprar = document.getElementById("boton-comprar")
const Buscador = document.getElementById("buscador")

Buscador.addEventListener("submit", async (e)=>{
    e.preventDefault()

    console.log(e.target[0].value)

    const data = await llamadoraDeData()

    const dataFiltrada = data.filter(el => el.nombre.toLowerCase().includes(e.target[0].value.toLowerCase()))

    funcionQueCreaCards(dataFiltrada)
})

BotonComprar.addEventListener("click", ()=>{
    const total = Carrito.reduce((acc, el)=>{
        return acc + (el.precio * el.cantidad)
    },0).toFixed(2)

    if(total == 0){
        return
    }

    Swal.fire({
        title: "Su total es de: " + total,
        text: "¿Usted quiere continuar con la compra?",
        showCancelButton: true
    }).then((results)=>{
        if(results.isConfirmed){
            Swal.fire({
                title: "Agregue su email",
                input: "email"
            }).then((results)=>{
                if(results.value){
                    Carrito = []
                    actualizadoraDeCarrito()
                }
            })

        }else{
            Swal.fire({
                title: "No pasa nada, puedes seguir comprando",
                timer: 1500,
                timerProgressBar: true
            })
        }
    })
})

const actualizadoraDeCarrito = () => {
    CarritoDOM.innerHTML = ""

    localStorage.setItem("carrito", JSON.stringify(Carrito))

    Carrito.forEach(el => {
        const container = document.createElement("div")
        container.classList.add("card-carrito")

        const info = document.createElement("div")
        info.classList.add("info")

        const titulo = document.createElement("h3")
        const imagen = document.createElement("img")
        const precio = document.createElement("p")

        titulo.innerText = el.nombre
        imagen.src = el.imagen
        precio.innerText = el.precio

        info.append(titulo, imagen, precio)

        const cantidadContainer = document.createElement("div")

        const botonMas = document.createElement("button")
        const botonMenos = document.createElement("button")
        const cantidad = document.createElement("p")

        botonMas.innerText = "+"
        botonMenos.innerText = "-"
        cantidad.innerText = el.cantidad

        cantidadContainer.append(botonMenos, cantidad, botonMas)

        container.appendChild(info)
        container.appendChild(cantidadContainer)

        botonMas.addEventListener("click", () => {
            const index = Carrito.findIndex(prod => prod.id == el.id)
            Carrito[index].cantidad += 1
            actualizadoraDeCarrito()
        })

        botonMenos.addEventListener("click", () => {
            const index = Carrito.findIndex(prod => prod.id == el.id)

            if(Carrito[index].cantidad == 1){
                Carrito.splice(index, 1)
            }else{
                Carrito[index].cantidad -= 1
            }
            actualizadoraDeCarrito()
        })

        CarritoDOM.appendChild(container)
    })
}

const funcionQueCreaCards = (arrayDeProductos) => {
    Productos.innerHTML = ""
    arrayDeProductos.forEach(el => {
        const container = document.createElement("div")

        container.classList.add("producto")

        const titulo = document.createElement("h3")
        const imagen = document.createElement("img")
        const containerDesc = document.createElement("div")
        const desc = document.createElement("p")
        const precio = document.createElement("p")
        const botonDeCompra = document.createElement("button")

        containerDesc.appendChild(desc)
        containerDesc.classList.add("descripcion")


        titulo.innerText = el.nombre
        imagen.src = el.imagen
        desc.innerText = el.desc
        precio.innerText = "$ " + el.precio

        botonDeCompra.innerText = "Comprar"

        container.append(titulo, imagen, containerDesc, precio, botonDeCompra)

        botonDeCompra.addEventListener("click", ()=>{
            const index = Carrito.findIndex(prod => prod.id == el.id)

            if(index == -1){
                Carrito.push({
                    nombre: el.nombre,
                    imagen: el.imagen,
                    precio: el.precio,
                    id: el.id,
                    cantidad: 1
                })
            }else{
                Carrito[index].cantidad += 1
            }

            actualizadoraDeCarrito()

            Swal.fire({
                icon: "success",
                title: "Usted agrego al " + el.nombre + " carrito",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                toast: true,
                position: "bottom-start"
            })
        })

        Productos.appendChild(container)
    })
}

const llamadoraDeData = async () => {
    const response = await fetch("./data.json")
    const arrayProductos = await response.json()


    return arrayProductos
}


document.addEventListener("DOMContentLoaded", async () => {
    const arrayData = await llamadoraDeData()
    funcionQueCreaCards(arrayData)
    actualizadoraDeCarrito()
})