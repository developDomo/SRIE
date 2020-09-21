import nextConnect from 'next-connect';
import ManualDataService from '../../../../../services/ManualData.service';
import InputValidatorUtils from '../../../../../utils/InputValidator.utils';
import withSession from '../../../../../lib/session';
import UserAccessUtils from '../../../../../utils/UserAccess.utils';

const handler = nextConnect();

const getSchema = {
  id: {
    type: 'number', positive: true, integer: true, convert: true,
  },
  variation: {
    type: 'string', min: 1, max: 1, optional: true,
  },
  country: { type: 'string', min: 2, max: 2 },
};

const postSchema = {
  id: {
    type: 'number', positive: true, integer: true, convert: true,
  },
};

const inputGetValidator = InputValidatorUtils.getInputValidator(getSchema);
const inputPostValidator = InputValidatorUtils.getInputValidator(postSchema);

handler.get(withSession(async (req, res) => {
  if (InputValidatorUtils.validate(inputGetValidator, req.query, res)) {
    const data = await ManualDataService.findManualDataByIndicatorId(
      req.query.id,
      req.query.variation,
      req.query.country,
    );

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: true, message: 'Indicator not found' });
    }
  }
}));

handler.post(withSession(async (req, res) => {
  const user = req.session.get('user');

  if (UserAccessUtils.validateUser(user, res)) {
    const { id } = req.query;

    if (InputValidatorUtils.validate(inputPostValidator, req.query, res)) {
      await ManualDataService.addData(id, req.body, user);
      res.status(200).json({});
    }
  }
}));

export default (req, res) => handler.apply(req, res);
