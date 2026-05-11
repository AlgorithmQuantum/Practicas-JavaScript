// Crear el objeto libro
let libro = {
    // Propiedades
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible", // 'disponible' o 'prestado'
    
    // Método para describir el libro
    describirLibro: function() {
        console.log(`📚 Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
};

// Probar el método
libro.describirLibro();