// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.COOKIE_SECRET,
    cookieName: 'srie-auth',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
}
