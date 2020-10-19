import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { withTranslation } from '../../../i18n';
import AdminMenu from '../../../components/admin/AdminMenu';
import CountryTitle from '../../../components/countries/CountryTitle';
import Title from '../../../components/layout/Title';
import { Serialize } from '../../../utils/Serializer.utils';
import needsAuth from '../../../lib/needsAuth';
import UserAdminList from '../../../components/layout/UserAdminList';
import { Button } from '../../../components/layout/Button';
import CountryService from '../../../services/Country.service';
import UserService from '../../../services/User.service';

const AdminUsers = ({
  t, user, country, users,
}) => (
  <Container fluid>
    <AdminMenu user={user} />
    <Container className="pt-4 pb-4">
      <CountryTitle country={country} />
      <Row className="mt-4 mb-4">
        <div className="col-lg-12 pr-0 text-center">
          <Title color="blueTitle" type="title">
            {t('userDetail')}
          </Title>
        </div>
      </Row>
      <Row>
        <Col md={{
          span: 10,
          offset: 1,
        }}
        >
          <UserAdminList users={users} />
        </Col>
      </Row>
      <Row>
        <Col sm={{
          span: 4,
          offset: 4,
        }}
        >
          <Link passHref href="/admin/users/new">
            <Button className="btn-add-data  mt-4" color="blue">
              {`${t('add')} ${t('user')}  +` }
            </Button>
          </Link>

        </Col>
      </Row>
    </Container>
  </Container>
);

export const getServerSideProps = needsAuth(async ({ user }) => {
  const countryService = CountryService.findByCode(user.country);
  const usersService = UserService.findAll();
  const [country, users] = await Promise.all([countryService, usersService]);
  const serializedUsers = Serialize(users);

  return {
    props: {
      user,
      country,
      users: serializedUsers,
    },
  };
});

AdminUsers.defaultProps = {
  i18nNamespaces: ['common'],
};

export default withTranslation('common')(AdminUsers);
