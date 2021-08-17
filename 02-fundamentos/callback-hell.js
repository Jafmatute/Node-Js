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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  if (empleado) {
    return callback(null, empleado);
  } else {
    callback(`El empleado con id: ${id} no existe en los registros`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;
  if (salario) {
    return callback(null, salario);
  } else {
    callback(`el Id: ${id} no existe salario`);
  }
};

const id = 3;
getEmpleado(id, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  //   console.log(empleado);
  getSalario(id, (err, salario) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El empleado: ${empleado} tiene un salario: ${salario}`);
  });
});
