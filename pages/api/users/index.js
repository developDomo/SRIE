import nextConnect from 'next-connect';
import UserService from '../../../services/User.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  UserService.findAll().then((results) => {
    res.status(200).json(results);
  });
});

handler.post(async (req, res) => {
  const result = await UserService.create(req.body);
  if (result.success) {
    res.status(200).json({});
  } else {
    res.status(409).json(result);
  }
});

export default (req, res) => handler.apply(req, res);
