/**
 * Contar cuántas personas son de un país determinado
 * 
 * Recibe un array de personas (objetos con propiedad "pais") y un string con el nombre de un país.
 * Devuelve cuántas personas en el array son de ese país.
 */
// Necessitem saber si people.pais es repeteix i si ho fa, retornar quantes vegades ho fa. Si people.pais (la propietat pais de l'objecte)

function countPeopleFromCountry(people, country) {
    let countryPeople = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].pais === country) {
            countryPeople++;
        }
    } 
    return countryPeople;
}

// creo la variable countryPeople que fa de comptador i s'inicialitza a 0. 
// Amb el for, recorro l'array people 3 vegades, incrementant l'índex de consulta. 
// Si en aquest recorregut l'índex on estem de people té un país que és igual a country, el comptador s'incrementa: countryPeople++
// fem que la funció retorni el nombre total del comptador. No posem return ni a l'if ni al for.
// Si posem return a l'if, ens retorna sempre 0 perquè el return actua abans d'incrementar el nombre. 
// Si posem return al for només recorrerà el primer objecte i per tant retornarà només el valor 1 i després sortirà del bucle

// Ejemplo de uso:
console.log(countPeopleFromCountry([
    { nombre: "Lucía", pais: "España" },
    { nombre: "Juan", pais: "Argentina" },
    { nombre: "Marta", pais: "España" }
], "España")); // 2. Porque existen 2 personas en este array de objetos que son de España

console.log(countPeopleFromCountry([
    { nombre: "Santiago", pais: "Perú" },
    { nombre: "Diego", pais: "Chile" },
    { nombre: "Valeria", pais: "México" }
], "Chile")); // 1

console.log(countPeopleFromCountry([{ nombre: "Laura", pais: "Brasil" }], "Perú")); // 0
