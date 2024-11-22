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
    }
];

class PlanDeEstudio {
    planDeEstudio = [];
}