/**
 * 1. Formulario para insertar información de alumnos.
 *  - Datos de entrada: Nombre, Edad, Curso
 *  - Cuando se envía el formulario:
 *    - Capturar el valor de los datos del formulario
 *    - Capturar el evento click del botón del formulario
 *    - Guardamos datos en un array
 *    - Limpiamos el formulario
 * 2. Visualizar información de alumnos en una tabla de HTML.
 *  - Capturar el elemento HTML de la tabla (tbody)
 *  - Crear una fila de tabla con la información capturada
 *  - Insertar la fila creada en el elemento HTML de la tabla (tbody)
 */

const alumnos = [];

const botonCrearAlumno = document.getElementById("crear-alumno");

botonCrearAlumno.addEventListener("click", function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const curso = document.getElementById("curso");

  if (!nombre || !edad || !curso) {
    alert("No se pudo capturar los campos del formulario");
    return;
  }

  const alumno = {
    nombre: nombre.value,
    edad: edad.value,
    curso: curso.value
  }

  if (alumno.nombre === "" || alumno.edad === "" || alumno.curso === "") {
    alert("Debes completar todos los campos");
    return;
  }

  alumnos.push(alumno);
  crearFilaAlumno(alumno);

  nombre.value = "";
  edad.value = "";
  curso.value = "";
});

function crearFilaAlumno (alumno) {
  const tableBody = document.querySelector("table > tbody");
  const fila = document.createElement("tr");
  fila.classList.add("border-b");

  const columnasFila = ["nombre", "edad", "curso"];
  columnasFila.forEach((columna) => {
    if ( !(columna in alumno) ) return;
    const colElemento = document.createElement("td");
    colElemento.classList.add("px-6", "py-4");
    colElemento.innerText = alumno[columna];
    fila.append(colElemento);
  });

  const colEliminar = document.createElement("td");
  colEliminar.classList.add("px-6", "py-4");

  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("bg-red-600", "hover:bg-red-700", "text-white", "py-1", "px-2", "text-sn", "rounded-lg");
  botonEliminar.innerText= "Eliminar";
  
  botonEliminar.addEventListener("click", function(e) {
    if ( confirm("¿Estás seguro que deseas realizar esta acción?") ) {
      e.target.parentElement.parentElement.remove();
    }
  });

  colEliminar.append(botonEliminar);
  fila.append(colEliminar);
  
  tableBody.append(fila);
}