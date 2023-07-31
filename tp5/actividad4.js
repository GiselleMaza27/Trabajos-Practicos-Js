/*4- Escribe una clase Producto para crear objetos. Estos 
objetos, deben presentar las propiedades código, nombre y 
precio, además del método imprime datos, el cual escribe por 
pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y 
guárdalas en un array.
Por último, utilice el método imprime datos para mostrar 
por pantalla los valores de los tres objetos instanciados.
*/


class Producto {
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    // imprimirDatos(){
    //     document.write("------PRODUCTO------");
    //     document.write("<ul>");
    //         (`<li>Código: ${this.codigo}</li>`);
    //         (`<li>Nombre: ${this.nombre}</li>`);
    //         (`<li>Precio: $${this.precio}</li>`);
    //     document.write("</ul>");
    // }
    imprimirDatos(){
        document.write("------PRODUCTO------");
        document.write `Código: ${this.codigo}`
        document.write `Nombre: ${this.nombre}`
          document.write  `Precio: $${this.precio}`
       
    }
  }
  

  
  let producto1 = new Producto(3652 ,"Remera", 3000)
  let producto2 = new Producto(3698,"Campera",7500)
  let producto3 = new Producto(3701,"Pantalón",6800)

  let mercaderia=[producto1,producto2,producto3]

//   document.write(imprimirDatos(mercaderia))

document.write(producto1.imprimirDatos())