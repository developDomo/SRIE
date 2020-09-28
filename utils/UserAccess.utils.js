const unathorizedMessage = 'Unauthorized';
const forbiddenMessage = 'Forbidden';

const unathorizedError = (res) => {
  const errorCode = 401;
  res.status(errorCode).json({ error: errorCode, message: unathorizedMessage });
  return false;
};

const forbiddenError = (res) => {
  const errorCode = 403;
  res.status(errorCode).json({ error: errorCode, message: forbiddenMessage });
  return false;
};

const validateUser = (user, res) => {
  if (!user.isLoggedIn) {
    return unathorizedError(res);
  }

  return true;
};

const validateAdmin = (user, res) => {
  if (!validateUser(user, res)) {
    return false;
  }

  if (user.role !== 'admin') {
    return forbiddenError(res);
  }

  return true;
};

export default {
  validateUser,
  validateAdmin,
};
