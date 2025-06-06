const Libro = require('./Libro'); // importamos Libro

class Ebook extends Libro {
  constructor(titulo, autor, añoPublicacion, precio, formato) {
    super(titulo, autor, añoPublicacion);
    this.precio = precio;
    this.formato = formato;
  }
  
  mostrarDetalles() {
    super.mostrarDetalles(); // mostramos los detalles del libro
    console.log(`Precio: $${this.precio}`);
    console.log(`Formato: ${this.formato}`);
  }
}

module.exports = Ebook; // exportamos Ebook
