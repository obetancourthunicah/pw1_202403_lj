document.addEventListener('DOMContentLoaded', onPageLoaded);


function onPageLoaded(){
    // alert('Evento Disparado desde archivo JS externo!!!!!');
    /*
        Comentario en bloque
     */
    console.log("Inicio de Script.");
    let intEdad = 10;
    const strMensaje = 'Esto a mostrar en html';

    let dblResultado = 10 + 14.32;
    console.log("suma:" , dblResultado);
    dblResultado = 10.54 - 123.2;
    console.log("resta:" , dblResultado);
    dblResultado = 4 * 3.2;
    console.log("multiplicación:" , dblResultado);
    dblResultado = 4 / 3;
    console.log("división:" , dblResultado);
    dblResultado ++;
    console.log("acumulador:" , dblResultado);
    dblResultado --;
    console.log("reductor:" , dblResultado);
    dblResultado += 14;
    console.log("acumular por:" , dblResultado);
    dblResultado -= 5;
    console.log("reducir por:" , dblResultado);
    dblResultado *= 4;
    console.log("multiplicar por:" , dblResultado);
    dblResultado = 9 % 3;
    console.log("módulo:" , dblResultado);

    let intExpresionAEvaluar = 3450;
    if (intExpresionAEvaluar <= 3450) {
        console.log("Entro en la sección verdadera del if");
    } else {
        console.log("Entro en la sección falsa del if");
    }

    if (intExpresionAEvaluar <= 100) {
        console.log("Entre 0 y 100");
    } else if(intExpresionAEvaluar <= 200){
        console.log("Entre 101 y 200");
    } else {
        console.log("Mayor a 200");
    }

    if (intExpresionAEvaluar <= 100) {
        console.log("Entre 0 y 100");
    } else {
        if(intExpresionAEvaluar <= 200){
            console.log("Entre 101 y 200");
        } else {
            console.log("Mayor a 200");
        }
    }

    let switchClass = 'ABC';
    switch( switchClass ){
        case "ABC":
            console.log("Entro a ABC del switch");
            break;
        case "DEF":
            console.log("Entro a ABC del switch");
            break;
        default:
            console.log("Entro en Default del switch");
            break;
    }

    for (let i = 0; i < 100; i++) {
        console.log("Interando por:", i);
    }

    let j = 0;
    while ( j< 10) {
        console.log("While iteration: ", j);
        j++;
    }

    let k=0;
    do {
        console.log("Iterando Do While: ", k);
        k++;
    } while (k < 10);

    //// Arreglos --> Restrictivos
    let arrColores = ['rojo','azul', 0xffffff, 256, false];

    console.log("Color: ", arrColores[1]);
    console.log("Length Color :", arrColores.length);

    for( let index in arrColores) {
        console.log("Iteración de Arreglo: ", index, arrColores[index]);
    }

    arrColores.forEach(
        function (value) {
            console.log("ForEach Method: ", value);
        }
    );

    const arrColoresText = arrColores.map(
        function (value) {
            return `El color iterado es ... ${value}`; // 'El color iterado es ... ' + value;
        }
    );

    console.log("CSV Serialized: ", arrColoresText.join(", "));
    //JSON  -> Javascript Object Notation  json.org

    let objPersona = {
        "nombre" : "Orlando J Betancourth",
        "telefono" : "00000000",
        "email": "obetancourthunicah@gmail.com",
        "idin": "0801198412349"
    };

    console.log("Nombre en el Objecto: ", objPersona.nombre);
    console.log("Idin en el Objecto: ", objPersona.idin);

    let arrPersonas = [
        {
            "nombre" : "Orlando J Betancourth",
            "telefono" : "00000000",
            "email": "obetancourthunicah@gmail.com",
            "idin": "0801198412349"
        },
        {
            "nombre" : "Camilo Betancourth",
            "telefono" : "00000000",
            "email": "cbetancourthunicah@gmail.com",
            "idin": "08011986012934"
        },
        {
            "nombre" : "Adriana Betancourth",
            "telefono" : "00000000",
            "email": "abetancourthunicah@gmail.com",
            "idin": "0801198900132"
        }
    ];

    arrPersonas.forEach(
        function (persona){
            console.log("Registro: " , `${persona.nombre} | ${persona.email}`);
            console.log("Persona Raw: ", JSON.stringify(persona));
        }
    );
}