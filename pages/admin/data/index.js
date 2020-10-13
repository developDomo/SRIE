import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from '../../../i18n';
import AdminMenu from '../../../components/admin/AdminMenu';
import needsAuth from '../../../lib/needsAuth';
import Title from '../../../components/layout/Title';
import CountryTitle from '../../../components/countries/CountryTitle';
import FetchUtils from '../../../utils/Fetch.utils';
import IndicatorAdminList from '../../../components/layout/IndicatorAdminList';
import CountryService from '../../../services/Country.service';

const AdminData = ({
  t, user, country, indicators,
}) => (
  <Container fluid>
    <AdminMenu user={user} />
    <Container className="pt-4 pb-4">
      <CountryTitle country={country} />
      <Row className="mt-4 mb-4">
        <div className="col-lg-12 pr-0 text-center">
          <Title color="blueTitle" type="title">
            {t('indicatorData')}

          </Title>
        </div>
      </Row>
      <Row>
        <Col md={{
          span: 10,
          offset: 1,
        }}
        >
          <IndicatorAdminList className="col-md-8 offset-2" indicators={indicators} />
        </Col>
      </Row>
    </Container>
  </Container>
);

export const getServerSideProps = needsAuth(async ({ user }) => {
  const country = await CountryService.findByCode(user.country);

  // TODO: move this hardcoded list to an endpoint. For now it works fine.

  const indicators = [
    {
      code: '12-c',
      isVariation: true,
    },
    {
      code: '18',
      isVariation: false,
    },
    {
      code: '24',
      isVariation: false,
    },
  ];

  return {

    props: {
      user,
      country,
      indicators,
    },
  };
});

AdminData.defaultProps = {
  i18nNamespaces: ['common'],
};

export default withTranslation('common')(AdminData);
