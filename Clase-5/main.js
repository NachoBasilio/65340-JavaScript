const productosLibreria = [
    { nombre: "Cuaderno A4", precio: 450, id: 1 },
    { nombre: "Bolígrafo Azul", precio: 120, id: 2 },
    { nombre: "Lápiz HB", precio: 80, id: 3  },
    { nombre: "Tijeras Escolares", precio: 350, id: 4},
    { nombre: "Goma de Borrar", precio: 50, id: 5  },
    { nombre: "Regla de 30 cm", precio: 200, id: 6  },
    { nombre: "Resaltador Amarillo", precio: 160, id: 7  },
    { nombre: "Cartulina Blanca", precio: 60, id: 8  },
    { nombre: "Corrector Líquido", precio: 220, id: 9  },
    { nombre: "Marcador Permanente", precio: 180, id: 10 }
]

class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.cantidad = 0
    }
}

function creadoraDeProductos(){// map
    let auxArray = []

    for (let i = 0; i < productosLibreria.length; i++) {
        let productoAPartirDeClase = new Producto(productosLibreria[i].nombre, productosLibreria[i].precio, productosLibreria[i].id)

        auxArray.push(productoAPartirDeClase)
    }

    return auxArray
}

const productosLibreriaClase = creadoraDeProductos()

class Carrito{
    constructor(){
        this.productos = []
        this.productosID = []
        this.total = 0
    }

    agregarProducto(id){
        this.listaArrayID()

        let index = this.productosID.indexOf(id)

        if(index == -1){
            productosLibreriaClase[id - 1].cantidad = 1
            this.productos.push(productosLibreriaClase[id - 1])
        }else{
            this.productos[index].cantidad++
        }
    }

    listaArrayID(){
        for (let i = 0; i < this.productos.length; i++) {
            this.productosID.push(this.productos[i].id)
        }
    }

    quitarProducto(id){
        this.listaArrayID()

        let index = this.productosID.indexOf(id)

        if(index == -1){
            alert("No esta ese producto en el carrito")
        }else{
            if(this.productos[index].cantidad <= 1){
                this.productos.splice(index, 1)
            }else{
                this.productos[index].cantidad = this.productos[index].cantidad - 1
            }
        }
    }

    mostrarCarrito(){
        if(this.productos.length <= 0){
            alert("No hay nada en el carrito")
            return
        }

        let mensaje = "En el carrito tenemos los siguientes productos:\n"

        for (let i = 0; i < this.productos.length; i++) {
            mensaje = mensaje + "\n " + this.productos[i].nombre + " $" + this.productos[i].precio + " - ID: " + this.productos[i].id + " X " + this.productos[i].cantidad
        }

        alert(mensaje)
    }

    calcularTotal(){
        for (let i = 0; i < this.productos.length; i++) {
            this.total = this.total + (this.productos[i].precio * this.productos[i].cantidad)
        }
    }

    vaciarCarrito(){
        this.productos = []
    }

    comprar(){
        if(this.productos.length <= 0){
            alert("No hay nada en el carrito")
            return
        }

        this.calcularTotal()

        let confirmacionDeCompra = false

        let opcion = Number(prompt("El total de la compra es de: " + this.total + "\nlas opciones de compra son:\n 1-Efectivo\n 2-Tarjeta"))

        switch(opcion){
            case 1:
                confirmacionDeCompra = confirm("El total en efectivo es de: " + (this.total * 0.9).toFixed(2) + " ¿Quiere confirmar con la compra?")
                break
            case 2:
                confirmacionDeCompra = confirm("El total en tarjeta es de: " + (this.total * 1.1).toFixed(2) + " ¿Quiere confirmar con la compra?")
                break
            default:
                alert("¡Esa opcion no la tenemos!")
                break
        }
        if(confirmacionDeCompra){
            alert("Gracias por su compra")
            this.vaciarCarrito()
        }
    }

}

const carritoInstance = new Carrito()

function mostrarProductos(){
    let mensaje = "Los productos que tenemos son los siguientes:\n"

    for (let i = 0; i < productosLibreriaClase.length; i++) {
        mensaje = mensaje + "\n " + productosLibreriaClase[i].nombre + " $" + productosLibreriaClase[i].precio + " - ID: " + productosLibreriaClase[i].id
    }

    alert(mensaje)
}

function core(){
    let bandera = true
    while(bandera){
        let opciones = Number(prompt("Bienvenidos a Perrito con Chaucha Store:\n 1-Ver productos\n 2-Comprar a partir de id \n 3-Ver carrito \n 4-Quitar producto a partir de un id \n 5-Comprar"))

        switch(opciones){
            case 0:
                bandera = false
                break
            case 1:
                mostrarProductos()
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 2:
                let idAgregar = Number(prompt("¿Puede usted enviar el id del producto?"))
                carritoInstance.agregarProducto(idAgregar)
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 3:
                carritoInstance.mostrarCarrito()
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 4:
                let idEliminar = Number(prompt("¿Puede usted enviar el id del producto?"))
                carritoInstance.quitarProducto(idEliminar)
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 5:
                carritoInstance.comprar()
                bandera = confirm("¿Quiere seguir comprando?")
                break
            default:
                alert("Esa opcion no esta")
                bandera = confirm("¿Quiere seguir comprando?")
                break
        }
    }
}

core()