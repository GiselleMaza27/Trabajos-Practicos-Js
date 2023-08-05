/*1. Cambiar el color de fondo de un elemento:
- Crea un botón en tu HTML con un ID único.
- Al hacer clic en el botón, cambia el color de fondo 
de un elemento (por
ejemplo, un párrafo) a un color aleatorio.*/

aleatorio = ["red","blue","yellow","green","brown","grey","orange","purple","pink"]
let boton = document.querySelector("#boton");
let texto = document.querySelector("#parrafo1")



const cambiarColorParrafo = ()=>{
        let posicion = Math.floor(Math.random()*aleatorio.length)
        parrafo1.style.color = aleatorio[posicion]
    }
   
