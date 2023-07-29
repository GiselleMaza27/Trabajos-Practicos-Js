/*1- Crea un objeto llamado auto que tenga algunas 
características como el color, marca, modelo y si está 
encendido o apagado. Crea los métodos necesarios para 
permitir encender y apagar el auto.


*/

const Auto = {
    color:"Rojo",
    marca:"Volkswagen",
    modelo:"Fox",
    modo:"Auto encendido",
    cambiar:function(){
        if (this.modo =="Auto encendido"){
            this.modo = "Auto apagado"
        } else{
            this.modo ="Auto encendido"
        }
    }
}