/*3. Cambiar el estilo de un elemento con el mouse:
- Crea un párrafo en tu HTML con un ID único.
- Al pasar el mouse sobre el párrafo, cambia el color de 
fondo y el color del
texto del párrafo.*/

let parrafo3 = document.querySelector("#parrafo3");
let div = document.querySelector("#divP3")

const PasarMouse =()=>{
    if(parrafo3.style.color == "black" ){
        parrafo3.style.color = "pink"
        div.background.color = "blue"
    }else{
        parrafo3.style.color = "black"
        div.background.color = "white"
    }
}




// const PasarMouse =()=>{
//     if(parrafo3.style.color == "black" ){
//         parrafo3.style.color = "pink"
//     }else{
//         parrafo3.style.color = "black"
//     }
// }