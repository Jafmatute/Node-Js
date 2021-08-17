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

const id = 3;
const getInfoUser = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario de empleado: ${empleado} es: ${salario}`;
  } catch (error) {
    throw error;
  }
};

getInfoUser(id)
  .then((r) => {
    console.log("TODO BIEN!");
    console.log(r);
  })
  .catch((err) => {
    console.log("TODO MAL");
    console.log(err);
  });
