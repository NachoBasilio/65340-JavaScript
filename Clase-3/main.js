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
    if(cantidad >= 1){
        logicaDeCompra(precio, producto, cantidad)
    }else{
        alert("Ese valor de cantidad no es valido")
    }
}

function core(){
    let opcion = Number(prompt("Bienvenidos a Perrito Con Chaucha\nusted puede comprar lo siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Gorra"))

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
                bandera = confirm("¿Quiere seguir comprando?")
                break;
        }
        if(bandera){
            opcion = Number(prompt("Bienvenidos a Perrito Con Chaucha\nusted puede comprar lo siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Gorra"))
        }
    }

    alert(productos + "\nAl valor de: $" + compra)
}


core()