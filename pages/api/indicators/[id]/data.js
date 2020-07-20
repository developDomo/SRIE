import nextConnect from 'next-connect';
import IndicatorDataService from '../../../../services/IndicatorData.service';
import InputValidatorUtils from '../../../../utils/InputValidator.utils';

const handler = nextConnect();

const schema = {
  id: {
    type: 'number', positive: true, integer: true, convert: true,
  },
  country: { type: 'string', min: 2, max: 2 },
};

const inputValidator = InputValidatorUtils.getInputValidator(schema);

handler.get(async (req, res) => {
  if (InputValidatorUtils.validate(inputValidator, req.query, res)) {
    const indicator = await IndicatorDataService.findByIndicatorId(
      req.query.id,
      req.query.country,
    );

    if (indicator) {
      res.status(200).json(indicator);
    } else {
      res.status(404).json({ error: true, message: 'Indicator not found' });
    }
  }
});

export default (req, res) => handler.apply(req, res);
