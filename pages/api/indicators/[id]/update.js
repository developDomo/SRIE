import nextConnect from 'next-connect';
import UisDataService from '../../../../services/UisData.service';
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
    UisDataService.updateDataByIndicatorId(req.query.id);

    res.status(200).end();
  } else {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
});

export default (req, res) => handler.apply(req, res);
