/*4. Reloj digital:
- Crea un párrafo en tu HTML con un ID único.
- Utilizando JavaScript, actualiza el contenido del 
párrafo para mostrar la
hora actualizada cada segundo.*/

// let parrafo4 = document.querySelector("#parrafo4");

// let padre = document.querySelector("#nodoPadre")


// let intervalo = null;



// const detener = () => clearInterval(intervalo);


// padre.removeChild(parrafo4)

const verHora = () => {
    const fecha = new Date();
  
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
  
    let horaActual = document.querySelector("#textoHora");
    horaActual.textContent = `La hora actual es: ${hora} : ${minutos} : ${segundos}`;
  };
  
  setInterval(verHora, 1000);
  
  verHora();