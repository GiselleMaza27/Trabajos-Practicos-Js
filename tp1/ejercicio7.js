// 7.- Escribe un programa que pida 3 números y escriba en
//  la pantalla el mayor de los tres.

let numer1 =parseInt(prompt("Ingrese el primer numero"))
let numer2 =parseInt(prompt("Ingrese el segundo numero"))
let numer3 =parseInt(prompt("Ingrese el tercer numero"))

let mayor = Math.max(numer1,numer2,numer3)

document.write("El mayor es", mayor)