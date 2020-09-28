import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from '../../../../i18n';
import AdminMenu from '../../../../components/admin/AdminMenu';
import ManualDataTable from '../../../../components/admin/data/ManualDataTable';
import needsAuth from '../../../../lib/needsAuth';
import CountryTitle from '../../../../components/countries/CountryTitle';
import Title from '../../../../components/layout/Title';
import FetchUtils from '../../../../utils/Fetch.utils';
import { Button } from '../../../../components/layout/Button';

const AdminDataDetails = ({
  t, user, id, visualizations, indexes, data, addDataUrl, country, indicatorName,
}) => (

  <Container fluid>
    <AdminMenu user={user} />

    <Container className="pt-4 pb-4">
      <CountryTitle country={country} />
      <Row className="justify-content-center mb-4 mt-4">
        <Title color="blueTitle" type="title">
          {t('indicatorData')}
        </Title>
      </Row>

      <Row>
        <Col md={{
          span: 10,
          offset: 1,
        }}
        >
          <Title type="caption" textCenter className="mb-4">
            {t(`indicators:${indicatorName}`)}
          </Title>

          <ManualDataTable className="mt-4 mb-4" visualizations={visualizations} indexes={indexes} data={data} />
        </Col>
      </Row>
      <Row>
        <Col sm={{
          span: 4,
          offset: 4,
        }}
        >
          <Link passHref href={addDataUrl}>
            <Button className="btn-add-data mt-4" color="blue">
              <a>
                {`${t('add')} ${t('data')}  +`}
              </a>
            </Button>
          </Link>

        </Col>
      </Row>
    </Container>

  </Container>
);

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const [id, variation] = query.id.split('-');

  const variationUrl = (variation) ? `variation=${variation}` : '';
  const indicatorUrl = `${process.env.API_URL}/api/indicators/${id}/manual-data?country=${user.country}&${variationUrl}`;
  const countryUrl = `${process.env.API_URL}/api/countries/${user.country.toLowerCase()}`;
  const [country, indicator] = await FetchUtils.multipleFetch([
    countryUrl, indicatorUrl,
  ]);
  const indicatorName = (variation) ? `variations.${query.id}` : `indicators.${query.id}.metadata.title`;

  return {
    props: {
      user,
      id,
      visualizations: indicator.visualizations,
      indexes: indicator.indexes,
      data: indicator.data,
      indicatorName,
      addDataUrl: `/admin/data/${query.id}/add`,
      country,
    },
  };
});

AdminDataDetails.defaultProps = {
  i18nNamespaces: ['common', 'countries', 'indicators'],
};

export default withTranslation(['common', 'indicators'])(AdminDataDetails);
