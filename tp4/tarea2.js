// Tarea 2:
// Crear un arreglo de objetos que contenga información de productos
//  (por lo menos 10). Los datos que debe almacenar cada objeto 
//  son:
// Nombre
// Detalle
// Stock
// Precio unitario
// Marca

let temporadaInvierno=[
    { nombre: "Pantalon", detalle: "jeans", stock:"si",precioUnitario: 10000, marca:"dimple"},
    { nombre: "Camiseta", detalle: "algodon", stock:"si",precioUnitario: 4000, marca:"sol"},
    { nombre: "Campera", detalle: "frizza", stock:"si",precioUnitario: 12000, marca:"newT"},
    { nombre: "Deportivo", detalle: "algodon", stock:"no",precioUnitario: 9000, marca:"dimple"},
    { nombre: "Ruana", detalle: "lanilla", stock:"si",precioUnitario: 3000, marca:"47strees"},
    { nombre: "Infinito", detalle: "lana", stock:"si",precioUnitario: 2000, marca:"abuTeje"},
    { nombre: "Sueter", detalle: "hilo", stock:"no",precioUnitario: 5000, marca:"abuTeje"},
    { nombre: "Buzo", detalle: "frizza", stock:"si",precioUnitario: 10000, marca:"newT"},
    { nombre: "Pollera", detalle: "engomada", stock:"si",precioUnitario: 5000, marca:"dimple"},
    { nombre: "Pantalon", detalle: "bengalina", stock:"si",precioUnitario: 9000, marca:"sol"},
   
] 

// Crear una función que muestre en pantalla una lista de los 
// productos con nombre, detalle y precio.

const productos = () => {
    temporadaInvierno.forEach((producto) =>{
        
        document.write(`<b>Producto: </br>${producto.nombre} ${producto.detalle} $${producto.precioUnitario}<br><br>`);
  });

}

// ---------------------FALTA TERMINAR----------------------
// Crear una función de búsqueda donde le pasemos como parámetro un
//  termino y busque productos cuyo nombre coincida en parte con el
//   termino enviado como parámetro.

const obtenerProducto = (letra) => {
    let nombres = temporadaInvierno.filter((producto) => {
      return producto.nombre.toLowerCase().includes(letra.toLowerCase());
    });
  
    return productos;
  };