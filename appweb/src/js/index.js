// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

const USUARIOS = [
  {
    name: 'Juan',
    likes: 10,
  },
  {
    name: 'Pedro',
    likes: 5,
  },
  {
    name: 'Ana',
    likes: 15,
  },
  {
    name: 'Maria',
    likes: 20,
  },
  {
    name: 'Jorge',
    likes: 15,
  },
  {
    name: 'Luis',
    likes: 9,
  },
  {
    name: 'Juan Felipe',
    likes: 10,
  },
  {
    name: 'Pedro',
    likes: 7,
  },
  {
    name: 'Daniel',
    likes: 15,
  },
  {
    name: 'Maria',
    likes: 20,
  },
  {
    name: 'Jorge',
    likes: 15,
  },
  {
    name: 'Luis',
    likes: 8,
  },
  {
    name: 'Juan',
    likes: 10,
  },
  {
    name: 'Pedro',
    likes: 6,
  },
  {
    name: 'Ana Maria',
    likes: 16,
  },
  {
    name: 'Maria Jose',
    likes: 0,
  },
];
//! la const CANTIDADLIKES, va en mayusculas y booblesort va con doble for

const cantidadLikes = (USUARIOS) => {
  let cantidad = 0;
  for (let i = 0; i < USUARIOS.length; i++) {
    cantidad += USUARIOS[i].likes;
  }
  return cantidad;
};
console.log(`La cantidad de likes es: ${cantidadLikes(USUARIOS)}`);

const mayorLikes = (likes) => {
  let mayor = 0;
  for (let i = 0; i < likes.length; i++) {
    if (likes[i].likes > mayor) {
      mayor = likes[i].likes;
    }
  }
  return mayor;
};
console.log(`El usuario con mayor likes es: ${mayorLikes(USUARIOS)}`);

const segundoUsuarioConLikes = (likes) => {
  let segundo = 0;
  for (let i = 0; i < likes.length; i++) {
    if (likes[i].likes > segundo && likes[i].likes < mayorLikes(likes)) {
      segundo = likes[i].likes;
    }
  }
  return segundo;
};
console.log(`El segundo usuario con mayor likes es: ${segundoUsuarioConLikes(USUARIOS)}`);

const tercerUsuarioConLikes = function (likes) {
  let tercer = 0;
  for (let i = 0; i < likes.length; i++) {
    if (likes[i].likes > tercer && likes[i].likes < segundoUsuarioConLikes(likes)) {
      tercer = likes[i].likes;
    }
  }
  return tercer;
};
console.log(`El tercer usuario con mayor likes es: ${tercerUsuarioConLikes(USUARIOS)}`);

const usuarioConMenosLikes = function (likes) {
  let menor = 0;
  for (let i = 0; i < likes.length; i++) {
    if (likes[i].likes < menor) {
      menor = likes[i].likes;
    }
  }
  return menor;
};
console.log(`El usuario con menos likes es: ${usuarioConMenosLikes(USUARIOS)}`);

// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// Ordenar por temperatura mínima de menor a mayor.
// Ordenar por temperatura máxima de mayor a menor.

const servicioMeteorologico = {
  dia: [
    {
      dia: 1,
      mes: 1,
      maxima: 10,
      minima: 5,
    },
    {
      dia: 2,
      mes: 1,
      maxima: 15,
      minima: 5,
    },
    {
      dia: 3,
      mes: 1,
      maxima: 20,
      minima: 5,
    },
    {
      dia: 4,
      mes: 1,
      maxima: 25,
      minima: 5,
    },
    {
      dia: 5,
      mes: 1,
      maxima: 30,
      minima: 5,
    },
    {
      dia: 6,
      mes: 1,
      maxima: 35,
      minima: 5,
    },
  ],
};

const temperaturaMinima = function (servicioMeteorologico) {
  for (let i = 0; i < servicioMeteorologico.dia.length; i++) {
    for (let j = 0; j < servicioMeteorologico.dia.length; j++) {
      if (servicioMeteorologico.dia[i].minima < servicioMeteorologico.dia[j].minima) {
        const aux = servicioMeteorologico.dia[i];
        servicioMeteorologico.dia[i] = servicioMeteorologico.dia[j];
        servicioMeteorologico.dia[j] = aux;
      }
    }
  }
  return servicioMeteorologico;
};
console.log(`La temperatura mínima es ${temperaturaMinima(servicioMeteorologico).dia[0].minima}`);

const temperaturaMaxima = function (servicioMeteorologico) {
  for (let i = 0; i < servicioMeteorologico.dia.length; i++) {
    for (let j = 0; j < servicioMeteorologico.dia.length; j++) {
      if (servicioMeteorologico.dia[i].maxima > servicioMeteorologico.dia[j].maxima) {
        const aux = servicioMeteorologico.dia[i];
        servicioMeteorologico.dia[i] = servicioMeteorologico.dia[j];
        servicioMeteorologico.dia[j] = aux;
      }
    }
  }
  return servicioMeteorologico;
};
console.log(`La temperatura máxima es ${temperaturaMaxima(servicioMeteorologico).dia[0].maxima}`);
