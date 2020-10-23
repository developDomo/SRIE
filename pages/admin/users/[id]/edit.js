/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import _ from 'lodash';
import { withTranslation } from '../../../../i18n';
import FetchUtils from '../../../../utils/Fetch.utils';
import needsAuth from '../../../../lib/needsAuth';
import UserAdminForm from '../../../../components/layout/UserAdminForm';
import AdminMenu from '../../../../components/admin/AdminMenu';
import Title from '../../../../components/layout/Title';
import CountryService from '../../../../services/Country.service';
import UserService from '../../../../services/User.service';
import { Serialize } from '../../../../utils/Serializer.utils';
import CountryTitle from '../../../../components/countries/CountryTitle';

const AdminEditUser = ({
  t, countries, user, userUrl, loggedUser, country,
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
  const userUrl = `${process.env.API_URL}/api/users/${id}`;
  const countries = await CountryService.findAll();
  const existingUser = await UserService.findById(id);
  const existing = Serialize(existingUser);
  const country = _.find(countries, (c) => c.code === user.country.toLowerCase());
  return {
    props: {
      loggedUser: user,
      countries,
      user: existing,
      userUrl,
      country,
    },
  };
});

AdminEditUser.defaultProps = {
  i18nNamespaces: ['common', 'countries'],
};

export default withTranslation(['common', 'countries'])(AdminEditUser);
