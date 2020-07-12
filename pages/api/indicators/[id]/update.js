import nextConnect from 'next-connect';
import UisDataService from '../../../../services/UisData.service';
import InputValidatorUtils from '../../../../utils/InputValidator.utils';

const handler = nextConnect();

const schema = {
  id: {
    type: 'number', positive: true, integer: true, convert: true,
  },
  countries: { type: 'string', optional: true },
};

const inputValidator = InputValidatorUtils.getInputValidator(schema);

handler.get(async (req, res) => {
  if (InputValidatorUtils.validate(inputValidator, req.query, res)) {
    const success = await UisDataService.updateDataByIndicatorId(req.query.id, req.query.countries);

    if (success) {
      res.status(200).end();
    } else {
      res.status(404).json({ error: true, message: 'Indicator not found' });
    }
  } else {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
});

export default (req, res) => handler.apply(req, res);
