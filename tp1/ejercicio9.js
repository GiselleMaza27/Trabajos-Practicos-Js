// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)


let frase = prompt("Ingrese una frase corta")
let fraseArreglo = frase.split("")
let vocales = ""


for (let i  = 0; i < fraseArreglo.length; i++) {
    if(fraseArreglo.at(i) == "a"){
        vocales = vocales + "-" + "a"
    }else   if(fraseArreglo.at(i) == "e"){
        vocales = vocales + "-" + "e"
    }else   if(fraseArreglo.at(i) == "i"){
        vocales = vocales + "-" + "i"
    }else   if(fraseArreglo.at(i) == "o"){
        vocales = vocales + "-" + "o"
    }else   if(fraseArreglo.at(i) == "u"){
        vocales = vocales + "-" + "u"
    }
  }
 let total = vocales.split();
   console.log(fraseArreglo)
   Window.alert(`La cantidad de vocales encontradas es${total.length()}`)
   window.alert(`Las vocales que tiene la frase son ${vocales}`)

