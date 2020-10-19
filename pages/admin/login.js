import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useUser from '../../lib/useUser';
import fetchJson from '../../lib/fetchJson';
import LoginForm from '../../components/admin/login/LoginForm';
import AdminMenu from '../../components/admin/AdminMenu';
import {
  gray1,
} from '../../theme/colors';

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/admin',
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      await mutateUser(
        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      setErrorMsg('Invalid username/password');
    }
  }

  return (
    <div className="container-fluid login d-flex flex-grow-1 flex-column">
      <AdminMenu />
      <Container className="justify-content-center flex-grow-1 d-flex">
        <Row className="align-self-center col-12 col-md-8 pt-5 pb-5">
          <LoginForm isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
        </Row>
      </Container>
      <style jsx>
        {`
        .login {
          background-color: ${gray1}
        }
      `}
      </style>
    </div>
  );
};

Login.getInitialProps = async () => ({
  namespacesRequired: [''],
});

export default Login;
