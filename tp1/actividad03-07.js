let creditos = parseFloat(prompt("Ingrese el numeros de creditos"));

switch (true) {
    case creditos==4:
        console.log("puede acceder a todas las salas")
        break;
    case creditos==3:
        console.log("puede acceder a Arcade, Consolas y Rol")
        break;  
    case creditos==2:
        console.log("puede acceder a Arcade y Consolas")
        break;
    case creditos==1:
            console.log("puede acceder a Arcade")
        break;
    default:
        console.log("valor no valido intente nuevamente")
                
        break;
}