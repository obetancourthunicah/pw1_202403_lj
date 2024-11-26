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
                "requisitos": ['if101','mt101']
            },
        ]
    },
    {
        "id": 3,
        "bloque": "III",
        "asignaturas": [
            {
                "id": "mt103",
                "nombre": "Cáclulo I",
                "creditos": 5,
                "orden": 0,
                "requisitos": ['mt102']
            },
            {
                "id": "fi102",
                "nombre": "El Hombre frente a la Vida",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['fi101']
            },
            {
                "id": 'ad102',
                "nombre": "Administración II",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['ad101']
            },
            {
                "id": 'if103',
                "nombre": "Programación Estructurada I",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['if102']
            },
            {
                "id": 'if200',
                "nombre": "Analisis y Diseño de Software",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if102']
            },
        ]
    }
];

class PlanDeEstudio {
    planDeEstudio = [];
    contenedor = null;
    currentAsignatura = null;

    asignaturasRef = {};

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
        if( asignatura.requisitos) {
            asignaturaUI.setAttribute('data-requisitos', JSON.stringify(asignatura.requisitos));
            asignatura.requisitos.forEach((req)=>{
                let apertura = [];
                if(this.asignaturasRef[req]){
                    apertura = JSON.parse(this.asignaturasRef[req].getAttribute('data-apertura') || '[]');
                }
                if(!apertura.includes(asignatura.id)) {
                    apertura.push(asignatura.id);
                }
                if (apertura.length > 0) {
                    this.asignaturasRef[req].setAttribute('data-apertura', JSON.stringify(apertura));
                }
            });
        }
        asignaturaUI.innerHTML = `<span>${asignatura.nombre}<br/>(${asignatura.id})<br> Créditos: ${asignatura.creditos}</span>`;

        // eventos del mouse
        // mouseenter
        asignaturaUI.addEventListener('mouseenter', ()=>{
            //CLOJURE
            this.currentAsignatura = asignaturaUI;
            this.currentAsignatura.classList.add("selected");
            let requisitos = JSON.parse(this.currentAsignatura.dataset.requisitos || '[]');
            let apertura = JSON.parse(this.currentAsignatura.dataset.apertura || '[]');

            requisitos.forEach((req)=>{
                this.asignaturasRef[req].classList.add('requisito');
            });
            apertura.forEach((apt)=>{
                this.asignaturasRef[apt].classList.add('apertura');
            });
        });
        // mouseleave
        asignaturaUI.addEventListener('mouseleave', ()=>{
            this.currentAsignatura.classList.remove("selected");
            let requisitos = JSON.parse(this.currentAsignatura.dataset.requisitos || '[]');
            let apertura = JSON.parse(this.currentAsignatura.dataset.apertura || '[]');
            requisitos.forEach((req)=>{
                this.asignaturasRef[req].classList.remove('requisito');
            });
            apertura.forEach((apt)=>{
                this.asignaturasRef[apt].classList.remove('apertura');
            });
            this.currentAsignatura = null;
        });

        this.asignaturasRef[asignatura.id] = asignaturaUI;

        return asignaturaUI;
    }
}