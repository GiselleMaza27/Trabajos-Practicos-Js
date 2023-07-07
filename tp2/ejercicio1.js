// 1- Escribir un programa que solicite la edad y si es mayor
// de 18 años mostrar un mensaje que ya puede conducir, si la
// edad ingresada no es un número válido indicarlo en un 
// mensaje.


let edad = parseInt(prompt("ingrese su edad"))


if(isNaN(edad)){
    document.write(`La edad ingresada no es valida, intente nuevamente`)
}else if (edad >= 18){
    document.write(`Usted tiene ${edad} años, puede conducir`)
}else{
    document.write(`Usted tiene ${edad} años, no puede conducir`)
}