/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from '../../../../i18n';
import FetchUtils from '../../../../utils/Fetch.utils';
import needsAuth from '../../../../lib/needsAuth';
import UserAdminForm from '../../../../components/layout/UserAdminForm';
import AdminMenu from '../../../../components/admin/AdminMenu';
import Title from '../../../../components/layout/Title';

const AdminEditUser = ({
  t, countries, user, userUrl, loggedUser,
}) => {
  const router = useRouter();
  const redirectUrl = '/admin/users';

  const handleSubmit = (data) => {
    fetch(userUrl, {
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
      <AdminMenu user={loggedUser} />
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
            <UserAdminForm editing user={user} countries={countries} onSubmit={handleSubmit} onCancel={handleCancel} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const { id } = query;
  const countriesUrl = `${process.env.API_URL}/api/countries`;
  const userUrl = `${process.env.API_URL}/api/users/${id}`;

  const [countries, existing] = await FetchUtils.multipleFetch([
    countriesUrl,
    userUrl,
  ]);

  return {
    props: {
      loggedUser: user,
      countries,
      user: existing,
      userUrl,
    },
  };
});

AdminEditUser.defaultProps = {
  i18nNamespaces: ['common', 'countries'],
};

export default withTranslation(['common', 'countries'])(AdminEditUser);
