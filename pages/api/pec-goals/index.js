import nextConnect from 'next-connect';
import PecGoalService from '../../../services/PecGoal.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  PecGoalService.getAll().then((results) => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
