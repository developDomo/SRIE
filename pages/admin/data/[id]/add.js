import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import AdminMenu from '../../../../components/admin/AdminMenu';
import ManualDataForm from '../../../../components/admin/data/ManualDataForm';
import { withTranslation } from '../../../../i18n';
import needsAuth from '../../../../lib/needsAuth';
import CountryTitle from '../../../../components/countries/CountryTitle';
import Title from '../../../../components/layout/Title';
import FetchUtils from '../../../../utils/Fetch.utils';
import { txt } from '../../../../theme/colors';

const AdminDataNewForm = ({
  t, id, user, visualizations, indexes, data, variation, code, country, indicatorName,
}) => {
  const postUrl = `/api/indicators/${id}/manual-data`;
  const redirectUrl = `/admin/data/${code}`;

  const router = useRouter();
  const [formData, setFormData] = useState({});
  formData.country = user.country;
  formData.variation = variation;

  const handleSubmit = () => {
    fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  };

  const handleCancel = () => router.back();

  return (
    <Container fluid>
      <AdminMenu user={user} />
      <Container className="pt-4 pb-4">

        <CountryTitle country={country} />
        <Row className="justify-content-center mb-4 mt-4">
          <Title color="blueTitle" type="title">
            Datos de indicadores
          </Title>
        </Row>

        <Row>
          <Col md={{
            span: 10,
            offset: 1,
          }}
          >
            <Title color={txt} type="caption" textCenter className="mb-4">
              {t(indicatorName)}
            </Title>
            <ManualDataForm
              variation={variation}
              visualizations={visualizations}
              indexes={indexes}
              data={data}
              onSubmit={handleSubmit}
              setFormData={setFormData}
              formData={formData}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const [id, variation] = query.id.split('-');

  const countryUrl = `${process.env.API_URL}/api/countries/${user.country.toLowerCase()}`;

  const variationUrl = (variation) ? `variation=${variation}` : '';
  const indicatorUrl = `${process.env.API_URL}/api/indicators/${id}/manual-data?country=${user.country}&${variationUrl}`;

  const [country, indicator] = await FetchUtils.multipleFetch([
    countryUrl, indicatorUrl,
  ]);

  const indicatorName = (variation) ? `variations.${query.id}` : `indicators.${query.id}.metadata.title`;

  return ({
    props: {
      user,
      visualizations: indicator.visualizations,
      indexes: indicator.indexes,
      data: indicator.data,
      variation: variation || null,
      id,
      country,
      indicatorName,
      code: query.id,
    },
  });
});

AdminDataNewForm.defaultProps = {
  i18nNamespaces: ['indicators', 'common'],
};

export default withTranslation(['indicators', 'common'])(AdminDataNewForm);
