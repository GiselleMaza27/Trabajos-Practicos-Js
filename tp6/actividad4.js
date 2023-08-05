/*4. Reloj digital:
- Crea un párrafo en tu HTML con un ID único.
- Utilizando JavaScript, actualiza el contenido del 
párrafo para mostrar la
hora actualizada cada segundo.*/

let parrafo4 = document.querySelector("#parrafo4");

let padre = document.querySelector("#nodoPadre")


let intervalo = null;



const detener = () => clearInterval(intervalo);


// padre.removeChild(parrafo4)