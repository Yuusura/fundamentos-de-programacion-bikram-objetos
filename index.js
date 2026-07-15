const Coche = {
    marca: "marca",
    modelo: "modelo",
    matricula: "matricula"
}

const Casa = {
    codPostal: 22805,
    calle: "calle",
    portal: 23,
    piso: 2
}

const FullStackDeveloper= {
    lenguajes: [],
    proyectos: []
}

const Perro = {
    nombre: "nombre",
    raza: "raza",
    color: "color",
    edad: 8,
    ladrar() {
        console.log("Ladrido")
    },
    popo() {
        return Math.random() * 3
    }
}

const marcaPortatil = Portatil.marca
const marcaPortatil2 = Portatil["marca"]

const grupos = Concierto.grupos
const RGB = [Led.rojo, Led.verde, Led.azul]

Portatil.modelo = "P345"
Concierto.cartelera.push("Guns N' Roses")
Concierto.fecha = new Date()
Impresora.imprimiendo = {
    nombreArchivo: "nombreArchivo",
    copias: 11,
    numPaginas: 33
}


const Noticia = {
    titular: "titular",
    cuerpo: "cuerpo"
}

const Persona = {
    nombre: "nombre",
    apellidos: "apellidos",
    edad: 23
}

const Avion = {
    numPasajeros: 22,
    despegar() {
        console.log("despegando")
    },
    volar() {
        console.log("llegando al destino")
    },
    aterrizar() {
        console.log("aterrizando")
    }
}

const Paquete = {
   contenido: [] 
}

const Pais = {
    numHabitantes: 100000,
    continente: "continente",
    gentilicio: "gentilicio"
}

const codError = O_Error.codigo
const integrantes = Grupo.integrantes
const nivelesTinta = Impresora.tinta
const pixeles = Pantalla.pixeles
const especificaciones = Movil["especificaciones"]

Grupo.numIntegrantes = 5
Pantalla.dimensiones = "1920x1080"
Led.encendido = !Led.encendido
Movil.temperatura = "20º"