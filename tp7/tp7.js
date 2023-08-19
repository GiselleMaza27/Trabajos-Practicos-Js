/*Práctica de CRUD y Eventos
Utilizar módulos para hacer un código más prolijo

Crear un formulario para ingresar una imagen, su título
 y una descripción

Guardar el objeto en una lista en LocalStorage.

Crear una galería de imágenes. Si no hay imágenes 
cargadas en el LocalStorage, que lo indique por pantalla.

Crear un botón que elimine la imagen que se está mostrando
por pantalla y otro que me permita editar solamente el título
 o descripción.

Modificar el código para que solo se muestre una imagen 
a la vez, sin su título y descripción.

Cuando hago click sobre una imagen, pasa a la siguiente.

Cuando hago doble click sobre una imagen, muestro por 
pantalla su título y descripción.*/


// creo el arreglo para almacenar
const almacenamiento = JSON.parse(localStorage.getItem("carga")) || []


// creo una clase que tenga todas las propiedades que necesito
class Cargar{
    constructor(imagen,titulo,descripcion){
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
}
}

// capturo los input con sus valores
let imagen =document.querySelector("#inputUrl")
let titulo =document.querySelector("#inputTitulo")
let descripcion =document.querySelector("#inputDescripcion")


// creo la funcion guardarDatos : 
// 1previene el evento por defecto del formulario
// 2 crea una nueva instancia de la clase para que sea un objeto cada vez que llene el formulario
// 3 Guardo ese nuevo objeto en el arreglo
// 4 Guardo el arreglo en localStorage con la clave "cargas"
// 5 capturo y limpio el formulario con reset 
// 6 hago foco en el 1er input imagen

const GuardarDatos = (event)=>{
    event.preventDefault()
    console.log(imagen.value)
    const carga = new Cargar(imagen.value , titulo.value , descripcion.value )
    almacenamiento.push(carga)
    localStorage.setItem('cargas',JSON.stringify(almacenamiento))
    document.querySelector('form').reset()
    imagen.focus()

    Galeria()


}
let cuerpoGaleria = document.querySelector("#galeria")

const Galeria =()=>{
    cuerpoGaleria.innerHTML= ""

    if(almacenamiento.length==0){
        let mensajeVacio = document.createElement('p');
        mensajeVacio.innerHTML= `<h3>No hay imagenes disponibles</h3>`;
        cuerpoGaleria.append(mensajeVacio)
    
    }else{
    almacenamiento.map((carga,index) =>{
        let div = document.createElement("div");
        div.classList = "col";

        let tarjeta = `<div class="card h-100 m-3 ">
        <img src = "${carga.imagen}" class="card-img-top me-3" alt=""
        <div class= "card-body">
        <h5 class= "card-title">${carga.titulo}</h5>
        <p class= "card-text">${carga.descripcion}</p>
        </div>
        <div>
         <button type="button" class="btn btn-primary">Primary</button>
         </div>
        </div>
        `;

        div.innerHTML = tarjeta;
        cuerpoGaleria.append(div);
    
    })}

}
/*<div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>*/