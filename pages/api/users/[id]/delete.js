import nextConnect from 'next-connect';
import UserService from '../../../../services/User.service';
import withSession from '../../../../lib/session';
import UserAccessUtils from '../../../../utils/UserAccess.utils';

const handler = nextConnect();

handler.post(withSession(async (req, res) => {
  const user = req.session.get('user');

  if (UserAccessUtils.validateUser(user, res)) {
    const { id } = req.query;
    const result = await UserService.remove(id, user);
    if (result.length > 0) {
      res.status(200).json({});
    } else {
      res.status(409).json(result);
    }
  }
}));

export default (req, res) => handler.apply(req, res);
