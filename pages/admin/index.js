import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DateTime } from 'luxon';
import needsAuth from '../../lib/needsAuth';
import { withTranslation } from '../../i18n';
import AdminDashboard from '../../components/admin/index/AdminDashboard';
import CountryAdminDashboard from '../../components/admin/index/CountryAdminDashboard';
import AdminMenu from '../../components/admin/AdminMenu';
import EventService from '../../services/Event.service';
import CountryService from '../../services/Country.service';

DateTime.local();

const AdminHome = (props) => {
  const { user } = props;
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
    };
  });

  const handlePagination = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };
  return (
    <Container fluid>
      <AdminMenu user={user} />
      {(user.role === 'admin') ? <AdminDashboard {...props} handlePagination={handlePagination} isLoading={isLoading} /> : <CountryAdminDashboard {...props} />}
    </Container>
  );
};

export const getServerSideProps = needsAuth(async (context) => {
  const { user, query } = context;
  const page = query.page || 1;

  const events = await EventService.paginate(page, 20);
  events.elements.map((e) => { e.timestamp = e.timestamp.toISOString(); return e; });
  const country = await CountryService.findByCode(user.country);

  return {
    props: {
      events: events.elements,
      page: events.page,
      size: events.size,
      totalPages: events.totalPages,
      totalElements: events.totalElements,
      user,
      country,
    },
  };
});

AdminHome.defaultProps = {
  i18nNamespaces: ['common'],
};

export default withTranslation('common')(AdminHome);
