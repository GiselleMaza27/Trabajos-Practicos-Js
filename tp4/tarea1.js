// Tarea 1:
// Crear un objeto con datos de usuario: username, state, role.
//  Debe tener dos funciones, una que permita cambiar el estado y 
//  otra que muestre información del usuario.


let usuario ={
    username: "Erick Maldonado", 
    state:true,
    role:"vendedor",

    changeState: function () {
        return (this.state = !this.state);
    },
 
    info: function(){
        for (const prop in this) {
            if (prop != "estado" && prop != "info") {
              console.log(`${prop}:${this[prop]}`);
            }

    }
}}