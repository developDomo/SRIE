import { useRouter } from 'next/router';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { blue } from '../../theme/colors';
import { Edit, Delete } from './Icons';
import ConfirmationModal from './ConfimationModal';
import { withTranslation } from '../../i18n';

const redirectUrl = '/admin/users';

const UserAdminList = ({ t, users }) => {
  const router = useRouter();
  const [userToDelete, setUserToDelete] = useState(null);

  const deleteUser = (id) => {
    const deleteUserUrl = `${process.env.API_URL}/api/users/${id}/delete`;
    fetch(deleteUserUrl, {
      method: 'POST',
    }).then((res) => {
      setUserToDelete(null);
      if (res.ok) router.push(redirectUrl);
    });
  };

  return (
    <>
      <Table className="table-hover-" responsive="lg">
        <thead>
          <tr className="align-middle text-center">
            <th className="w-auto">{t('user')}</th>
            <th className="w-50">{t('name')}</th>
            <th className="w-auto">{t('country')}</th>
            <th className="w-auto">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="align-middle text-center">
                {user.email}
              </td>
              <td className="align-middle text-center">
                {user.first_name}
                {' '}
                {user.last_name}
              </td>
              <td className="align-middle text-center">{user.country}</td>
              <td className="align-middle text-center actions">
                <ButtonGroup>
                  <Link href={`/admin/users/${user.id}/edit`}>
                    <a className="btn btn-light">
                      <Edit />
                    </a>
                  </Link>
                  <button type="button" className="btn btn-light text-danger" onClick={() => setUserToDelete(user)}>
                    <Delete />
                  </button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
        <style jsx>
          {`
        th {
          background-color: ${blue};
          color: white;
          line-height: 2em;
        }
    `}
        </style>
      </Table>
      {userToDelete?.id}
      <ConfirmationModal
        visible={userToDelete}
        title={`¿Seguro que desea eliminar el usuario ${userToDelete?.email}?`}
        onConfirm={() => deleteUser(userToDelete.id)}
        onCancel={() => setUserToDelete(null)}

      />

    </>
  );
};

UserAdminList.defaultProps = {
  i18nNamespaces: ['common'],
};

export default withTranslation(['common'])(UserAdminList);
