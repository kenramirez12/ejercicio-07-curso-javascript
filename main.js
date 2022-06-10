const botonCrearAlumno = document.getElementById("crear-alumno");

botonCrearAlumno.addEventListener("click", function (e) {
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
		curso: curso.value,
	};

	if (alumno.nombre === "" || alumno.edad === "" || alumno.curso === "") {
		alert("Debes completar todos los campos");
		return;
	}

	crearFilaAlumno(alumno);

	nombre.value = "";
	edad.value = "";
	curso.value = "";
});

<<<<<<< HEAD
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
=======
function crearFilaAlumno(alumno) {
	const tableBody = document.querySelector("table > tbody");

	const fila = document.createElement("tr");
	fila.classList.add("border-b");

	const columnasFila = ["nombre", "edad", "curso"];
	columnasFila.forEach((columna) => {
		if (!(columna in alumno)) return;
		const colElemento = document.createElement("td");
		colElemento.classList.add("px-6", "py-4");
		colElemento.innerText = alumno[columna];
		fila.append(colElemento);
	});

	const colAcciones = document.createElement("td");
	colAcciones.classList.add("px-6", "py-4");

	const botonEliminar = crearBotonEliminarAlumno();
	colAcciones.append(botonEliminar);
	fila.append(colAcciones);

	tableBody.append(fila);
	verificarContenidoTabla();
}

function verificarContenidoTabla() {
	const tableBody = document.querySelector("table > tbody");
	const tablaVacia = document.getElementById("tabla-vacia");

	if (tableBody.childElementCount > 0) {
		document.getElementById("tabla").classList.remove("hidden");
		tablaVacia.classList.add("hidden");
	} else {
		document.getElementById("tabla").classList.add("hidden");
		tablaVacia.classList.remove("hidden");
	}
}

function crearBotonEliminarAlumno() {
	const boton = document.createElement("button");
	boton.classList.add(
		"py-1",
		"px-2",
		"bg-red-600",
		"hover:bg-red-700",
		"text-white",
		"text-sm",
		"rounded-lg"
	);
	boton.innerText = "Eliminar";

	boton.addEventListener("click", function (e) {
		if (confirm("¿Estás seguro de realizar esta acción?")) {
			e.target.parentElement.parentElement.remove();
			verificarContenidoTabla();
		}
	});

	return boton;
}
>>>>>>> feature/optimization
