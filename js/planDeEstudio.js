const demoPlanEstudio = [
    {
        "id": 1,
        "bloque": "I",
        "asignaturas": [
            {
                "id": "mt101",
                "nombre": "Matemáticas I",
                "creditos": 5,
                "orden": 0,
            },
            {
                "id": "mt301",
                "nombre": "Física I",
                "creditos": 5,
                "orden": 1,
            },
            {
                "id": 'qm101',
                "nombre": "Química I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'es101',
                "nombre": "Español",
                "creditos": 3,
                "orden": 3
            },
            {
                "id": 'if101',
                "nombre": "Introducción a Ciencias de la Computación",
                "creditos": 3,
                "orden": 4
            },
        ]
    },
    {
        "id": 2,
        "bloque": "II",
        "asignaturas": [
            {
                "id": "mt102",
                "nombre": "Precálculo",
                "creditos": 5,
                "orden": 0,
                "requisitos": ['mt101']
            },
            {
                "id": "fi101",
                "nombre": "Filosofía",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'ad101',
                "nombre": "Administración I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'es102',
                "nombre": "Expresión Oral y Escríta",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['es101']
            },
            {
                "id": 'if102',
                "nombre": "Fundamento y Lógica de la Programación",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if101']
            },
        ]
    },
    {
        "id": 2,
        "bloque": "II",
        "asignaturas": [
            {
                "id": "mt102",
                "nombre": "Precálculo",
                "creditos": 5,
                "orden": 0,
                "requisitos": ['mt101']
            },
            {
                "id": "fi101",
                "nombre": "Filosofía",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": 'ad101',
                "nombre": "Administración I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": 'es102',
                "nombre": "Expresión Oral y Escríta",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['es101']
            },
            {
                "id": 'if102',
                "nombre": "Fundamento y Lógica de la Programación",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if101']
            },
        ]
    }
];

class PlanDeEstudio {
    planDeEstudio = [];
    contenedor = null;

    constructor(planDeEstudio, contenedorSelector = '#planDeEstudio'){
        if(planDeEstudio) {
            this.planDeEstudio = planDeEstudio;
        } else {
            throw new Error("Plan de Estudio es Requerido");
        }
        this.contenedor = document.querySelector(contenedorSelector);

        if (this.contenedor) {
            this.updateUI();
        } else {
            throw new Error(`El selector ${contenedorSelector} no representa un nodo en el documento actual`);
        }
    }

    updateUI(){
        this.contenedor.classList.add("plan");
        this.planDeEstudio.forEach( (bloque) => {
            this.contenedor.appendChild(this.generateBlockUI(bloque));


        } );
    }

    generateBlockUI(bloque){
        const bloqueUI = document.createElement("SECTION");
        bloqueUI.classList.add('bloque');
        const bloqueLabel = document.createElement("DIV");
        bloqueLabel.classList.add('label');
        bloqueLabel.setAttribute("id",`blq_${bloque.id}]`)
        bloqueLabel.innerHTML = bloque.bloque;
        const bloqueAsignaturas = document.createElement("DIV");
        bloqueAsignaturas.classList.add('asignaturas');

        bloque.asignaturas.forEach((asignatura)=>{
            bloqueAsignaturas.appendChild(this.generateAsignatura(asignatura));
        });

        bloqueUI.appendChild(bloqueLabel);
        bloqueUI.appendChild(bloqueAsignaturas);
        return bloqueUI;
    }

    generateAsignatura(asignatura){
        const asignaturaUI = document.createElement("DIV");
        asignaturaUI.classList.add("asignatura");
        asignaturaUI.setAttribute('id', `${asignatura.id}`);
        asignaturaUI.setAttribute('data-requisitos', JSON.stringify(asignatura.requisitos || []));
        asignaturaUI.innerHTML = `<span>${asignatura.nombre}<br/>(${asignatura.id})<br> Créditos: ${asignatura.creditos}</span>`;
        return asignaturaUI;
    }
}