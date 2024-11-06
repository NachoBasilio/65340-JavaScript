// Agregar alumno
// Agregar la nota de una materia de un alumno
// Eliminar un alumno
// Calcular promedio de un alumno
// Mostrar los alumnos

const Alumnos = [
    {
        nombre: "Sergio",
        dni: 10,
        materias: []
    },
    {
        nombre: "Pablo",
        dni: 14,
        materias: []
    }
]



function crearArrayDeDNI(){
    const ArrayDNI = []

    for (let i = 0; i < Alumnos.length; i++) {
        const alumno = Alumnos[i]
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
    let indexDelAlumno = buscadoraDeAlumno(dni)

    while(indexDelAlumno === false){
        dni = Number(prompt("Meta un DNI correcto"))
        indexDelAlumno = buscadoraDeAlumno(dni)
    }

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

function agregarMateriaAUnAlumno(dni, materia, nota){
    const indexDelAlumno = buscadoraDeAlumno(dni)

    while(indexDelAlumno === false){
        dni = Number(prompt("Meta un DNI correcto"))
        indexDelAlumno = buscadoraDeAlumno(dni)
    }

    Alumnos[indexDelAlumno].materias.push({
        materia,
        nota
    })
}

function calcularPromedio(dni){
    const indexDelAlumno = buscadoraDeAlumno(dni)

    while(indexDelAlumno === false){
        dni = Number(prompt("Meta un DNI correcto"))
        indexDelAlumno = buscadoraDeAlumno(dni)
    }

    const arrayMaterias = Alumnos[indexDelAlumno].materias

    let promedio = 0

    if(arrayMaterias.length === 0){
        alert("El alumno no tiene materias asignadas")
    }else{
        for (let i = 0; i < arrayMaterias.length; i++) {
            const materia = arrayMaterias[i];
            promedio = materia.nota + promedio
        }
        promedio = promedio / arrayMaterias.length
    }

    alert("El promedio del alumno " + Alumnos[indexDelAlumno].nombre + " es: " + promedio)
}

/**
 * Agrega un nuevo alumno al sistema si su DNI no existe en el registro.
 *
 * @param {string} nombre - El nombre del alumno a agregar.
 * @param {number} dni - El DNI del alumno a agregar.
 * @returns {void}
 */
function agregadoraDeAlumno(nombre, dni) {
    const ArrayDNI = crearArrayDeDNI();

    let indexAlumno = ArrayDNI.indexOf(dni);

    if (indexAlumno === -1) {
        Alumnos.push({
            nombre,
            dni,
            materias: []
        });
    } else {
        alert("Ese alumno ya está dentro de nuestro sistema");
    }
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
                let nombreNuevoAlumno = prompt("¿Como se llama el alumno?")
                let dniNuevoAlumno = Number(prompt("Cual es su DNI"))
                agregadoraDeAlumno(nombreNuevoAlumno, dniNuevoAlumno)
                bandera = confirm("¿Quiere seguir operando?")
                break;
            case 2:
                if(Alumnos.length === 0){
                    alert("No hay alumnos en el sistema")
                    break
                }
                let dniAlumnoAAgregarMateria = Number(prompt("Cual es su DNI"))
                let materia = prompt("¿Que materia quiere agregar?")
                let nota = Number(prompt("Cuanto se saco el alumno:"))
                agregarMateriaAUnAlumno(dniAlumnoAAgregarMateria, materia, nota)
                bandera = confirm("¿Quiere seguir operando?")
                break;
            case 3:
                if(Alumnos.length === 0){
                    alert("No hay alumnos en el sistema")
                    break
                }
                let dniAlumnoAEliminar = Number(prompt("Cual es su DNI"))
                eliminarAlumno(dniAlumnoAEliminar)
                bandera = confirm("¿Quiere seguir operando?")
                break;
            case 4:
                if(Alumnos.length === 0){
                    alert("No hay alumnos en el sistema")
                    break
                }
                let dniAlumnoPromedio = Number(prompt("Cual es su DNI"))
                calcularPromedio(dniAlumnoPromedio)
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
            opcion = Number(prompt("Bienvenido a CoderHouse, que quiere hacer:\n 1-Agregar Alumno\n 2-Agregar Nota\n 3-Eliminar Alumno\n 4-Mostrar Promedio \n 5-Mostrar los alumnos"))
            if(opcion === 0){
                bandera = false
            }
        }
    }
}

core()