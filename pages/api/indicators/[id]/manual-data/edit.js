import nextConnect from 'next-connect';
import ManualDataService from '../../../../../services/ManualData.service';
import InputValidatorUtils from '../../../../../utils/InputValidator.utils';
import withSession from '../../../../../lib/session';
import UserAccessUtils from '../../../../../utils/UserAccess.utils';

const handler = nextConnect();

const postSchema = {
  id: {
    type: 'number', positive: true, integer: true, convert: true,
  },
};

const inputPostValidator = InputValidatorUtils.getInputValidator(postSchema);

handler.post(withSession(async (req, res) => {
  const user = req.session.get('user');

  if (UserAccessUtils.validateUser(user, res)) {
    if (InputValidatorUtils.validate(inputPostValidator, req.query, res)) {
      const { id } = req.query;
      await ManualDataService.editIndicatorData(id, req.body, user);
      res.status(200).json({});
    }
  }
}));

export default (req, res) => handler.apply(req, res);
