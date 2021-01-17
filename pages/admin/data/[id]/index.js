import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { useRouter } from 'next/router';
import { i18n, withTranslation } from '../../../../i18n';
import AdminMenu from '../../../../components/admin/AdminMenu';
import ManualDataTable from '../../../../components/admin/data/ManualDataTable';
import needsAuth from '../../../../lib/needsAuth';
import CountryTitle from '../../../../components/countries/CountryTitle';
import Title from '../../../../components/layout/Title';
import { Button } from '../../../../components/layout/Button';
import CountryService from '../../../../services/Country.service';
import ManualDataService from '../../../../services/ManualData.service';
import { Serialize } from '../../../../utils/Serializer.utils';
import BackButton from '../../../../components/layout/BackButton';


const AdminDataDetails = ({
  t, user, visualizations, indexes, data, addDataUrl, country, indicatorName, indicatorId,
}) => {
  const router = useRouter();

  const handleCancel = () => router.back();

  return (
    <Container fluid>
      <AdminMenu user={user} />

      <Container className="pt-4 pb-4">
        <CountryTitle country={country} />
        <Row className="container mt-4">
          <BackButton onClick={handleCancel} />
        </Row>
        <Row className="justify-content-center mb-4 mt-4">
          <Title color="blueTitle" type="title">
            {t('indicatorData')}
          </Title>
        </Row>
        <Row>
          <Col
            md={{
              span: 10,
              offset: 1,
            }}
            className="text-right"
          >
            <a
              className="btn btn-outline-primary btn-sm rounded-0"
              download
              href={`/static/metadata-pdf/${i18n.language || 'es'}/metadatos-srie-ind${indicatorId}.pdf`}
            >
              {t('downloadIndicatorMetadata')}
            </a>
          </Col>
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

            <ManualDataTable responsive className="mt-4 mb-4" visualizations={visualizations} indexes={indexes} data={data} />
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
};

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const indicatorId = query.id;
  const [id, variation] = indicatorId.split('-');
  const countryService = CountryService.findByCode(user.country);
  const indicatorService = ManualDataService.findManualDataByIndicatorId(
    id,
    variation,
    user.country,
  );
  const [country, indicator] = await Promise.all([countryService, indicatorService]);
  const serializedIndicator = Serialize(indicator);
  const indicatorName = (variation) ? `variations.${indicatorId}` : `indicators.${indicatorId}.metadata.title`;
  const addDataUrl = `/admin/data/${indicatorId}/add`;

  return {
    props: {
      user,
      id,
      indicatorName,
      indicatorId,
      addDataUrl,
      country,
      ...serializedIndicator,
    },
  };
});

AdminDataDetails.defaultProps = {
  i18nNamespaces: ['common', 'countries', 'indicators'],
};

export default withTranslation(['common', 'indicators'])(AdminDataDetails);
