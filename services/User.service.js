import PasswordEncodingService from './PasswordEncoding.service';

const db = require('express-http-context').get('db');

const findByEmail = async (email) => db.users.findOne({ email: email.toLowerCase() });

const updatePassword = async (userId, newPassword) => db.users.update(userId, { password: PasswordEncodingService.encode(newPassword) });

const save = async (user) => db.users.save(user);

export default {
  findByEmail,
  updatePassword,
  save,
};
