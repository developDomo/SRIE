import nextConnect from 'next-connect';
import ManualDataService from '../../../../../services/ManualData.service';
import InputValidatorUtils from '../../../../../utils/InputValidator.utils';

const handler = nextConnect();

const postSchema = {
  id: {
    type: 'number', positive: true, integer: true, convert: true,
  },
};

const inputPostValidator = InputValidatorUtils.getInputValidator(postSchema);

handler.post(async (req, res) => {
  console.log('put');
  console.log(req.body);
  const { id } = req.query;
  if (InputValidatorUtils.validate(inputPostValidator, req.query, res)) {
    await ManualDataService.editIndicatorData(id, req.body);
    res.status(200).json({});
  }
});

export default (req, res) => handler.apply(req, res);
