// Agregar alumno
// Agregar la nota de una materia de un alumno
// Eliminar un alumno
// Calcular promedio de un alumno
// Mostrar los alumnos

const Alumnos = []

function agregadoraDeAlumno(nombre, dni){
    Alumnos.push({
        nombre,
        dni,
        materia: []
    })
}

function crearArrayDeDNI(){
    const ArrayDNI = []

    for (let i = 0; i < Alumnos.length; i++) {
        const alumno = Alumnos[i];
        ArrayDNI.push(alumno.dni)
    }

    return ArrayDNI
}

function buscadoraDeAlumno(dni){
    const ArrayDNI = crearArrayDeDNI()

    const index = ArrayDNI.indexOf(dni)

    if(index === -1){
        alert("Ese alumno no esta")
        return false
    }else{
        return index
    }
}

function eliminarAlumno(dni){
    const indexDelAlumno = buscadoraDeAlumno(dni)

    Alumnos.splice(indexDelAlumno, 1)
}

function mostradoraDeAlumnos(){
    let alumnos = "\n"
    for (let i = 0; i < Alumnos.length; i++) {
        const alumno = Alumnos[i];
        alumnos = alumnos + "Nombre: " + alumno.nombre + " DNI: " + alumno.dni + "\n"
    }

    alert("Los alumnos en nuestra base de datos son:" + alumnos)
}

function core(){
    let bandera = true
    let opcion = Number(prompt("Bienvenido a CoderHouse, que quiere hacer:\n 1-Agregar Alumno\n 2-Agregar Nota\n 3-Eliminar Alumno\n 4-Mostrar Promedio \n 5-Mostrar los alumnos"))

    if(opcion === 0){
        return
    }

    while(bandera){
        switch (opcion) {
            case 1:
                let nombreNuevoAlumno = prompt("¿Como te llamas?")
                let dniNuevoAlumno = Number(prompt("Cual es tu DNI"))
                agregadoraDeAlumno(nombreNuevoAlumno, dniNuevoAlumno)
                bandera = confirm("¿Quiere seguir operando?")
                break;
            case 2:
                bandera = confirm("¿Quiere seguir operando?")
                break;
            case 3:
                let dniAlumnoAEliminar = Number(prompt("Cual es tu DNI"))
                eliminarAlumno(dniAlumnoAEliminar)
                bandera = confirm("¿Quiere seguir operando?")
                break;
            case 4:
                bandera = confirm("¿Quiere seguir operando?")
                break;
            case 5:
                mostradoraDeAlumnos()
                bandera = confirm("¿Quiere seguir operando?")
                break;
            default:
                alert("No tenemos esa opcion")
                bandera = confirm("¿Quiere seguir operando?")
                break;
        }
        if(bandera){
            opcion = Number(prompt("Bienvenido a CoderHouse, que quiere hacer:\n 1-Agregar Alumno\n 2-Agregar Nota\n 3-Eliminar Alumno\n 4-Mostrar los alumnos"))
        }
    }
}

core()