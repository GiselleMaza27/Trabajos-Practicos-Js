// 4- Escribir el código de una función a la que se pasa como
//  parámetro un número entero y devuelve como resultado una 
//  cadena de texto que indica si el número es par o impar. 
//  Mostrar por pantalla el resultado devuelto por la función.





const parImpar = function(numero){
    if(isNaN(numero)){
        alert("Debe ingresar un número")
    }else if(numero % 2 == 0){
        return("El número es par")
    }else{
        return("El número es impar")
    }
}

console.log(parImpar(58))