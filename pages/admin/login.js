import React, { useState } from 'react';
import useUser from '../../lib/useUser';
import fetchJson from '../../lib/fetchJson';
import LoginForm from '../../components/admin/login/LoginForm';

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
    <div>
      <div className="login">
        <LoginForm isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>
        {`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
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
