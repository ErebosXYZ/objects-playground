/**
 * Completa cada pregunta . Cada una de ellas requiere de una única línea de código. Cambia cada undefined por la sentencia JavaScript adecuada
 *
 * https://oscarm.tinytake.com/msc/ODgxMTUwMF8yMjI0MDg1MA
 */

const robot = {
  nombre: "Front Ender Maximus",
  modelo: "XR-500",
  color: "Plateado",
  altura: 120,
  peso: 150, // kg
  batería: {
    capacidad: 5000,
    nivelActual: 3500,
  },
  capacidadCarga: 100,
  herramientas: ["Brazo mecánico", "Láser de corte", "Destornillador"],
  movimientos: ["Caminar", "Girar", "Saltar"],
  encendido: false,
  activar: function () {
    this.encendido = true;
    console.log(`${this.nombre} está encendido.`);
  },
  apagar: function () {
    this.encendido = false;
    console.log(`${this.nombre} está apagado.`);
  },
  cargarBateria: function (cantidad) {
    if (this.batería.nivelActual + cantidad <= this.batería.capacidad) {
      this.batería.nivelActual += cantidad;
      console.log(
        `${this.nombre} ha sido cargado. Nivel de batería actual: ${this.batería.nivelActual}`
      );
    } else {
      console.log(
        `${this.nombre} no puede cargar más batería, está al máximo.`
      );
    }
  },
  realizarTarea: function (tarea) {
    if (this.encendido) {
      console.log(`${this.nombre} está realizando la tarea: ${tarea}`);
    } else {
      console.log(
        `${this.nombre} no puede realizar tareas porque está apagado.`
      );
    }
  },
};

// Ejemplo ya solucionado
console.log("Muestra el nombre del robot: ", robot.nombre);

console.log("Muestra el modelo del robot: ", robot.modelo);

console.log("Muestra el color del robot: ", robot.color);

console.log(
  "Calcula el peso del robot en la luna, sabiendo que el peso del robot en la luna es el 16,5% del peso del robot en la tierra: ",
  robot.peso * 0.165
);

console.log(
  "Indica el nivel actual de carga de batería del robot: ",
  robot.capacidadCarga
);

console.log(
  "Indica el número de herramientas de las que dispone el robot",
  robot.herramientas
);

console.log(
  "Devuelve un true o un false indicando si, entre los movimientos del robot, existe la capacidad de 'volar' ",
  robot.movimientos.includes("volar")
);

/**
 * Escribe 3 líneas JavaScript para ejecutar las siguientes acciones del robot. Debe ejecutar 3 métodos:
 *
 * 1. Activar el robot
 * 2. Carga la batería del robot 500 unidades
 * 3. Indica al robot que relice la tarea de "caminar"
 *  */
robot.activar();
robot.cargarBateria(500);
robot.realizarTarea("caminar");