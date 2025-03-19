/**
 * Métodos de objetos
 */

/**
 * Implementa el método "aprender"; que está parcialmente implementado. LA función recibe por parámetro un string, con el nuevo conocimiento aprendido. Debe actualizar la propiedad 'conocimientos' con dicho nuevo string.
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODgxMTQ3OV8yMjI0MDgyOQ
 */
let estudiante = {
  nombre: "Edu",
  conocimientos: [],
  aprender: function (nuevoConocimiento) {
    this.conocimientos.push("HTML");
  },
};

estudiante.aprender("HTML");
console.log(
  "Debería aparecer aquí que el estudiante ha aprendido HTML:",
  estudiante.conocimientos
);
