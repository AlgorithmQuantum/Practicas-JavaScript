// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(` Libro "${titulo}" agregado correctamente.`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log(" No has leído ningún libro todavía.");
    } else {
        console.log(`\n Libros leídos (${librosLeidos.length}):`);
        console.log("═".repeat(40));
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
        console.log("═".repeat(40));
    }
}

// Ejemplo de uso
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("1984");
mostrarLibrosLeidos();