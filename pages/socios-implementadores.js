import {
  Container, Row, Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import { withTranslation } from '../i18n';
import Title from '../components/layout/Title';
import {
  blue1, grayBck,
} from '../styles/colors';
import CountryHeader from '../components/countries/CountryHeader';

const LinkUrl = styled.a`
  color: ${blue1};
`;
const SiteUrlLabel = styled.p`
  font-weight: 700;
  display: contents;
`;
const PartnersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  border-bottom: 1px solid ${grayBck};
  margin-bottom: 1rem;
  padding: 1em 0;
  &:last-child {
    border-bottom: none;
  }
`;

const PartnerItem = ({ t }) => {
  const table = [];
  for (let i = 1; i <= 6; i++) {
    table.push(
      <PartnersContainer>
        <Col sm={4} className="d-sm-flex justify-content-center align-items-center">
          <img src={t(`partners.${i}.img_url`)} alt={t(`partners.${i}.name`)} />
        </Col>
        <Col sm={8}>
          <h3>{t(`partners.${i}.name`)}</h3>
          <p dangerouslySetInnerHTML={{ __html: t(`partners.${i}.description`, { interpolation: { escapeValue: false } }) }} />
          <SiteUrlLabel>Sitio web: </SiteUrlLabel>
          <LinkUrl href={t(`partners.${i}.site_url`)} target="_blank" rel="noreferrer">{t(`partners.${i}.site_url`)}</LinkUrl>
        </Col>
      </PartnersContainer>,
    );
  }
  return table;
};

const Partners = ({ t }) => {
  const breadcrumbPage = {
    name: t('title'),
    url: 'partners',
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
              <PartnerItem t={t} />
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

Partners.defaultProps = { i18nNamespaces: ['partners'] };

export default withTranslation('partners')(Partners);
