import nextConnect from 'next-connect';
import UisDataService from '../../../services/UisData.service';
import InputValidatorUtils from '../../../utils/InputValidator.utils';

const handler = nextConnect();

const schema = {
  countries: { type: 'string', optional: true },
};

const inputValidator = InputValidatorUtils.getInputValidator(schema);

handler.get(async (req, res) => {
  if (InputValidatorUtils.validate(inputValidator, req.query, res)) {
    const success = await UisDataService.updateAllIndicators(req.query.countries);

    if (success) {
      res.status(200).end();
    } else {
      res.status(409).json({ error: true, message: 'Conflict' });
    }
  } else {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
});

export default (req, res) => handler.apply(req, res);
