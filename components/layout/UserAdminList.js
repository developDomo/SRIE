import Link from 'next/link';
import { withTranslation } from '../../i18n';
import { blue } from '../../theme/colors';

const UserAdminList = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>Country</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Rol</th>
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
          <td>
            <Link href={`/admin/users/${user.id}/edit`}>
              <a>Edit</a>
            </Link>
            <Link href={`/admin/users/${user.id}/delete`}>
              <a>Delete</a>
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

export default withTranslation('indicators')(UserAdminList);
