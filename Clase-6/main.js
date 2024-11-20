/*
    Consigna: Vamos a hacer una tienda aplicando funciones de orden superior:
    [] - Poder comprar productos, agregar productos a un carrito y poder ver el detalle de la compra.
    [] - Poder aplicar descuentos a los productos.
    [] - Poder filtrar productos por nombre.
    [] - Poder ordenar productos por precio, de mayor a menor y viceversa.
    [] - Poder ver el precio total de la compra.
    [] - Poder vaciar el carrito.
    [] - Guardar la compra en el local storage.
    [] - Poder elegir forma de pago.
*/

const pseudoPeticion = [
    { nombre: "Cuaderno A4", precio: 450, id: 1, stock: 10 },
    { nombre: "Bolígrafo Azul", precio: 120, id: 2, stock: 10 },
    { nombre: "Lápiz HB", precio: 80, id: 3, stock: 10 },
    { nombre: "Tijeras Escolares", precio: 350, id: 4, stock: 10 },
    { nombre: "Goma de Borrar", precio: 50, id: 5, stock: 10 },
    { nombre: "Regla de 30 cm", precio: 200, id: 6, stock: 10 },
    { nombre: "Resaltador Amarillo", precio: 160, id: 7, stock: 10 },
    { nombre: "Cartulina Blanca", precio: 60, id: 8, stock: 10 },
    { nombre: "Corrector Líquido", precio: 220, id: 9, stock: 10 },
    { nombre: "Marcador Permanente", precio: 180, id: 10, stock: 10 }
]

class Producto{
    constructor(nombre, precio, id, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
        this.cantidad = 0
    }

    mostrar(){
        alert(this.nombre)
    }
}

// const ArrayDeProductos = pseudoPeticion.map(el => new Producto(el.nombre, el.precio, el.id, el.stock))

const ArrayDeProductos = pseudoPeticion.map(el => {
    return new Producto(el.nombre, el.precio, el.id, el.stock)
})

class Carrito{
    constructor(){
        this.productos = JSON.parse(localStorage.getItem("carrito")) || []
        this.total = 0
    }

    verCarrito(){
        let mensaje 
        if(this.productos.length == 0){
            mensaje = "No hay nada en el carrito"
        }else{
            mensaje = this.productos.reduce((acc, el)=>{
                return acc + el.id + " - " + el.nombre + " $" + el.precio + " ctd: " + el.cantidad + "\n"
            }, "Estos son los productos que tenes en tu carrito:\n")
        }
        alert(mensaje)
    }

    agregarProducto(producto, cantidad){
        let estaEnElCarrito = this.buscarUnProducto(producto.id)
        if(!estaEnElCarrito){
            producto.cantidad = cantidad
            this.productos.push(producto)
        }else{
            estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad
        }

        localStorage.setItem("carrito", JSON.stringify(this.productos))
        console.log(this.productos)
    }

    buscarUnProducto(id){
        if(this.productos.some(el => {
            return el.id === id
        })){
            let producto = this.productos.find(el => {
                return el.id === id
            })
            return producto
        }else{
            return false
        }
    }

    quitarProducto(id){
        let estaEnElCarrito = this.buscarUnProducto(id)
        if(!estaEnElCarrito){
            alert("El producto no esta en carrito")
        }else{
            if(estaEnElCarrito.cantidad == 1){
                estaEnElCarrito.cantidad = estaEnElCarrito.cantidad - 1
                this.productos = this.productos.filter(el => el.cantidad > 0)
            }else{
                estaEnElCarrito.cantidad = estaEnElCarrito.cantidad - 1
            }
        }

        localStorage.setItem("carrito", JSON.stringify(this.productos))
        console.log(this.productos)
    }

    calculadoraTotal(){
        this.total = this.productos.reduce((acc, el) => {
            return acc + (el.precio * el.cantidad)
        }, 0)
    }

    pagar(){
        this.calculadoraTotal()
        let compra = confirm("El total es de: " + this.total)
        if(compra){
            alert("Gracias por su compra")
            this.productos = []
            this.total = 0
            localStorage.setItem("carrito", JSON.stringify(this.productos))
        }else{
            alert("No pasa nada")
        }

    }
}

const CarritoLibreria = new Carrito()

function mostrarProductos(Array){
    let mensaje = Array.reduce((acc, el)=>{
        return acc + el.id + " - " + el.nombre + " $" + el.precio + "\n"
    }, "Estos son los productos que tenemos:\n")


    alert(mensaje)
}

function mostrarProducto(id){
    let producto = ArrayDeProductos.find(el => el.id === id)
    if(!producto){
        alert("Ese producto no existe")
    }else{
        alert("El producto que usted esta buscando es el siguiente:\n " + producto.id + " - " + producto.nombre + " $" + producto.precio)
    }

}


function core() {
    let bandera = true
    while(bandera){
        let opciones = Number(prompt("Bienvenidos a la libreria\n -1-Ver carrito \n 1-Ver productos\n 2-Comprar por id\n 3-Buscar un producto\n 4-Filtrar productos\n 5-Quitar Producto \n 6-Pagas \n 7-Filtrar por precio"))

        switch(opciones){
            case -1:
                CarritoLibreria.verCarrito()
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 1:
                mostrarProductos(ArrayDeProductos)
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 2:
                let id = Number(prompt("Meta el ID del producto: "))
                let cantidad = Number(prompt("Meta la cantidad del producto: "))
                let producto = ArrayDeProductos.find(el => {
                    return el.id === id
                })
                CarritoLibreria.agregarProducto(producto, cantidad)
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 3:
                let idBusqueda = Number(prompt("Meta el ID del producto: "))
                mostrarProducto(idBusqueda)
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 4:
                let nombreABuscar = prompt("¿Que esta buscando?")
                let arrayProductosFiltrado = ArrayDeProductos.filter(el => el.nombre.toLowerCase().trim().includes(nombreABuscar.toLowerCase().trim()))
                mostrarProductos(arrayProductosFiltrado)
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 5:
                let idEliminar = Number(prompt("Meta el ID del producto: "))
                CarritoLibreria.quitarProducto(idEliminar)
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 6:
                CarritoLibreria.pagar()
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 7:
                let precioMaximo = Number(prompt("Maximo"))
                let precioMinimo = Number(prompt("Minimo"))
                let arrayProductosFiltradoPorPrecio = ArrayDeProductos.filter(el => {
                    if(el.precio >= precioMinimo){
                        if(el.precio <= precioMaximo){
                            return el
                        }
                    }
                })
                mostrarProductos(arrayProductosFiltradoPorPrecio)
                bandera = confirm("¿Quiere seguir operando?")
                break
            default:
                alert("No tenemos esa opcion")
                bandera = confirm("¿Quiere seguir operando?")
                break
        }
    }
}

core()