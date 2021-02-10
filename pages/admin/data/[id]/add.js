import React from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import AdminMenu from '../../../../components/admin/AdminMenu';
import ManualDataForm from '../../../../components/admin/data/ManualDataForm';
import { withTranslation } from '../../../../i18n';
import needsAuth from '../../../../lib/needsAuth';
import CountryTitle from '../../../../components/countries/CountryTitle';
import Title from '../../../../components/layout/Title';
import { txt } from '../../../../theme/colors';
import CountryService from '../../../../services/Country.service';
import ManualDataService from '../../../../services/ManualData.service';
import { Serialize } from '../../../../utils/Serializer.utils';
import BackButton from '../../../../components/layout/BackButton';

const AdminDataNewForm = ({
  t, id, user, visualizations, indexes, variation, code, country, indicatorName, data,
}) => {
  const postUrl = `/api/indicators/${id}/manual-data`;
  const redirectUrl = `/admin/data/${code}`;

  const router = useRouter();

  const handleSubmit = async (d, e) => {
    e.preventDefault();
    const defaultData = {
      ...d,
      country: user.country,
      variation,
    };

    const res = await fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(defaultData),
    });

    if (res.ok) router.push(redirectUrl);
  };

  const handleCancel = () => router.back();
  const goToDataDashboard = () => router.push('/admin/data');

  return (
    <Container fluid>
      <AdminMenu user={user} />
      <Container className="pt-4 pb-4">

        <CountryTitle country={country} />
        <Row className="container mt-4">
          <BackButton onClick={goToDataDashboard} />
        </Row>
        <Row className="justify-content-center mb-4 mt-4">
          <Title color="blue" type="title">
            {t('indicatorData')}
          </Title>
        </Row>

        <Row>
          <Col md={{
            span: 10,
            offset: 1,
          }}
          >
            <Title color={txt} type="caption" textCenter className="mb-4">
              {t(`indicators:${indicatorName}`)}
            </Title>
            <ManualDataForm
              variation={variation}
              visualizations={visualizations}
              indexes={indexes}
              data={data}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const [id, variation] = query.id.split('-');
  const countryService = CountryService.findByCode(user.country);

  const indicatorService = ManualDataService.findManualDataByIndicatorId(
    id,
    variation,
    user.country,
  );

  const [country, indicator] = await Promise.all([countryService, indicatorService]);

  const serializedIndicator = Serialize(indicator);

  const indicatorName = (variation) ? `variations.${query.id}` : `indicators.${query.id}.metadata.title`;

  return ({
    props: {
      user,
      visualizations: serializedIndicator.visualizations,
      indexes: serializedIndicator.indexes,
      data: serializedIndicator.data,
      variation: variation || null,
      id,
      country,
      indicatorName,
      code: query.id,
    },
  });
});

AdminDataNewForm.defaultProps = {
  i18nNamespaces: ['common', 'indicators', 'countries'],
};

export default withTranslation(['common', 'indicators'])(AdminDataNewForm);
