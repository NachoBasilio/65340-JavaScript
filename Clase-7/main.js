document.getElementById("carritoIcon").addEventListener("click", ()=>{
    document.getElementById("carrito").classList.toggle("active")
})

let Carrito = JSON.parse(localStorage.getItem("carrito")) || []

const productosLibreria = [
    {
        id: 1,
        nombre: "Cuaderno A4",
        categoria: "Papelería",
        img: "https://acdn.mitiendanube.com/stores/001/144/668/products/766311-d9d4cc98a8d32f30c215915604540232-640-0.png",
        precio: 1200
    },
    {
        id: 2,
        nombre: "Bolígrafo Azul",
        categoria: "Escritura",
        img: "https://static.vecteezy.com/system/resources/previews/008/494/121/non_2x/blue-pen-transparent-png.png",
        precio: 250
    },
    {
        id: 3,
        nombre: "Resaltadores Pack x5",
        categoria: "Escritura",
        img: "https://img.lovepik.com/element/40023/2859.png_1200.png",
        precio: 1450
    },
    {
        id: 4,
        nombre: "Regla 30cm",
        categoria: "Accesorios",
        img: "https://images.vexels.com/media/users/3/141496/isolated/lists/b18ef50aaea15763c58f6edb6a21f4ac-regla-de-madera.png",
        precio: 400
    },
    {
        id: 5,
        nombre: "Carpeta A4",
        categoria: "Organización",
        img: "https://w7.pngwing.com/pngs/856/273/png-transparent-ring-binder-ofysmen-file-folders-a4-price-iceman-angle-cardboard-office.png",
        precio: 850
    },
    {
        id: 6,
        nombre: "Goma de borrar",
        categoria: "Papelería",
        img: "https://static.vecteezy.com/system/resources/thumbnails/011/660/662/small/3d-eraser-icon-illustration-png.png",
        precio: 150
    },
    {
        id: 7,
        nombre: "Tijeras escolares",
        categoria: "Accesorios",
        img: "https://static.vecteezy.com/system/resources/previews/024/090/471/non_2x/green-scissors-school-supply-free-png.png",
        precio: 950
    },
    {
        id: 8,
        nombre: "Lápiz HB",
        categoria: "Escritura",
        img: "https://simball.com.ar/wp-content/uploads/escritura/IMG_002%20copy.png",
        precio: 300
    },
    {
        id: 9,
        nombre: "Cartulina blanca",
        categoria: "Papelería",
        img: "https://camoga.ar/media/catalog/product/cache/17183a23c5d57b885c9e1f3d66234d68/1/8/18040188---01.png",
        precio: 50
    },
    {
        id: 10,
        nombre: "Marcadores permanentes Pack x4",
        categoria: "Escritura",
        img: "https://acdn.mitiendanube.com/stores/001/570/838/products/trabi1-fcce30046a1271084216881369407323-640-0.png",
        precio: 1750
    }
]

const productos = document.getElementById("productos")
const productosCarrito = document.getElementById("productosCarrito")
const total = document.getElementById("total")
const carritoIcon = document.getElementById("carritoIcon")
const botonQueLimpia = document.getElementById("botonQueLimpia")

function botonesComprar(){
    const botones = document.getElementsByClassName("botonesCompra")
    const arrayBotones = Array.from(botones)

    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento)=> {
            let nombre = evento.target.parentElement.children[0].innerText
            let precio = Number(evento.target.parentElement.children[2].children[0].innerText)

            let productoABuscar = Carrito.find(el => el.nombre == nombre)

            if(productoABuscar){
                productoABuscar.cantidad++
            }else{
                Carrito.push({
                    nombre: nombre,
                    precio: precio,
                    cantidad: 1
                })
            }

            actualizadoraCarrito()
        })
    })
}

function botonEliminar() {
    const botones = document.getElementsByClassName("botonesEliminar")
    const arrayBotones = Array.from(botones)


    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento) => {
            let nombre = evento.target.parentElement.children[0].innerText

            let productoABuscar = Carrito.find(el => el.nombre == nombre)

            if(productoABuscar.cantidad == 1){
                let index = Carrito.findIndex(el => el.nombre == productoABuscar.nombre)

                Carrito.splice(index, 1)
            }else{
                productoABuscar.cantidad = productoABuscar.cantidad - 1
            }

            actualizadoraCarrito()
        })
    })
}

function actualizadoraCarrito(){
    productosCarrito.innerHTML = ""
    Carrito.forEach(el => {
        productosCarrito.innerHTML += `
                <div class="producto">
                    <h3>${el.nombre}</h3>
                    <p>Precio: $${el.precio}</p>
                    <p>Cantidad: ${el.cantidad}</p>
                    <button class="botonesEliminar">X</button>
                </div>
        `
    })

    total.innerText = Carrito.reduce((acc, el)=> {
        return acc + el.precio * el.cantidad
    }, 0)

    carritoIcon.children[0].innerText = Carrito.reduce((acc, el)=> {
        return acc + el.cantidad
    }, 0)

    localStorage.setItem("carrito", JSON.stringify(Carrito))

    botonEliminar()
}


botonQueLimpia.addEventListener("click", () => {
    Carrito = []
    localStorage.clear()
    actualizadoraCarrito()
})

document.addEventListener("DOMContentLoaded", () => {
    productosLibreria.forEach(el => {
        productos.innerHTML += `
            <div id="${el.id}" class="producto">
                <h3>${el.nombre}</h3>
                <div class="img">
                    <img src="${el.img}" alt="">
                </div>
                <p>Precio: $<span>${el.precio}</span></p>
                <p>Categoría: ${el.categoria}</p>
                <button class="botonesCompra">Comprar</button>
            </div>
        `
    })
    botonesComprar()

    actualizadoraCarrito()
})