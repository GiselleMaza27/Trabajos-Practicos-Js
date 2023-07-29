/*
5- Crea una clase llamada Persona que siga las siguientes 
condiciones:  Sus propiedades son: nombre, edad, DNI, sexo 
(H hombre, M mujer), peso y altura, año de nacimiento. Si 
quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje 
indicando a qué generación pertenece la persona creada y cual
 es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla
 de generaciones:
*/

class Persona {
    constructor(nombre,edad,DNI,sexo,peso,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    mostrarGeneracion(){
        let actual = getFullYear()
        let nacimiento = this.edad - actual;
        switch (true) {
            case nacimiento >= 1930 && nacimiento <= 1948 :
                console.log(`Usted es Silent Generation`)
                console.log(`Rasgo caracteristicos: Autenticidad`)
               break;
            case nacimiento >= 1949 && nacimiento <= 1968 :
               console.log(`Usted es Baby Boom `)
               console.log(`Rasgo caracteristicos: Ambición`)
              break;
            case nacimiento >= 1969 && nacimiento <= 1980 :
              console.log(`Usted es Generación X `)
              console.log(`Rasgo caracteristicos: Obsesión por el exito`)
              break;
            case nacimiento >= 1981 && nacimiento <= 1993 :
                console.log(`Usted es Generación Y `)
                console.log(`Rasgo caracteristicos: Frustración`)
            break;
            case nacimiento >= 1994 && nacimiento <= 2010 :
               console.log(`Usted es Generación Z`)
               console.log(`Rasgo caracteristicos: Irreverencia`)
              break;
            default:
                break;
        }
    }
    
}

let chico =new Persona("Juan",25,42548697,"M",78,1.72)

