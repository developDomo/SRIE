import { useRouter } from 'next/router';
import { withTranslation } from '../../../../i18n';
import needsAuth from '../../../../lib/needsAuth';

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

const AdminUpdateUserPassword = ({ updatePasswordUrl }) => {
  let password = '';
  const router = useRouter();
  const redirectUrl = '/admin/users';

  const onPasswordBlur = (e) => {
    password = e.target.value;
  };

  const onSubmit = preventDefault(() => {
    fetch(updatePasswordUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="password">Password</label>
      <input name="password" type="password" onBlur={onPasswordBlur} />
      <button type="submit">Save</button>
    </form>
  );
};

export const getServerSideProps = needsAuth(async ({ query }) => {
  const { id } = query;
  const updatePasswordUrl = `${process.env.API_URL}/api/users/${id}/update-password`;

  return {
    props: {
      id,
      updatePasswordUrl,
    },
  };
});

export default withTranslation('countries')(AdminUpdateUserPassword);
