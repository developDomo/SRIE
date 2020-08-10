import nextConnect from 'next-connect';
import InputValidatorUtils from '../../../utils/InputValidator.utils';
import CloudinaryService from '../../../services/Cloudinary.service';

const handler = nextConnect();

const schema = {
  country: { type: 'string', min: 2, max: 2 },
  code: {
    type: 'string', min: 1, max: 4,
  },
};

const inputValidator = InputValidatorUtils.getInputValidator(schema);

handler.get(async (req, res) => {
  if (InputValidatorUtils.validate(inputValidator, req.query, res)) {
    const { code, country } = req.query;

    const url = CloudinaryService.url(`${country}-${code}.csv`);
    res.redirect(url);
  }
});

export default (req, res) => handler.apply(req, res);
