// CLase Usuario
class Usuario 
{
    constructor(nombre = '', apellido = '', libros=[], mascotas=[]) {
        this.nombre     = nombre
        this.apellido   = apellido
        this.libros     = libros
        this.mascotas   = mascotas
    }

    getFullName() {
        return `Nombre completo: ${this.nombre} ${this.apellido}` 
    }

    addMoscotas() {
        return `Cantidad de mascota: ${this.mascotas.length}`
    }
    
    addBook(nombre='', autor='') {
        let add = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push({ 
            add
        })
    }

    getBookNames() {
        return this.libros
    }

}
mascotas = [
    { nombre: 'coco', edad: 4, raza: 'caniche'  },
    { nombre: 'moro', edad: 3, raza: 'labrador'  }
]

libros = []

usuario = new Usuario('Marcelo', 'Salar', libros, mascotas )
console.log( usuario.getFullName() )
console.log( usuario.addMoscotas() )
usuario.addBook('El alquimista', 'Paulo Coelo') 
usuario.addBook('El principito', 'Antoine de Saint-Exupéry') 
console.log( usuario.getBookNames() )