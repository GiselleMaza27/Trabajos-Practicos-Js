// 7- Escriba un script que muestre la tabla de multiplicar de un
//  número ingresado por pantalla, la creación de la tabla debe 
//  ser realizada con una función y mostrar solo los resultados 
//  del 1 al 10 del número elegido por el usuario.





// const tabla = function(numero){
//     for (let i = 0; i == 10 ; i++) {
//         let arreglo = push(numero * i)
//         return arreglo
        
//     }
// }

// let numero = Number(prompt("Ingrese la tabla a multiplicar"))

// console.log(tabla(numero))




function tablaDeMultiplicar(
    numero = parseInt(prompt("Ingrese el valor de la tabla a calcular")),
    vueltas = parseInt(prompt("del 1 al cuanto?"))
  ) {
    if (isNaN(numero) || isNaN(vueltas)) {
      return alert("Debe ingresar un número");
    }
  
    document.write(`Tabla del ${numero}<br>`);
    for (let index = 1; index <= vueltas; index++) {
      document.write(`${numero} x ${index} = ${numero * index}<br>`); //2 x 1 = 2
    }
  }