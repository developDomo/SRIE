import nextConnect from 'next-connect';
import UserService from '../../../services/User.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  UserService.findAll().then((results) => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
