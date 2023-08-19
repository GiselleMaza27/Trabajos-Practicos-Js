/*6. Cambiar el tamaño de texto:
- Crea un párrafo en tu HTML con un ID único y dos botones:
 "Aumentar" y "Disminuir".
- Al hacer clic en "Aumentar", aumenta el tamaño del texto en 
el párrafo.
- Al hacer clic en "Disminuir", disminuye el tamaño del texto
 en el párrafo.*/

//  let texto = document.querySelector("#parrafo6")


//  const AumentarTamaño = () =>{
//     texto.font-ResizeObserverSize.             

//  }

// const Aumentar = () =>{
// .style.fontSize = 40;
// }

let aumentaFuente = document.querySelector("#aumentar");
let disminuyeFuente = document.querySelector("#disminuir");
let textoFuente = document.querySelector("#cambioFuente");
let size = 10;
let tamaño = 10;

const aumentarFuente = () => {
  size += 10;
  textoFuente.style.fontSize = `${size}px`;
  tamaño += 10;
  textoFuente.style.fontSize = `${tamaño}px`;
};

const disminuirFuente = () => {
  size -= 10;
  textoFuente.style.fontSize = `${size}px`;
  tamaño -= 10;
  textoFuente.style.fontSize = `${tamaño}px`;
};