import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { useForm } from 'react-hook-form';
import { withTranslation } from '../../../../i18n';
import needsAuth from '../../../../lib/needsAuth';
import AdminMenu from '../../../../components/admin/AdminMenu';
import CountryTitle from '../../../../components/countries/CountryTitle';
import BackButton from '../../../../components/layout/BackButton';
import Title from '../../../../components/layout/Title';
import UserAdminForm from '../../../../components/layout/UserAdminForm';
import FormInput from '../../../../components/layout/FormInput';
import UserService from '../../../../services/User.service';
import { Serialize } from '../../../../utils/Serializer.utils';
import { Button } from '../../../../components/layout/Button';


const AdminUpdateUserPassword = ({
  t, user, updatePasswordUrl, targetUser,
}) => {
  const router = useRouter();
  const redirectUrl = '/admin/users';

  const {
    handleSubmit, register, errors,
  } = useForm({

  });

  const onSubmit = ({ password }) => {
    fetch(updatePasswordUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  };
  const handleCancel = () => router.back();

  return (

    <Container fluid>
      <AdminMenu user={user} />
      <Container className="pt-4 pb-4">

        <Row className="container mt-4">
          <BackButton onClick={handleCancel} />
        </Row>
        <Row className="justify-content-center mb-4 mt-4">
          <Title color="blueTitle" type="title">
            {t('edit')}
            {' '}
            {targetUser.name}
          </Title>
        </Row>

        <Row>
          <Col md={{
            span: 8,
            offset: 2,
          }}
          >
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <Row className="field-group mt-2 pt-3 mb-2">
                <FormInput
                  name="password"
                  label={t('changePassword')}
                  ref={register}
                  required
                  errors
                />
              </Row>
              <Row className="mt-4">
                <Col
                  xs={12}
                  sm={{
                    span: 10,
                    offset: 1,
                  }}
                  lg={{
                    span: 8,
                    offset: 2,
                  }}
                >
                  <Row>
                    <Button
                      type="submit"
                      className="btn-add-data col-12 col-sm-7 mx-sm-1 mb-2 mb-sm-0"
                      color="blue"
                    >
                      {t('save')}
                    </Button>
                    <Button
                      outline
                      type="button"
                      className="col-12 col-sm-4 mx-sm-1"
                      color="blue"
                      onClick={handleCancel}
                    >
                      {t('cancel')}
                    </Button>
                  </Row>
                </Col>
              </Row>

            </form>
          </Col>
        </Row>
      </Container>
    </Container>

  );
};

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const { id } = query;
  const updatePasswordUrl = `${process.env.API_URL}/api/users/${id}/update-password`;
  let targetUser = await UserService.findById(id);
  targetUser = Serialize(targetUser);
  targetUser.name = `${targetUser.first_name} ${targetUser.last_name}`;
  return {
    props: {
      user,
      targetUser,
      id,
      updatePasswordUrl,
    },
  };
});

export default withTranslation(['common', 'countries'])(AdminUpdateUserPassword);
