// crer una variable apellido
// calcular caracteres
// obtener la ultima letra del apellido


let apellido = "Dominguez";

console.log(`El string apellido tiene ${apellido}`);

console.log(apellido.at(-1));




// Dada la palabra "marmota"
// pasarla a mayuscula
// capitalizar la palabra(poner la 1er letra en mayuscula)



let palabra = "marmota";

console.log(palabra.toUpperCase());



let letra = palabra.at(0);  //guardo la m en la variable letra

let letraM = letra.toUpperCase();  // pongo la m en mayuscula y lo guardo en una nueva variable

let palabraSinM = palabra.substring(1);  //le saco la letra m a la palabra marmota y lo guardo en una nueva variable

console.log(letraM+palabraSinM)  //uno las variables definitivas 





