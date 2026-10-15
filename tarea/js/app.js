import { curso, estudiantes } from "./datos.js";
import { reporte } from "./calculos.js";
const lista = document.querySelector("#reportes");

console.log(`Curso: ${curso}`);
estudiantes.forEach((estudiante) => {
    console.log(reporte(estudiante));

    const item = document.createElement("li");
    item.textContent = reporte(estudiante);
    lista.appendChild(item);
});

