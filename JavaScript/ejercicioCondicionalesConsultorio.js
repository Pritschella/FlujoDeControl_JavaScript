//Condicional if
if(pagoConsulta = true){
    console.log("El cliente puede pasar a su cita");
}

//Condiconal else 
if(doctorOcupado = true){
    console.log("Espere su turno...");
}else{
    console.log("Pase al consultorio");
}

//Condicional else-if

if(doctorOcupado = false){
    console.log("Puede pasar al consultorio");
}else if(horarioComida = true){
    console.log("Vuelva en un horario de consulta");
}else{
    console.log("Pase al consultorio cuando se le indique");
}

//Condicional switch 
let tratamiento = parseInt(prompt("Elige el tratamiento al que vienes: "));
switch(tratamiento){
    case 1: //Limpieza
    console.log("Bienvenido a tu limpieza dental");
    break;
    case 2: //Extracción
    console.log("Bienvenido a tu extracción D:");
    break;
    case 3: //Blanqueamiento
    console.log("Bienvenido a tu blanqueamiento dental");
    break;
    default:
        console.log("Opción no válida");
}

