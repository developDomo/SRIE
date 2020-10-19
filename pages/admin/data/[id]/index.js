import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { withTranslation } from '../../../../i18n';
import AdminMenu from '../../../../components/admin/AdminMenu';
import ManualDataTable from '../../../../components/admin/data/ManualDataTable';
import needsAuth from '../../../../lib/needsAuth';
import CountryTitle from '../../../../components/countries/CountryTitle';
import Title from '../../../../components/layout/Title';
import FetchUtils from '../../../../utils/Fetch.utils';
import { Button } from '../../../../components/layout/Button';
import CountryService from '../../../../services/Country.service';
import ManualDataService from '../../../../services/ManualData.service';
import { Serialize } from '../../../../utils/Serializer.utils';

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
  const countryService = CountryService.findByCode(user.country.toLowerCase());

  const indicatorService = ManualDataService.findManualDataByIndicatorId(
    id,
    variation,
    user.country,
  );
  const [country, indicator] = await Promise.all([countryService, indicatorService]);
  const serializedIndicator = Serialize(indicator);

  const indicatorName = (variation) ? `variations.${query.id}` : `indicators.${query.id}.metadata.title`;

  return {
    props: {
      user,
      id,
      visualizations: serializedIndicator.visualizations,
      indexes: serializedIndicator.indexes,
      data: serializedIndicator.data,
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
