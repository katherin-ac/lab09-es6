import { curso, estudiantes } from "./datos.js";
import reporte from "./calculos.js";

const nuevo = {
    ...estudiantes[0],
    nombre: "Ana María"
};

const todos = [...estudiantes, nuevo];

const lista = document.querySelector("#reportes");

console.log(`Curso: ${curso}`);
todos.forEach((estudiante) => {
    console.log(reporte(estudiante));

    const item = document.createElement("li");
    item.textContent = reporte(estudiante);
    lista.appendChild(item);
});

