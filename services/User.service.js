/* eslint-disable no-param-reassign */
import PasswordEncodingService from './PasswordEncoding.service';
import EventService from './Event.service';

const db = require('express-http-context').get('db');

const findAll = async () => db.users.find({ }, {
  order: [{
    field: 'created_at',
    direction: 'asc',
  }],
});

const findById = async (id) => db.users.findOne({ id });

const findByEmail = async (email) => db.users.findOne({ email: email.toLowerCase() });

const updatePassword = async (id, newPassword, loggedUser) => {
  const response = await db.users.update({ id }, { password: await PasswordEncodingService.encode(newPassword) });
  const [user] = response;

  EventService.updateUserPasswordEvent(loggedUser, user);

  return response;
};

const save = async (user) => db.users.save(user);

const validateUser = (user) => {
  if (!user.email) {
    return false;
  }

  return true;
};

const create = async (user, loggedUser) => {
  const result = {
    success: false,
  };

  if (!validateUser(user)) {
    result.message = 'Validation error';
    return result;
  }

  const existing = await findByEmail(user.email);
  if (existing) {
    result.message = 'User already exists';
    return result;
  }

  user.email = user.email.toLowerCase();
  user.password = await PasswordEncodingService.encode(user.password);
  result.user = await db.users.insert(user);
  result.success = true;

  EventService.newUserEvent(loggedUser, result.user);

  return result;
};

const update = async (id, user, loggedUser) => {
  const result = {
    success: false,
  };

  if (!validateUser(user)) {
    result.message = 'Validation error';
    return result;
  }

  user.email = user.email.toLowerCase();
  const response = await db.users.update({ id }, user);
  [result.user] = response;
  result.success = true;

  EventService.updateUserEvent(loggedUser, result.user);

  return result;
};

const remove = async (id, loggedUser) => {
  const result = await db.users.destroy({ id });

  EventService.deleteUserEvent(loggedUser, result[0]);

  return result;
};

export default {
  findAll,
  findById,
  findByEmail,
  updatePassword,
  save,
  create,
  update,
  remove,
};
