import nextConnect from 'next-connect';
import Ods4GoalService from '../../../services/Ods4Goal.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  Ods4GoalService.getAll().then((results) => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
