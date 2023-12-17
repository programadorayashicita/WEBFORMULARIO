let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    apellido: '',
    dni: '',
};

let editar = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const dniInput = document.querySelector('#dni');
const btnEnviar = document.querySelector('#btnEnviar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    //funcion : event.preventDefault()
    e.preventDefault();

    if(nombreInput.value === '' || apellidoInput.value === '' || dniInput.value === ''){
        alert('por favor rellena todos los campos')
        return
    }

    if (editar){  
        editarPersona();
        editar = false;
    } else  { 
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.apellido = apellidoInput.value;
        objEmpleado.dni = dniInput.value;
        agregandoPersona();
    }

     }

function agregandoPersona(){
//PUSH - agregar valores
listaEmpleados.push({...objEmpleado});
//MOSTRAR
mostrarPersona();
formulario.reset();
limpiarObjetosPersona();
}

function limpiarObjetosPersona() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.apellido = '';
    objEmpleado.dni = '';
}

function mostrarPersona() {
    const divEmpleado = document.querySelector('.div-empleados');
    divEmpleado.innerHTML = '';

        listaEmpleados.forEach(persona => {
        const {id,nombre,apellido,dni} = persona;
        // 2 JhailPalomino EDITAR ELIMINAR
         // 3 Jenny Campos EDITAR ELIMINAR
        
        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${apellido} - ${dni} -`
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = ( ) => cargarEmpleado(persona);
        editarBoton.textContent = 'editar';
        editarBoton.classList.add('btn', 'btn-editar')
        parrafo.appendChild(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'eliminar'; 
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.appendChild(eliminarBoton);
        divEmpleado.appendChild(parrafo);

    });

}

function cargarEmpleado(persona){
    const {id, nombre, apellido,dni} = persona;
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    dniInput.value = dni;
    objEmpleado.id = id;

    formulario.querySelector('button[type = "submit"]').textContent = 'actualizar';
    editar = true;
}

function eliminarEmpleado(id) {
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);
    mostrarPersona();
}


function editarPersona(){
    objEmpleado.nombre = nombreInput.value;
    objEmpleado.apellido = apellidoInput.value;
    objEmpleado.dni = dniInput.value;

    listaEmpleados.map(persona =>{
    if(persona.id === objEmpleado.id) {
       persona.nombre = objEmpleado.nombre;
       persona.apellido = objEmpleado.apellido;
       persona.dni = objEmpleado.dni;


    }
    });

    limpiarHTML();
}










