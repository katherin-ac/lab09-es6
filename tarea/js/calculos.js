const promedio = (...notas) => {
 let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  return suma / notas.length;
}

const estado = (nota, minima = 13) => {
  return nota >= minima ? "Aprobado" : "Desaprobado";
}

const reporte = (estudiante) => {
    const { nombre, notas } = estudiante;
    const prom = promedio(...notas);

    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};
export { promedio, estado, reporte };
export default reporte;