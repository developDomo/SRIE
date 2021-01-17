import { Container, Row } from 'react-bootstrap';
import { withTranslation } from '../i18n';
import Title from '../components/layout/Title';
import CountryHeader from '../components/countries/CountryHeader';

const Faqs = ({ t }) => {
  const breadcrumbPage = {
    name: t('title'),
    url: 'faqs',
  };
  return (
    <>
      <CountryHeader
        page={breadcrumbPage}
        active="country-data"
      />
      <Title color="blue" type="title" textCenter>
        {t('title')}
      </Title>
      <div className="bg-light">
        <Container>
          <Row className="d-sm-flex justify-content-center">
            <div className="col-sm-8 py-2 py-sm-5">
              <p>{t('soon')}</p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

Faqs.defaultProps = { i18nNamespaces: ['faqs'] };

export default withTranslation('faqs')(Faqs);
