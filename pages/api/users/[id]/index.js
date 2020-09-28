import nextConnect from 'next-connect';
import UserService from '../../../../services/User.service';
import withSession from '../../../../lib/session';
import UserAccessUtils from '../../../../utils/UserAccess.utils';

const handler = nextConnect();

handler.get(async (req, res) => {
  UserService.findById(req.query.id).then((results) => {
    res.status(200).json(results);
  });
});

handler.post(withSession(async (req, res) => {
  const user = req.session.get('user');

  if (UserAccessUtils.validateAdmin(user, res)) {
    const { id } = req.query;
    const result = await UserService.update(id, req.body, user);
    if (result.success) {
      res.status(200).json({});
    } else {
      res.status(409).json(result);
    }
  }
}));

export default (req, res) => handler.apply(req, res);
