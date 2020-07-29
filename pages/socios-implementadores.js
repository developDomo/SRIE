import {
  Container, Row, Col,
} from 'react-bootstrap';
import { i18n, withTranslation } from '../i18n';
import Title from '../components/layout/Title';

const PartnerItem = ({ t }) => {
  const table = [];
  for (let i = 1; i <= 6; i++) {
    table.push(
      <Row className="partners-container">
        <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
          <img src={t(`partners.${i}.img_url`)} alt={t(`partners.${i}.name`)} />
        </Col>
        <Col sm={8}>
          <h3>{t(`partners.${i}.name`)}</h3>
          <div dangerouslySetInnerHTML={{ __html: t(`partners.${i}.description`, { interpolation: { escapeValue: false } }) }} />
          <p className="site-link-label">Sitio web: </p>
          <a href={t(`partners.${i}.site_url`)} target="_blank" rel="noreferrer">{t(`partners.${i}.site_url`)}</a>
        </Col>
      </Row>,
    );
  }
  return table;
};

const Partners = ({ t }) => (
  <>
    <Title color="azul" type="title" textCenter>
      {t('title')}
    </Title>
    <div className="bg-light">
      <Container>
        <Row className="d-sm-flex justify-content-center">
          <div className="col-sm-8 py-2 py-sm-5">
            <PartnerItem t={t} />
          </div>
        </Row>
      </Container>
    </div>
    <style jsx>
      {`
        .site-link-label {
          display: contents;
        }
      `}
    </style>
    <style type="text/css">
      {`
        .partners-container {
          border-bottom: 1px solid #cecece;
          margin-bottom: 1rem;
          padding: 1em 0;
        }
        .partners-container:last-child {
          border-bottom: none;
        }
        .site-link-label {
          display: contents;
        }
      `}
    </style>
  </>
);

export default withTranslation('partners')(Partners);
