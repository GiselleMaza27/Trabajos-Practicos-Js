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
    constructor(nombre,nacimiento,edad,DNI,sexo,peso,altura){
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.edad = edad;
        this.dni = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;

    }
    mostrarGeneracion(){
        switch (this.nacimiento) {
            case this.nacimiento >= 1930 && this.nacimiento <= 1948:
                console.log(`Usted es Silent Generation`)
                console.log(`Rasgo caracteristicos: Autenticidad`)
               break;
            case this.nacimiento >= 1949 && this.nacimiento <= 1968:
                console.log(`Usted es Baby Boom `)
                console.log(`Rasgo caracteristicos: Ambición`)
               break;
            case this.nacimiento >= 1969 && this.nacimiento <= 1980:
                console.log(`Usted es Generación X `)
                console.log(`Rasgo caracteristicos: Obsesión por el exito`)
               break;
             case this.nacimiento >= 1981 && this.nacimiento <= 1993:
                console.log(`Usted es Generación Y `)
                console.log(`Rasgo caracteristicos: Frustración`)
               break;
            case this.nacimiento >= 1994 && this.nacimiento <= 2010:
                console.log(`Usted es Generación Z `)
                console.log(`Rasgo caracteristicos: Irreverencia`)
               break;
        
            default:
                break;
        }

    }
    // mostrarGeneracion(){
    //     let actual = new Date().getFullYear();
    //     let aNacimiento = this.nacimiento - actual;
    //     switch (true) {
    //         case aNacimiento >= 1930 && aNacimiento <= 1948 :
    //             console.log(`Usted es Silent Generation`)
    //             console.log(`Rasgo caracteristicos: Autenticidad`)
    //            break;
    //         case aNacimiento >= 1949 && aNacimiento <= 1968 :
    //            console.log(`Usted es Baby Boom `)
    //            console.log(`Rasgo caracteristicos: Ambición`)
    //           break;
    //         case aNacimiento >= 1969 && aNacimiento <= 1980 :
    //           console.log(`Usted es Generación X `)
    //           console.log(`Rasgo caracteristicos: Obsesión por el exito`)
    //           break;
    //         case aNacimiento >= 1981 && aNacimiento <= 1993 :
    //             console.log(`Usted es Generación Y `)
    //             console.log(`Rasgo caracteristicos: Frustración`)
    //         break;
    //         case aNacimiento >= 1994 && aNacimiento <= 2010 :
    //            console.log(`Usted es Generación Z`)
    //            console.log(`Rasgo caracteristicos: Irreverencia`)
    //           break;
    //         default:
    //             break;
    //     }
    // }
    
}

let chico =new Persona("Juan",1998,24,42548697,"M",78,1.72)
console.log(chico.mostrarGeneracion())

