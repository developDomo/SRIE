import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useUser from '../../lib/useUser';
import fetchJson from '../../lib/fetchJson';

const AdminMenu = ({ user }) => {
  const { mutateUser } = useUser();
  const router = useRouter();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/admin">
              <a>Dashboard</a>
            </Link>
          </li>
          {!user?.isLoggedIn && (
            <li>
              <Link href="/admin/login">
                <a>Login</a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn && user?.role === 'admin' && (
            <li>
              <Link href="/admin/users">
                <a>
                  Users
                </a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn && (
            <>
              <li>
                <Link href="/admin">
                  <a>Data</a>
                </Link>
              </li>
              <li>
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    await mutateUser(fetchJson('/api/logout'));
                    router.push('/admin/login');
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}

        </ul>
      </nav>
      <style jsx>
        {`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }

        li {
          margin-right: 1rem;
          display: flex;
        }

        li:first-child {
          margin-left: auto;
        }

        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a img {
          margin-right: 1em;
        }

        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}

      </style>
    </header>
  );
};

export default AdminMenu;
