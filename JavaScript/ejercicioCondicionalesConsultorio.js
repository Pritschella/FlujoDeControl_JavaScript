//Condicional if
//Si el cliente pagó la consulta, puede pasar a su cita
//El cliente pagó la consulta (detonante)
if(pagoConsulta = true){
    console.log("El cliente puede pasar a su cita");
}

//Condiconal else 
//El doctor puede antender atender al paciente en caso de que no esté ocupado, si está ocupado el paciente tiene que esperar su turno
//Si el doctor está ocupado, el paciente tiene que esperar (detonante 1)
//Si el doctor está desocupado, el paciente puede ser atendido (detonante 2)
if(doctorOcupado = true){
    console.log("Espere su turno...");
}else{
    console.log("Pase al consultorio");
}

//Condicional else-if
//Si el doctor está desocupado y el paciente llegó a la hora de la comida, entonces el paciente tiene que volver a una hora de consulta. En cambio, si el doctor está desocupado y el paciente llegó en una hora de consulta, el paciente puede pasar.
//Si el doctor está desocupado el paciente puede pasar (detonante 1)
//Si el paciente llega a una hora que no es de consulta, tiene que volver a un horario de consulta (detonante 2)
//En caso de que el paciente llegue a una hora adecuada (hora de consulta) y el doctor esté desocupado, el paciente puede ser atendido.
if(doctorOcupado = false){
    console.log("Puede pasar al consultorio");
}else if(horarioComida = true){
    console.log("Vuelva en un horario de consulta");
}else{
    console.log("Pase al consultorio cuando se le indique");
}

//Condicional switch 
//El paciente puede elegir el tratamiento al que va, según sea el caso (suponiendo que eñ caso 1 es de limpieza, el caso 2 de extracción y el caso 3 de blanqueamiento)
//Asignar a caso 1 las limpiezas (denonante 1)
//Asignar a caso 2 las extracciones (detonante 2)
//Asignar a caso 3 el blanquemiento dental (detonante 3)
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

