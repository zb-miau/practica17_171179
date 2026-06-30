/*
Indicaciones:

Implementa una función llamada prepareActivities.
Recibe como parámetro un arreglo de números enteros.
Elimina los elementos duplicados.
Ordena el arreglo en orden ascendente.
Retorna el nuevo arreglo resultante.
Considera el caso de un arreglo vacío.
Importante:

No está permitido el uso de inteligencia artificial para resolver la actividad.
Agrega comentarios claros en tu código explicando tu razonamiento y las decisiones que tomaste.
RETO:

Durante las vacaciones de Verano 🏖️, un grupo de ingenieros en software decide organizar sus días de descanso registrando las actividades que quieren realizar: ir a la playa, salir a comer, descansar o explorar nuevos lugares. 🌊🍹

Sin embargo, al anotar sus planes, algunos escribieron actividades repetidas y en desorden. Para optimizar su itinerario y aprovechar mejor el tiempo, necesitan eliminar las actividades duplicadas y ordenarlas alfabéticamente según su prioridad.

Tu tarea es escribir una función que reciba una lista de números enteros (que representan actividades) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

const activities1 = [3, 1, 2, 3, 4, 2, 5]
const plannedActivities1 = prepareActivities(activities1)
console.log(plannedActivities1) // [1, 2, 3, 4, 5]

const activities2 = [6, 5, 5, 5, 5]
const plannedActivities2 = prepareActivities(activities2)
console.log(plannedActivities2) // [5, 6]

const activities3 = []
const plannedActivities3 = prepareActivities(activities3)
console.log(plannedActivities3) // []
// No hay actividades, la lista queda vacía */

const activities1 = [3, 1, 2, 3, 4, 2, 5];
function prepareActivities(lista = [Number] ){ //esto se supone que es para que solo acepte arreglos de numeros
    return (lista.length !== 0)? lista.sort( //evalúa la lista con un ternario
        (a,b) => a-b //lo acomoda de forma ascendente
    ).filter(
        (a,b) => a !== b //se supone que si a es diferente de b, lo va a filtrar
    ) : "No hay actividades"; //si no hay actividades regresa que no hay actividades
    
}




console.log(prepareActivities(activities1));