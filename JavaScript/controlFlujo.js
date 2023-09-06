console.log("Hola Generation");

/* Flujo de control

Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las intrucciones de nuestro programa (arriba/abajo, izq/der). Estas isntrucciones pueden ser una función, un console.log,, un ciclo, etcc.

La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instrucción detonante).


Condicionales

Las codiconales son palabras reservadas que nos permiten evaluar si una condiciónse cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partirán de un true o false.

Tengo la camisa limpia?
    Sí: voy a la fiesta
    No: Me quedo en casita

Tengo esta variable?
    Sí: ejeuto la línea 57 de mi código
    No: ejecuto la línea 80 de mi código



Condicional if(si)

If nos sirve para validad si una condición se cumple o no. Si se cumple, entonces ejecutamos un bloque de código que está dentro del if. Si no se cumple, entonces no hacemos nada.
Nota: Es la condicional más sencilla, pero la más limitante porque solo nos da una opción.

if(condicion){
    //bloque de código que se ejecuta si la condición es verdadera (se cumple)
}

Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir. 

*/

if(camisaLimpia = true){ //Siempre tiene que ser true para que se ejecute el código
    console.log("Felipe va a la fiesta");
}

/*

else (de otro modo, de lo contrario, sino)

if(condición detonante){
    //boque de código que se ejecuta si la condición es verdadera
}else{
    //bloque de código que se ejecuta si la condición es falsa
}


*/

if(camisaLimpia =  false){
    console.log("Felipe va a la fiesta"); //true
}else{
    console.log("Felipe se queda en su casa a hacer la lloración"); //false
}

/*
else if

Esta condición nos ayuda a jugar con más opciones y más detonantes, para tener muchas posibilidades en el mismo código. Para lograr esto, vamos a unir el else con el if.

if(condicion detonante){
    //bloque de código si la condición es verdadera
} else if(condición detonante 2){
    //bloque de código si la condición 1 es falsa y la condición 2 es verdadera
}else{
    //bloque de código si las dos condiciones son falsas.
}

*/

/*Ejemplo 2: Felipe tiene hambre y quiere comer chilaquiles verdes.

if(hambre = true){
    console.log("Felipe va a comer");
}else if(chilaquilesVerdes = true){
    console.log("Felipe come chilaquiles");
}else{
    console.log("Felipe no come y se pone triste");
}
*/

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferntes. El primer mensaje se muestra si son las 13:00 hrs y deberá imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 hrs y deberá imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y deberá imprimir "lo siento mi ciela, seguimos programando."


//Prompt es una forma de ingresar datos y podoer hacer uso de ellos. 


let hora = prompt("Hola, dime una hora");


//let hora = 13;

if(hora == 13){
    console.log("Vamos a descanso");
}else if(hora == 14){
    console.log("Vamos a comer");
}else{
    console.log("Lo siento mi ciela, seguimos programando");
}

/*
Switch(cambiar o intercambiar / segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en función de la opción deseada (estado de la variable)

Evalúa una expresión commparando el valor de una variable con la expresión o caso, y ejecuta las declaraciones asociadas con ese caso, así como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general.


expresión con un valoor
switch(expresión){
    case 1: 
    //bloque de código que se ejecuta si la opción seleccionada es igual a 1
    break;

    case 2: 
    //bloque de código que se ejecuta si la opción seleccionada es igual a 2
    break;

    case 3: 
    //bloque de código que se ejecuta si la opción seleccionada es igual a 3
    break;

    default;
    //bloque de código que se ejecuta si ninguna opción coincide.
}

*/

//Elevador con else if

let piso = 5;

if(piso == 1){
    console.log("Llegamos al piso 1");
}else if(piso == 2){
    console.log("Llegamos al piso 2");
}else if(piso == 3){
    console.log("Llegamos al piso 3");
}else if(piso == 4){
    console.log("Llegamos al piso 4");
}else if(piso == 5){
    console.log("Llegamos al piso 5");
}else {
    console.log("Piso no encontrado");
}

//Elevador con swwitch
let pisoSwitchOriginal = prompt("A qué piso vas?");
console.log(typeof(pisoSwitchOriginal));
pisoSwitch = parseInt(pisoSwitchOriginal);


switch(pisoSwitch){ //si recibo un número
    case 1: //caso evalúa un string 
        console.log("Llegaste al piso 1");
        break;
    case 2: 
        console.log("Llegaste al piso 2");
        break;
    case 3: 
        console.log("Llegaste al piso 3");
        break;
    default:
        console.log("Opción no válida");
}


//Funciones aplicables a un consultorio dental

//Función calcular costo de una consulta (condicionales)

//Variables para mis datos 
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente){

    //Datos que necesito para mi funcion
    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;

    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;

    //Condicional para saber si agrego otra promoción por ser cliente frecuente
    if(clienteFrecuente == true){
        //costoTotal * promocionClienteFrecuente;
        invocacionFuncion();
    }

}

//Un ejemplo más sencillo
function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos * costoPorMinuto;

    if(clienteFrecuente){
        costoTotaConDescuento = costoTotal*.9;
    }

    return costoTotaConDescuento;
}

console.log(calcularCostoConsultaDos(45, 15, true));

// console.log("El costo total de la consulta que duró " + duracionMinutos + " con un costo por minuto de " + costoPorMinuto + " es de: " + costoTotaConDescuento);   estas variables no se pueden utilizar porque pertenecen a la funcion calcularCostoConsultaDos

// function registrarPaciente(){

// }

// function guardarPaciente(){

// }

// if(pacienteRegistrado = true){
//     console.log("Pacinte con registro previo");
// }else{
//     guardarPaciente();
// }
