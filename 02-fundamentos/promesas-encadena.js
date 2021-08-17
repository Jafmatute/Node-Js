/** @format */

const empleados = [
  {
    id: 1,
    nombre: "Josue",
  },
  {
    id: 2,
    nombre: "Paola",
  },
  {
    id: 3,
    nombre: "Abby",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado
      ? resolve(empleado)
      : reject(`No existe el empleado con el id: ${id}`);
  });

  return promesa;
};

const getSalario = (id) => {
  const pma = new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`El salario con el id: ${id} no se encontró`);
  });

  return pma;
};

id = 2;
// getEmpleado(1)
//   .then((empleado) => getSalario(id))
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));

let nombre;
getEmpleado(1)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado: ${nombre} tiene un salario de: ${salario}`)
  )
  .catch((err) => console.log(err));
