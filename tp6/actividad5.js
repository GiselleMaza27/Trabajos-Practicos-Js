/*5. Lista de tareas:
- Crea un formulario con un campo de texto y un botón en tu HTML.
- Al hacer clic en el botón, agrega el contenido del campo de 
texto como un nuevo elemento de lista <li> a una lista <ul> 
existente en la página.
*/


let btn5 = document.querySelector("#boton5")




class Usuario {
    constructor(nombre){
    this.nombre= nombre;
    }
}

let nombres = []
let nombre = document.querySelector("#input1")


let contenedor = document.querySelector("ul")

const guardarDatos=(event)=>{
    event.preventDefault();

    const persona = new Usuario(
        nombre.value,
    );
    
    nombres.push(persona)
    document.querySelector("form").reset();

    let item= document.createElement("li");

     item.innerText=nombres.at(-1).nombre;

     contenedor.appendChild(item);
 
}



