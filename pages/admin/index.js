import { Container } from 'react-bootstrap';
import needsAuth from '../../lib/needsAuth';
import { withTranslation } from '../../i18n';
import AdminDashboard from '../../components/admin/index/AdminDashboard';
import CountryAdminDashboard from '../../components/admin/index/CountryAdminDashboard';
import AdminMenu from '../../components/admin/AdminMenu';

const AdminHome = ({ user }) => (
  <Container fluid>
    <AdminMenu user={user} />
    {(user.role === 'admin') ? <AdminDashboard /> : <CountryAdminDashboard />}
  </Container>
);

export const getServerSideProps = needsAuth(async ({ user }) => ({
  props: {
    namespacesRequired: ['common'],
    user,
  },
}));

export default withTranslation('common')(AdminHome);
