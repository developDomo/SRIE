/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { withTranslation } from '../../../../i18n';
import FetchUtils from '../../../../utils/Fetch.utils';
import needsAuth from '../../../../lib/needsAuth';
import UserAdminForm from '../../../../components/layout/UserAdminForm';

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

const initUser = (editedUser, user) => {
  editedUser.first_name = user.first_name;
  editedUser.last_name = user.last_name;
  editedUser.email = user.email;
  editedUser.role = user.role;
  editedUser.country = user.country;
};

const AdminNewUser = ({ countries, user, userUrl }) => {
  const router = useRouter();
  const redirectUrl = '/admin/users';
  const [editedUser, setEditedUser] = useState({});
  initUser(editedUser, user);


  const validateUser = () => {
    // TODO: validate user info
    console.log('Validating...');
    return true;
  };

  const onSave = preventDefault(() => {
    if (!validateUser()) {
      return;
    }

    fetch(userUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedUser),
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  });

  return (
    <UserAdminForm editing user={editedUser} countries={countries} onSave={onSave} setUser={setEditedUser} />
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
      namespacesRequired: ['countries'],
      loggedUser: user,
      countries,
      user: existing,
      userUrl,
    },
  };
});

export default withTranslation('countries')(AdminNewUser);
