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
  insertarAlumno(alumno);

  nombre.value = "";
  edad.value = "";
  curso.value = "";
});

const listaAlumnos = document.getElementById("lista-alumnos");

function insertarAlumno (alumno) {
  const itemAlumno = document.createElement("li");
  itemAlumno.innerText = `${alumno.nombre} (${alumno.edad}) - ${alumno.curso}`
  
  listaAlumnos.append(itemAlumno);
}

// const tableBody = document.querySelector("table > tbody");

// function crearFilaAlumno (alumno) {
//   const fila = document.createElement("tr");

//   const colNombre = document.createElement("td");
//   // colNombre.innerText = alumno.nombre;

//   const colEdad = document.createElement("td");
//   // colEdad.innerText = alumno.edad;

//   const colCurso = document.createElement("td");
//   // colCurso.innerText = alumno.curso;

//   fila.append(colNombre);
//   console.log(fila);
// } 

// crearFilaAlumno({ nombre: "Ken", edad: "29", curso: "Javascript" })