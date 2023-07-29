/*3-Escribe una clase que permita crear distintos objetos 
“rectángulos”, con las propiedades de alto y ancho, mas los 
métodos necesarios para modificar y mostrar sus propiedades,
 calcular el perímetro y el área*/

 class Rectangulos{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    perimetro(){
        return 2 * this.alto + 2 * this.ancho;
    }
    area(){
        return this.alto* this.ancho;
    }


 }
 let figura = new Rectangulos(12,4)

 console.log(figura.perimetro())
 console.log(figura.area())