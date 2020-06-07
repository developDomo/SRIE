import nextConnect from 'next-connect';
import EducationLevelService from '../../../services/EducativeLevel.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  EducationLevelService.findAll().then((results) => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
