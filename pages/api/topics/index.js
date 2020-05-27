import nextConnect from 'next-connect';
import TopicService from '../../../services/Topic.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  TopicService.getAll().then((results) => {
    res.status(200).json(results);
  });
});

export default (req, res) => handler.apply(req, res);
