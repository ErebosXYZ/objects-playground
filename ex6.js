/**
 * Contar cuántos hobbies tiene una persona
 * 
 * Dado un objeto que representa a una persona con una propiedad "hobbies" (un array), 
 * la función debe devolver un number indicando cuántos hobbies tiene.
 */

function countHobbies(person) {
    return person.hobbies.length;
}

// Ejemplo de uso:
console.log(countHobbies({ nombre: "Carlos", hobbies: ["leer", "correr", "ajedrez"] })); // 3 . Porque la propiedad hobbies tiene 3 elementos
console.log(countHobbies({ nombre: "Ana", hobbies: ["bailar"] })); // 1
console.log(countHobbies({ nombre: "Luis", hobbies: [] })); // 0. Porque la propiedad hobbies no tiene elementos (es un array vacío)
