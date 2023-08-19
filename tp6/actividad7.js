/*7. Lista de tareas con eliminación:
- Mejora el ejercicio de "Lista de tareas" del nivel medio 
anterior.
- Agrega un botón "Eliminar" junto a cada elemento de la 
lista.
- Al hacer clic en el botón "Eliminar", elimina el elemento 
correspondiente de
la lista.*/


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
    if(!nombre.value){
        alert("El campo esta vacio")
    }else{

    const persona = new Usuario(
        nombre.value,
    );
     nombres.push(persona)
    document.querySelector("form").reset();

    let item= document.createElement("li");
    let boton=document.createElement("button");
    // <button class="btn btn-danger btm-sm" onclick="borrarItem()">X</button>;

     item.innerText=nombres.at(-1).nombre;

     contenedor.appendChild(item);
    contenedor.append(boton)}
 
}
// -----------------------------------------------------
// vincular borrarItem com botones

const borrarItem = () =>{
    let validar = confirm(`Esta seguro que quiere eliminar ${[index].nombre}`)
       if(validar){
        nombres.slice(index,1)
       }
}