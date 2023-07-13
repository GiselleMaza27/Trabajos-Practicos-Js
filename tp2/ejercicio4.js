// 4- Realiza un script que pida números hasta que se pulse
//  “cancelar”. Si no es un número deberá indicarse con un 
//  «alert» y seguir pidiendo números. Al salir con “cancelar” 
//  deberá indicarse la suma total de los números introducidos.




let numero = parseInt(prompt("Ingrese un numero"));
 let total = 0;

//  do {
//     let numero = parseInt(prompt("Ingrese un numero"));
//     if(isNaN(numero)){
//     alert(numero + "No es un numero");

//     }else if (numero != undefined){
//             alert("no es un numero")

//     }else {
//         total = total + numero;}
//  } while (numero != undefined);
//  document.write(`La suma total es ${total}`)



do{
    numero = parseInt(prompt("Ingrese un numero"));
    if(isNaN(numero)){
    alert("no es un numero")
    }else{
        total = total + numero
    }
}while (numero != undefined);
document.write(`La suma total es ${total}`)


// // DECLARAMOS LA VARIABLE SUMA
// var suma = 0;
// // BUCLE DO WHILE PARA INTRODUCIR VARIOS
// do {
//     // PEDIMOS EL NÚMERO POR TECLADO
//     var numero = prompt("Introduce un numero");
//     // COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
//     if (Number(numero) == numero) {
//         // CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
//         numero = Number(numero);
//         // SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
//         suma = suma + numero;
//     }
//     // SI LO INTRODUCIDO NO ES UN NÚMERO
//     else {
//         // SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }
// // VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
// } while (numero != undefined);
// // SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
// document.write(suma);