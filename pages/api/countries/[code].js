import nextConnect from 'next-connect';
import CountryService from '../../../services/Country.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  const country = await CountryService.findByCode(req.query.code);
  res.status(200).json(country);
});

export default (req, res) => handler.apply(req, res);
