// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.



let nota = parseInt(prompt("Ingrese un numero del 0 a 10"))

if(isNaN(nota)){
    window.alert("INTRODUCE UN NUMERO VALIDO El dato ingresado no es un numero ")
}else if(nota >=0 && nota <=10){
    if(nota <=2 ){
        window.alert("Nota: Muy deficiente")
    }else if(nota <=4){
        window.alert("Nota: Insuficiente")
    }else if(nota <=6){
        window.alert("Nota: Suficiente")
    }else if(nota ==7){
        window.alert("Nota: Bien")
    }else if(nota <=9){
        window.alert("Nota: Notable")
    }else if(nota <=10){
        window.alert("Nota: Sobresaliente")
    }
}else{
    window.alert("NUMERO ERRONEO no esta en la calificacion. Introduce un numero valido")}
