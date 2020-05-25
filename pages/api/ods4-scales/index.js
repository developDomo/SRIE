import nextConnect from 'next-connect';
import Ods4ScaleService from '../../../services/Ods4Scale.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  Ods4ScaleService.getAll().then((results) => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
