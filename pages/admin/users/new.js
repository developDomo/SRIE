import { useState } from 'react';
import { useRouter } from 'next/router';
import { withTranslation } from '../../../i18n';
import FetchUtils from '../../../utils/Fetch.utils';
import needsAuth from '../../../lib/needsAuth';
import UserAdminForm from '../../../components/layout/UserAdminForm';

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

const AdminNewUser = ({ countries }) => {
  const router = useRouter();
  const saveUserUrl = '/api/users';
  const redirectUrl = '/admin/users';
  const [newUser, setNewUser] = useState({});

  const validateNewUser = () => {
    // TODO: validate user info
    console.log('Validating...');
    return true;
  };

  const onSave = preventDefault(() => {
    if (!validateNewUser()) {
      return;
    }

    fetch(saveUserUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  });

  return (
    <UserAdminForm user={newUser} countries={countries} onSave={onSave} setUser={setNewUser} />
  );
};

export const getServerSideProps = needsAuth(async ({ user }) => {
  const countriesUrl = `${process.env.API_URL}/api/countries`;

  const [countries] = await FetchUtils.multipleFetch([
    countriesUrl,
  ]);

  return {
    props: {
      namespacesRequired: ['countries'],
      user,
      countries,
    },
  };
});

export default withTranslation('countries')(AdminNewUser);
