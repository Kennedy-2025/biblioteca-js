const Libro = require('./Libro');
const Ebook = require('./Ebook');

const libro1 = new Libro('Indigno de ser Humano', 'Osamu Dazai', 1948);
libro1.mostrarDetalles();

console.log('---');

const ebook1 = new Ebook('El ocaso', 'Osamu Dazai', 1947, 7.99, 'ePub');
ebook1.mostrarDetalles();
