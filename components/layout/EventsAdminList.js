import Table from 'react-bootstrap/Table';
import Dotdotdot from 'react-dotdotdot';
import { DateTime } from 'luxon';
import { blue } from '../../theme/colors';
import { withTranslation } from '../../i18n';

DateTime.local();

const EventsAdminList = ({
  t, i18n, events, loading,
}) => {
  const formatDate = (d) => DateTime.fromISO(d).setLocale(i18n.language).toLocaleString(DateTime.DATE_MED);
  return (
    <>
      <Table className="table-hover-" responsive="lg">
        <thead>
          <tr className="align-middle text-center">
            <th className="w-auto">{t('country')}</th>
            <th className="w-auto">{t('user')}</th>
            <th className="w-auto">{t('timestamp')}</th>
            <th className="w-50">{t('actionsDone')}</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
          <tr>
            <td className="align-middle text-center">{t('loading')}</td>
          </tr>
          )}
          {!loading && events.map((event) => (
            <tr key={event.timestamp}>
              <td className="align-middle text-center">{event.country}</td>
              <td className="align-middle text-center">{event.user_email}</td>
              <td className="align-middle text-center">{formatDate(event.timestamp)}</td>
              <td className="align-middle text-center"><Dotdotdot clamp={1}>{event.action}</Dotdotdot></td>
            </tr>
          ))}
        </tbody>
        <style jsx>
          {`
        th {
          background-color: ${blue};
          color: white;
          line-height: 2em;
        }
    `}
        </style>
      </Table>
    </>
  );
};

EventsAdminList.defaultProps = {
  i18nNamespaces: ['common'],
};

export default withTranslation(['common'])(EventsAdminList);
