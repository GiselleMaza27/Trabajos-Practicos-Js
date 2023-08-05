/*2. Contador de clics:
- Crea un botón en tu HTML con un ID único y un párrafo para
 mostrar el número de clics.
- Al hacer clic en el botón, incrementa el contador y muestra
 el número de clics en el párrafo.*/

// let boton2 = document.querySelector("#boton");
// let p = document.querySelector("#parrafo2")

// let contadorClic = 0

// const SumarClic = ()=>{
// contadorClic = contadorClic + 1;
// // parrafo2.innertext = `Número de clic:${contadorClic}`
// }


let contador = document.querySelector("#parra2");
let clics = 0;

const contarClics = () => {
  clics++;

  contador.textContent = `Su contador actual está en:  ${clics}`;
};