import nextConnect from 'next-connect';
import UserService from '../../../../services/User.service';

const handler = nextConnect();

handler.post(async (req, res) => {
  const { id } = req.query;
  const { password } = req.body;

  const result = await UserService.updatePassword(id, password);
  if (result.length > 0) {
    res.status(200).json({});
  } else {
    res.status(409).json(result);
  }
});

export default (req, res) => handler.apply(req, res);
