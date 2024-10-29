//Tienda Perrito Con Chaucha

let compra = 0

let productos = "Los productos que compro son estos:"

function logicaDeCompra(precio, producto, cantidad){
    if(cantidad == 1){
        let confirmarCompra = confirm("¿Esta seguro de comprar " + producto + " a $" + precio + "?")
        if(confirmarCompra){
            compra = compra + precio

            productos = productos + " " + producto
        }else{
            alert("Esta bien.")
        }
    }else{
        let precioFinal = precio * cantidad

        let confirmarCompra = confirm("¿Esta seguro de comprar " + cantidad + " " + producto + " a $" + precioFinal + "?")

        if(confirmarCompra){
            compra = compra + precioFinal

            productos = productos + " " + producto + "x" + cantidad
        }else{
            alert("Esta bien.")
        }
    }
}

function compraProducto(precio, producto){
    let cantidad = Number(prompt("¿Cuantas remeras quiere comprar?"))
    while(isNaN(cantidad)){
        alert("Eso no es un numero")
        cantidad = Number(prompt("¿Cuantas remeras quiere comprar?"))
    }

    if(cantidad >= 1){
        logicaDeCompra(precio, producto, cantidad)
    }else{
        alert("Ese valor de cantidad no es valido")
    }
}

function pago(descuento){
    let precioFinal = compra * descuento
    return "El precio final sera de: " + precioFinal
}

function logicaDePago(){
    let opcion = Number(prompt("Medios de pago disponibles:\n 1-Efectivo\n 2-Tarjeta débito\n 3-Tarjeta de crédito\n 4-Cripto"))

    let bandera = true
    let mensajePrecio = ""
    while(bandera){
        switch(opcion){
            case 1:
                mensajePrecio = pago(0.80)
                alert(mensajePrecio)
                bandera = !confirm("¿Quiere pagar con este medio de pago?")
                break
            case 2:
                mensajePrecio = pago(1)
                alert(mensajePrecio)
                bandera = !confirm("¿Quiere pagar con este medio de pago?")
                break
            case 3:
                mensajePrecio = pago(1.25)
                alert(mensajePrecio)
                bandera = !confirm("¿Quiere pagar con este medio de pago?")
                break
            case 4:
                mensajePrecio = pago(0.90)
                alert(mensajePrecio)
                bandera = !confirm("¿Quiere pagar con este medio de pago?")
                break
            default:
                alert("No tenemos ese medio de pago")
                bandera = !confirm("¿Quiere ver los medios de pago de nuevo?")
                break;
        }
        if(bandera){
            opcion = Number(prompt("Medios de pago disponibles:\n 1-Efectivo\n 2-Tarjeta débito\n 3-Tarjeta de crédito\n 4-Cripto"))
        }
    }
}

function core(){
    let opcion = Number(prompt("Bienvenidos a Perrito Con Chaucha\nusted puede comprar lo siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Gorra"))

    while(isNaN(opcion)){
        alert("Eso no es un numero")
        opcion = Number(prompt("Bienvenidos a Perrito Con Chaucha\nusted puede comprar lo siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Gorra"))
    }

    let bandera = true

    while(bandera){
        switch (opcion) {
            case 1:
                compraProducto(100, "Remera")
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 2:
                compraProducto(200, "Pantalon")
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 3:
                compraProducto(500, "Buzo")
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 4:
                compraProducto(50, "Gorra")
                bandera = confirm("¿Quiere seguir comprando?")
                break
            default:
                alert("No tenemos esa opcion")
                bandera = confirm("¿Quiere seguir comprando?")
                break;
        }
        if(bandera){
            opcion = Number(prompt("Bienvenidos a Perrito Con Chaucha\nusted puede comprar lo siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Gorra"))
            while(isNaN(opcion)){
                alert("Carácter no valido, ingrese nuevamente")
                opcion = Number(prompt("Bienvenidos a Perrito Con Chaucha\nusted puede comprar lo siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Gorra"))
            }
        }
    }

    alert(productos + "\nAl valor de: $" + compra)
    logicaDePago()
}


core()