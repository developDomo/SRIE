/* eslint-disable no-param-reassign */
import PasswordEncodingService from './PasswordEncoding.service';

const db = require('express-http-context').get('db');

const findAll = async () => db.users.find({ }, {
  order: [{
    field: 'created_at',
    direction: 'asc',
  }],
});

const findById = async (id) => db.users.findOne({ id });

const findByEmail = async (email) => db.users.findOne({ email: email.toLowerCase() });

const updatePassword = async (id, newPassword) => db.users.update({ id }, { password: await PasswordEncodingService.encode(newPassword) });

const save = async (user) => db.users.save(user);

const validateUser = (user) => {
  if (!user.email) {
    return false;
  }

  return true;
};

const create = async (user) => {
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
  result.user = db.users.insert(user);
  result.success = true;

  return result;
};

const update = async (id, user) => {
  const result = {
    success: false,
  };

  if (!validateUser(user)) {
    result.message = 'Validation error';
    return result;
  }

  user.email = user.email.toLowerCase();
  result.user = db.users.update({ id }, user);
  result.success = true;

  return result;
};

const remove = async (id) => db.users.destroy({ id });

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
