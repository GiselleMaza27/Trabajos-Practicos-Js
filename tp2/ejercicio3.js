// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben
//  mostrarse todas las cadenas concatenadas con un guión -.


let cadena = prompt("Ingrese nombres")
let letra = "";

while(cadena){
    letra = letra + "-" + cadena
    cadena = prompt("Ingrese nombres con la letra A")
}
document.write(letra)