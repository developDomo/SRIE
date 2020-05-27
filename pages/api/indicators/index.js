import nextConnect from 'next-connect';
import IndicatorService from '../../../services/Indicator.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  const { pecGoal, topic, educativeLevel } = req.query;
  const indicators = await IndicatorService.search(
    pecGoal,
    topic,
    educativeLevel,
  );
  res.status(200).json(indicators);
});

export default (req, res) => handler.apply(req, res);
