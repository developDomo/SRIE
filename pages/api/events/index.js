import nextConnect from 'next-connect';
import EventService from '../../../services/Event.service';
import withSession from '../../../lib/session';
import UserAccessUtils from '../../../utils/UserAccess.utils';

const handler = nextConnect();
const defaultPage = 1;
const defaultSize = 20;

handler.get(withSession(async (req, res) => {
  const user = req.session.get('user');

  if (UserAccessUtils.validateAdmin(user, res)) {
    const page = parseInt(req.query.page, 10) || defaultPage;
    const size = parseInt(req.query.size, 10) || defaultSize;

    const events = await EventService.paginate(page, size);

    if (events) {
      res.status(200).json(events);
    } else {
      res.status(404).json({ error: true, message: 'Indicator not found' });
    }
  }
}));

export default (req, res) => handler.apply(req, res);
