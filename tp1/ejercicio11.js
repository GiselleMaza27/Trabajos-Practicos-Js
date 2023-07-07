// 11.- Añadir al ejercicio anterior que nos diga por cuál de
//  los cuatro es divisible (hay que decir todos por los que es 
// divisible)

let numeroDIV =parseInt(prompt("Ingrese un numero"))

if(numeroDIV %2==0){
    if(numeroDIV %3==0){
        if(numeroDIV %5==0){
            if(numeroDIV %7==0)
            console.log(`El numero ${numeroDIV} es divisible por 2,3,5 y 7`)
        }
    }
 }

 if(numeroDIV %2!=0){
    if(numeroDIV %3==0){
        if(numeroDIV %5==0){
            if(numeroDIV %7==0)
            console.log(`El numero ${numeroDIV} es divisible por 3,5 y 7`)
        }
    }
 }
 if(numeroDIV %2==0){
    if(numeroDIV %3!=0){
        if(numeroDIV %5==0){
            if(numeroDIV %7==0)
            console.log(`El numero ${numeroDIV} es divisible por 2,5 y 7`)
        }
    }
 }
 if(numeroDIV %2==0){
    if(numeroDIV %3==0){
        if(numeroDIV %5!=0){
            if(numeroDIV %7==0)
            console.log(`El numero ${numeroDIV} es divisible por 2,3 y 7`)
        }
    }
 }
 if(numeroDIV %2==0){
    if(numeroDIV %3==0){
        if(numeroDIV %5==0){
            if(numeroDIV %7!=0)
            console.log(`El numero ${numeroDIV} es divisible por 2,3 y 5`)
        }
    }
 }
 if(numeroDIV %2==0){
    if(numeroDIV %3==0){
        if(numeroDIV %5!=0){
            if(numeroDIV %7!=0)
            console.log(`El numero ${numeroDIV} es divisible por 2 y 3`)
        }
    }
 }
 if(numeroDIV %2==0){
    if(numeroDIV %3!=0){
        if(numeroDIV %5==0){
            if(numeroDIV %7!=0)
            console.log(`El numero ${numeroDIV} es divisible por 2 y 5`)
        }
    }
 }
 if(numeroDIV %2==0){
    if(numeroDIV %3!=0){
        if(numeroDIV %5!=0){
            if(numeroDIV %7==0)
            console.log(`El numero ${numeroDIV} es divisible por 2 y 7`)
        }
    }
 }
 if(numeroDIV %2!=0){
    if(numeroDIV %3==0){
        if(numeroDIV %5==0){
            if(numeroDIV %7!=0)
            console.log(`El numero ${numeroDIV} es divisible por 3 y 5`)
        }
    }
 }
 if(numeroDIV %2!=0){
    if(numeroDIV %3==0){
        if(numeroDIV %5!=0){
            if(numeroDIV %7==0)
            console.log(`El numero ${numeroDIV} es divisible por 3 y 7`)
        }
    }
 }
 if(numeroDIV %2!=0){
    if(numeroDIV %3!=0){
        if(numeroDIV %5==0){
            if(numeroDIV %7==0)
            console.log(`El numero ${numeroDIV} es divisible por 5 y 7`)
        }
    }
 }