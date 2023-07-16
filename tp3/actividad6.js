// 6- Solicitar por pantalla al usuario ingresar el valor de los 
// lados de un rectángulo, luego crear una función para calcular
//  su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)




const perimetro = function(ladoA,ladoB){
    if(isNaN(ladoA) || isNaN(ladoB)){
     alert("Debe ingresar el valor de los lados del rectangulo en numeros")
    }
    return 2*(ladoA + ladoB)
}

let ladoA = Number(prompt("Ingrese el valor de uno de los lados del rectangulo"))
let ladoB = Number(prompt("Ingrese el valor del segundo lado del rectangulo"))

document.write(perimetro(ladoA,ladoB))