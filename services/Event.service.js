const db = require('express-http-context').get('db');

const findAll = async () => db.events.find({ }, {
  order: [{
    field: 'created_at',
    direction: 'asc',
  }],
});

const paginate = async (page, size) => {
  const options = {
    offset: (page - 1) * size,
    limit: size,
    order: [{
      field: 'timestamp',
      direction: 'desc',
    }],
  };

  const [totalElements, elements] = await Promise.all([db.events.count({}), db.events.find({ }, options)]);
  const totalPages = Math.ceil(totalElements / size);

  return {
    totalElements: parseInt(totalElements, 10),
    totalPages,
    page,
    size,
    elements,
  };
};

const save = async (event) => db.events.insert(event);

const newDataEvent = (user, id, year) => {
  const event = {
    country: user.country,
    user_email: user.email,
    action: `Nuevos datos para el indicador ${id}, para el año ${year}`,
  };

  save(event);
};

const updateDataEvent = (user, id, year) => {
  const event = {
    country: user.country,
    user_email: user.email,
    action: `Datos actualizados para el indicador ${id}, para el año ${year}`,
  };

  save(event);
};

const newUserEvent = (loggedUser, user) => {
  const event = {
    country: loggedUser.country,
    user_email: loggedUser.email,
    action: `Nuevo usuario creado [${user.email} - ${user.role} - ${user.country}]`,
  };

  save(event);
};

const updateUserEvent = (loggedUser, user) => {
  const event = {
    country: loggedUser.country,
    user_email: loggedUser.email,
    action: `Usuario actualizado [${user.email} - ${user.role} - ${user.country}]`,
  };

  save(event);
};

const deleteUserEvent = (loggedUser, user) => {
  const event = {
    country: loggedUser.country,
    user_email: loggedUser.email,
    action: `Usuario borrado [${user.email} - ${user.role} - ${user.country}]`,
  };

  save(event);
};

const updateUserPasswordEvent = (loggedUser, user) => {
  const event = {
    country: loggedUser.country,
    user_email: loggedUser.email,
    action: `Contraseña actualizada para [${user.email} - ${user.role} - ${user.country}]`,
  };

  save(event);
};

export default {
  findAll,
  paginate,
  newDataEvent,
  updateDataEvent,
  newUserEvent,
  updateUserEvent,
  deleteUserEvent,
  updateUserPasswordEvent,
};
