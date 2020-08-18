import bcrypt from 'bcrypt';

const saltRounds = 10;

const encode = async (password) => bcrypt.hash(password, saltRounds);
const compare = async (password, hash) => bcrypt.compare(password, hash);

export default {
  encode,
  compare,
};
