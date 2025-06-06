class Libro {
  constructor(titulo, autor, añoPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
  }
  
  mostrarDetalles() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Año de publicación: ${this.añoPublicacion}`);
  }
}

module.exports = Libro; // exportamos esta clase
