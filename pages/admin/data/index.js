import Link from 'next/link';
import { withTranslation } from '../../../i18n';
import AdminMenu from '../../../components/admin/AdminMenu';
import needsAuth from '../../../lib/needsAuth';

const AdminData = ({ user }) => (
  <div>
    <AdminMenu user={user} />
    <h2>Indicators data</h2>
    <ul>
      <li>
        <Link href="/admin/data/12?variation=c">
          <a>12.c </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/data/18">
          <a>18</a>
        </Link>
      </li>
      <li>
        <Link href="/admin/data/24">
          <a>24</a>
        </Link>
      </li>
    </ul>
  </div>
);

export const getServerSideProps = needsAuth(async ({ user }) => ({
  props: {
    namespacesRequired: ['common'],
    user,
  },
}));

export default withTranslation('common')(AdminData);
