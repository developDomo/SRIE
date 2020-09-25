const validateUser = (user, res) => {
  if (!user.isLoggedIn) {
    res.status(401).json({ error: 401, message: 'Unauthorized' });
    return false;
  }
  return true;
};

export default {
  validateUser,
};
