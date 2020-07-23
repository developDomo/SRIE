import nextConnect from 'next-connect';
import IndicatorService from '../../../../services/Indicator.service';
import InputValidatorUtils from '../../../../utils/InputValidator.utils';

const handler = nextConnect();

const schema = {
  id: {
    type: 'number', positive: true, integer: true, convert: true,
  },
};

const inputValidator = InputValidatorUtils.getInputValidator(schema);

handler.get(async (req, res) => {
  if (InputValidatorUtils.validate(inputValidator, req.query, res)) {
    const indicator = await IndicatorService.findFullDetailsById(req.query.id);

    if (indicator) {
      res.status(200).json(indicator);
    } else {
      res.status(404).json({ error: true, message: 'Indicator not found' });
    }
  } else {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
});

export default (req, res) => handler.apply(req, res);
