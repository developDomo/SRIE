import nextConnect from 'next-connect';
import EducativeLevelService from '../../../services/EducativeLevel.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  EducativeLevelService.findAll().then((results) => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
