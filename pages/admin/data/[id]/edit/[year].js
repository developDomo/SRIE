import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from '../../../../../i18n';
import AdminMenu from '../../../../../components/admin/AdminMenu';
import ManualDataForm from '../../../../../components/admin/data/ManualDataForm';
import needsAuth from '../../../../../lib/needsAuth';
import FetchUtils from '../../../../../utils/Fetch.utils';
import CountryTitle from '../../../../../components/countries/CountryTitle';
import Title from '../../../../../components/layout/Title';
import { txt } from '../../../../../theme/colors';

const AdminDataEdit = ({
  t, id, user, visualizations, indexes, data, variation, year, country, indicatorName, indicatorData,
}) => {
  const variationQueryParam = variation ? `variation=${variation}` : '';
  const postUrl = `/api/indicators/${id}/manual-data/edit`;
  const redirectUrl = `/admin/data/${id}?${variationQueryParam}`;

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
  const { year } = query;
  const [id, variation] = query.id.split('-');

  const variationUrl = (variation) ? `variation=${variation}` : '';
  const indicatorUrl = `${process.env.API_URL}/api/indicators/${id}/manual-data?country=${user.country}&${variationUrl}`;
  const countryUrl = `${process.env.API_URL}/api/countries/${user.country.toLowerCase()}`;

  const [country, indicator] = await FetchUtils.multipleFetch([
    countryUrl, indicatorUrl,
  ]);

  const indicatorName = (variation) ? `variations.${query.id}` : `indicators.${query.id}.metadata.title`;
  const indicatorData = 'indicatorData';
  return ({
    props: {
      namespacesRequired: ['indicators', 'common'],
      user,
      visualizations: indicator.visualizations,
      indexes: indicator.indexes,
      data: indicator.data.filter((row) => row.year === year),
      variation: variation || null,
      id,
      year,
      indicatorName,
      indicatorData,
      country,
    },
  });
});

export default withTranslation(['indicators', 'common'])(AdminDataEdit);
