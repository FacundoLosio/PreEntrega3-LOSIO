class Chofer{
    constructor(vehiculo, nombre, valorHora) {
        this.vehiculo = vehiculo;
        this.nombre  = nombre;
        this.valorHora  = valorHora;
    }
}
//creo objetos
let chofer1 = new Chofer("camion chasis", "Facundo", 5000);
let chofer2 = new Chofer("camion semi acoplado", "Martin", 10000);
let chofer3 = new Chofer("camioneta", "Claudio", 2500);
let chofer4 = new Chofer("camion chasis", "Julian", 5000);
let chofer5 = new Chofer("camioneta", "Carlos", 2500);

let lista = [chofer1, chofer2, chofer3, chofer4, chofer5] ;

// almaceno todo el array completo
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaChoferes", JSON.stringify(lista));

// enlazo los botones con el HTML
const botonMostrar = document.getElementById("mostrar") 
    botonMostrar.addEventListener("click", mostrarLista)

const botonAgregar = document.getElementById("agregar")
    botonAgregar.addEventListener("click", pruebaForm)

const botonBuscarVehiculo = document.getElementById("filtrar1")
    botonBuscarVehiculo.addEventListener("click", buscarVehiculo)

const botonBuscarValor = document.getElementById("filtrar2")
    botonBuscarValor.addEventListener("click", buscarValor)

//declaro las funciones a utilizar
function mostrarLista(){
    
    console.table(lista)
}

function buscarVehiculo(){
    let buscar = prompt("¿Que vehiculo necesitas?")
    let resultado = lista.filter((x)=>x.vehiculo.includes(buscar))
    console.table(resultado)
}

function buscarValor(){
    let valor = parseFloat(prompt("¿Que precio estas dispuesto a pagar?"))
    let resultado = lista.filter ( (x)=> (x.valorHora == valor) )
    console.table(resultado)
}

function pruebaForm() { 
    const form = document.createElement('form');
    form.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input id="nombre" type="text" required>  

        <label for="vehiculo">Vehiculo:</label>
        <input id="vehiculo" type="text" required>
    
        <label for="valorHora">Valor Hora</label>
        <input id="valorHora" type="number" required>
      
        <button type="submit">Agregar Chofer</button>
    `;
  
    form.addEventListener('submit', function (event) { 
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const vehiculo = document.getElementById('vehiculo').value;
      const valorHora = document.getElementById('valorHora').value;
  
      let chofer = new Chofer(vehiculo, nombre, valorHora)
        lista.push(chofer)
        console.table(lista)
  
        form.reset();
    });
    const body = document.querySelector('body');
    body.appendChild(form);
}