import nextConnect from 'next-connect';
import withSession from '../../lib/session';

const handler = nextConnect();

handler.get(withSession(async (req, res) => {
  req.session.destroy();
  res.json({ isLoggedIn: false });
}));

export default (req, res) => handler.apply(req, res);
