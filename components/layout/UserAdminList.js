import { useRouter } from 'next/router';
import Link from 'next/link';
import { withTranslation } from '../../i18n';
import { blue } from '../../theme/colors';

const redirectUrl = '/admin/users';

const UserAdminList = ({ users }) => {
  const router = useRouter();

  const deleteUser = (id) => {
    const deleteUserUrl = `${process.env.API_URL}/api/users/${id}/delete`;

    fetch(deleteUserUrl, {
      method: 'POST',
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Last Login</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.country}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.last_login}</td>
            <td>
              <Link href={`/admin/users/${user.id}/edit`}>
                <a>Edit</a>
              </Link>
              <button type="button" onClick={() => deleteUser(user.id)}>Delete</button>
              <Link href={`/admin/users/${user.id}/change-password`}>
                <a>Change Password</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
      <style jsx>
        {`
      th {
        background-color: ${blue};
        color: white;
        text-align: center;
        vertical-align: center;
        line-height: 2em;
      }

      td {
        text-align: center;
        padding: 5px 10px;
        line-height: 2em;

      }
    `}
      </style>
    </table>
  );
};

export default withTranslation('indicators')(UserAdminList);
