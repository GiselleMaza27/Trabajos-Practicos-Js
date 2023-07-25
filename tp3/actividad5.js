// 5- Definir una función que muestre información sobre una 
// cadena de texto que se le pasa como argumento. A partir de la
//  cadena que se le pasa, la función determina si esa cadena 
//  está formada sólo por mayúsculas, sólo por minúsculas o por 
//  una mezcla de ambas.


const cadena = function(texto = prompt("Ingrese un texto")){
    if(texto == texto.toUpperCase()){
        return("La cadena esta formada solo por mayusculas")
    }else if(texto == texto.toLowerCase()){
        return("La cadena esta formada solo por minusculas")
    }else{
        return("La cadena contiene mayusculas y minusculas")
    }
}

console.log(cadena("hola MUNDO"))