// 10.- Escribe un programa que pida un número y nos diga si
//  es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo 
//     es por uno de los cuatro)


let numeroDIVISIBLE =parseInt(prompt("Ingrese un numero"))


if(numeroDIVISIBLE %2==0){
    console.log(`El numero ${numeroDIVISIBLE} es divisible por 2`)
}
if(numeroDIVISIBLE %3==0){
    console.log(`El numero ${numeroDIVISIBLE} es divisible por 3`)
}
if(numeroDIVISIBLE %5==0){
    console.log(`El numero ${numeroDIVISIBLE} es divisible por 5`)
}
if(numeroDIVISIBLE %7==0){
    console.log(`El numero ${numeroDIVISIBLE} es divisible por 7`)
}

