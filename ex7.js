/**
 * Obtener la edad de la persona mayor
 * 
 * Recibe dos objetos con propiedades "name" y "age".
 * Devuelve la edad de la persona con mayor edad.
 * Si ambas tienen la misma edad, devuelve esa edad.
 * 
 * IMPORTANTE: debes usar la palabra reservada "return" para devolver un número.
 * No es suficiente con usar console.log dentro de la función.
 */

function getOldestAge(person1, person2) {
if (person1.age >= person2.age) {
    return person1.age;
} return person2.age;
}

// es pot utilitzar return dins l'if perquè és una funció. El return mostra per la consola el valor que li demanem i per tant no cal el console.log


// Ejemplo de uso:
console.log(getOldestAge({ name: "Pedro", age: 30 }, { name: "María", age: 25 })); 
// 30. Porque Pedro es mayor que María

console.log(getOldestAge({ name: "Ana", age: 40 }, { name: "Luis", age: 50 })); 
// 50

console.log(getOldestAge({ name: "Elena", age: 20 }, { name: "Carlos", age: 20 })); 
// 20

