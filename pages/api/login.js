import nextConnect from 'next-connect';
import withSession from '../../lib/session';
import UserService from '../../services/User.service';
import PasswordService from '../../services/PasswordEncoding.service';

const handler = nextConnect();

const unauthorized = (res) => { res.status(401).json({ error: true, isLoggedIn: false, message: 'Unathorized user' }); };

handler.post(withSession(async (req, res) => {
  const { email, password } = await req.body;

  const user = await UserService.findByEmail(email);
  if (!user) {
    unauthorized(res);
    return;
  }

  const match = await PasswordService.compare(password, user.password);
  if (!match) {
    unauthorized(res);
    return;
  }

  const logged = {
    email: user.email, role: user.role, country: user.country, isLoggedIn: true,
  };

  req.session.set('user', logged);
  await req.session.save();

  user.last_login = new Date();
  UserService.save(user);

  res.status(200).json(logged);
}));

export default (req, res) => handler.apply(req, res);
