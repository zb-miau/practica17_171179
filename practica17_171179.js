// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];

// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/

// for in itera objetos y for of itera elementos de una colección
//tareas es una lista de objetos, hay que iterar sobre la lista para acceder al objeto

function mostrarTareas(lista) {
    //tengo que tener una lista para poner el resultado, de otra forma, con el puro return solo me va a regresar un elemento
    let resultado = [];
    for (const i of lista){ //of para iterar sobre elementos de colección
        //no se me ocurrió como más hacerlo que así. Si es true, la variable nueva estado cambia a "Completada"
        let estado;
        if (i.completada) {
            estado = "Completada";
        } else {
            //si no, la variable cambia a "Pendiente"
            estado = "Pendiente";
        }
        //metemos en el resultado el nombre y el estado ya cambiado
        resultado.push({"nombre": i.nombre, "estado": estado})
    }
    //regresa la lista del resultado
    return resultado;
}

//aqui ya al llamar la función se pone el nombre de la lista que tiene las tareas
console.log(mostrarTareas(tareas));

/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
    //primero tengo que declarar que voy a regresar la lista de tareas una vez filtrada
    //con el return tareas.filter
    return tareas.filter(
        //aquí, especifico que la tarea tiene que tener su atributo completado estrictamente como true
        tarea => tarea.completada === true
    )
};

//eso debería regrear las tareas completadas únicamente al llamar la función flecha
console.log(obtenerCompletadas(tareas));

/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  //misma lógica que la anterior
  return tareas.filter(
    tarea => tarea.completada !== true //en vez de ser estrictamente true, pongo diferente de?
  )
};

console.log(obtenerPendientes(tareas));

/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  //es igual a las anteriores pero en lugar de filter uso map
  return tareas.map(
    //si pongo solo el atributo nombre de las tareas individuales solo
    //deberia imprimirse eso al llamar la función
    tareas => tareas.nombre
  )
};

console.log(obtenerNombres(tareas));

/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
    //voy a utilizar un contador... hay una forma más óptima supongo
    let contador = 0;
  for (const tarea of tareas){
    //cada que recorra una tarea el contador sube
    contador++;
  }
  return contador;
}

console.log("número de tareas: " + contarTareas(tareas));

// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    //que se supone que tengo que hacer aqui?? no entiendo
  },

  mostrarCompletadas: function() {
    //objetos??
  },

  mostrarPendientes: function() {
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

//si 0 es false, y para que un arreglo este vacío debe tener un 0
//entonces puedo revisar si el length tiene un numero distinto a 0 utilizando length creo?
if (tareas.length === 0){
    console.log("No hay tareas")
} else { // en teoria si la lista de pendientes está vacía significa que están completadas no?
    let completadas = obtenerPendientes(tareas).length === 0;
    if (completadas) {
        console.log("Todas las tareas completadas")
    }
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  case 1:
    console.log(mostrarTareas(tareas)); //en esto solo tengo que llamar la funcion correspondiente segun la opcion y el case
    break;

  case 2:
    console.log(mostrarCompletadas(tareas));
    break;

  case 3:
    console.log(mostrarPendientes(tareas));
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/