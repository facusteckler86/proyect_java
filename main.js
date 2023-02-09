//comentario de linea

/* 
declaracion de variable
*/
// let edad = 45;
// // var nombre ="Andres"; //ya no se usa mucho, es codigo viejo
// const NUMERO = 10; // se declara con mayuscula

// let nombre = "Facundo";
// console.log("hola", nombre);//comando importante no olvidar

// nombreBonitoGrande // camel case
// nombre_Bonito_Grande //snake case
// NombreBonitoGrande // pascal case

// let numeroUno = 4;
// let numeroDos = 5;
// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroUno - numeroDos;
// let resultadoMultiplicacion = numeroUno * numeroDos;
// let resultadoDivision = numeroUno / numeroDos;

// console.log("resulatado de la suma" , resultadoSuma);
// console.log("resulatado de la resta" , resultadoResta);
// console.log("resulatado de la multiplicacion", resultadoMultiplicacion);
// console.log("resulatado de la division", resultadoDivision);

// let saludo = "Hola";
// let nombre = "Facundo";

// console.log(mensaje);
// // console.log("Hola" + 1);

// let mensaje = `este es el saludo ${saludo} ${nombre}`;

// prompt("Ingrese su nombre");
// alert (nombre);
// let nombre = parseFloat (prompt("Diga su nombre: "))
// let edad = parseInt(prompt("Ingrese su Edad: "));


// alert (`Usted es  ${nombre} ${edad}`);

// let nombre = "andres";

// if(nombre){
//     console.log("Hola Entramos al if");
// }

// let fideos = prompt ("Vas a comer fideos?");
// let milanesas = prompt ("vas a comer milanesas?");

// if (fideos === "si" && milanesas === "si"){
//     alert ("Avisa si vas a comer fideos")
// } else if (fideos === "No" && milanesas === "si"){
//     alert (" Vas a comer milanesas entonces?")
   
// } else if (fideos === "No" && milanesas === "No"){
//     alert ("Que bueno que cerraste la boca");
// }

let entrada = prompt("Ingrese un numero");

for(let i = 1; <= 10; i++){

    let resultado = numero + i; 
    
    
    while (entrada != "Esc"){
        
        alert (`${numero} + ${i} = ${resultado}`)
    switch (entrada) {
        case "uno":
            alert ("ingreso el uno")
            break;
        case "dos":
            alert ("ingreso el dos")
        case "tres":
            alert ("ingreso el tres")
    
        default:
            alert("ustes agrego los numeros uno, dos y tres")
            break;
    }
}
}