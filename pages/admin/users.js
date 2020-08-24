import { withTranslation } from '../../i18n';
import AdminMenu from '../../components/admin/AdminMenu';
import needsAuth from '../../lib/needsAuth';

const AdminUsers = ({ user }) => (
  <div>
    <AdminMenu user={user} />
    Users
  </div>
);

export const getServerSideProps = needsAuth(async ({ user }) => ({
  props: {
    namespacesRequired: ['common'],
    user,
  },
}));

export default withTranslation('common')(AdminUsers);
