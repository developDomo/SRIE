import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from '../../../i18n';
import needsAuth from '../../../lib/needsAuth';
import UserAdminForm from '../../../components/layout/UserAdminForm';
import AdminMenu from '../../../components/admin/AdminMenu';
import Title from '../../../components/layout/Title';
import CountryService from '../../../services/Country.service';

const AdminNewUser = ({ t, user, countries }) => {
  const router = useRouter();
  const saveUserUrl = '/api/users';
  const redirectUrl = '/admin/users';

  const handleSubmit = (data) => {
    fetch(saveUserUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  };

  const handleCancel = () => router.back();

  return (
    <Container fluid>
      <AdminMenu user={user} />
      <Container className="pt-4 pb-4">
        <Row className="justify-content-center mb-4 mt-4">
          <Title color="blueTitle" type="title">
            {t('userDetail')}
          </Title>
        </Row>

        <Row>
          <Col md={{
            span: 8,
            offset: 2,
          }}
          >
            <UserAdminForm countries={countries} onSubmit={handleSubmit} onCancel={handleCancel} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export const getServerSideProps = needsAuth(async ({ user }) => {
  const countries = await CountryService.findAll();

  return {
    props: {
      user,
      countries,
    },
  };
});

AdminNewUser.defaultProps = {
  i18nNamespaces: ['common', 'countries'],
};

export default withTranslation(['common', 'countries'])(AdminNewUser);
